"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, deleteDoc, doc, onSnapshot, orderBy, query, writeBatch } from "firebase/firestore";
import * as XLSX from "xlsx";
import { auth, db } from "@/components/lib/firebase";

function formatDate(ts) {
  if (!ts) return "-";
  const date = ts.toDate ? ts.toDate() : new Date(ts);
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function toJsDate(ts) {
  if (!ts) return null;
  return ts.toDate ? ts.toDate() : new Date(ts);
}

/** Safe segment for download filename (Windows + URL-ish chars). */
function sanitizeFilenameSegment(value, maxLen = 48) {
  const s = String(value ?? "")
    .trim()
    .replace(/[/\\?%*:|"<>]/g, "-")
    .replace(/\s+/g, "-");
  return s.slice(0, maxLen) || "none";
}

function matchesNameOrPhoneSearch(item, raw) {
  const q = raw.trim();
  if (!q) return true;
  const name = String(item.name || "").toLowerCase();
  const phone = String(item.phone || "");
  const phoneLower = phone.toLowerCase();

  if (/^\d+$/.test(q)) {
    const digits = phone.replace(/\D/g, "");
    return digits.includes(q);
  }

  const ql = q.toLowerCase();
  return name.includes(ql) || phoneLower.includes(ql);
}

export default function AdminContactsPage() {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let unsubContacts = null;
    const unsubAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace("/admin/login");
        return;
      }
      setCheckingAuth(false);
      const q = query(collection(db, "contact"), orderBy("createdAt", "desc"));
      unsubContacts = onSnapshot(
        q,
        (snap) => {
          const rows = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setItems(rows);
        },
        () => setError("Failed to load contacts.")
      );
    });
    return () => {
      unsubAuth();
      if (unsubContacts) unsubContacts();
    };
  }, [router]);

  const filteredItems = useMemo(() => {
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;

    if (from) from.setHours(0, 0, 0, 0);
    if (to) to.setHours(23, 59, 59, 999);

    return items.filter((item) => {
      const matchesSearch = matchesNameOrPhoneSearch(item, searchTerm);

      const created = toJsDate(item.createdAt);
      const matchesFrom = !from || (created && created >= from);
      const matchesTo = !to || (created && created <= to);

      return matchesSearch && matchesFrom && matchesTo;
    });
  }, [items, searchTerm, fromDate, toDate]);

  const total = items.length;
  const filteredTotal = filteredItems.length;
  const allFilteredSelected =
    filteredItems.length > 0 && filteredItems.every((item) => selectedIds.includes(item.id));

  const handleResetFilters = () => {
    setSearchTerm("");
    setFromDate("");
    setToDate("");
    setSelectedIds([]);
  };

  const toggleSelectAllFiltered = () => {
    if (allFilteredSelected) {
      setSelectedIds((prev) => prev.filter((id) => !filteredItems.some((item) => item.id === id)));
      return;
    }
    setSelectedIds((prev) => {
      const next = new Set(prev);
      filteredItems.forEach((item) => next.add(item.id));
      return Array.from(next);
    });
  };

  const toggleSelectOne = (id) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const exportFilteredToExcel = () => {
    if (filteredItems.length === 0) return;

    const excelRows = filteredItems.map((item) => ({
      Name: item.name || "-",
      Phone: item.phone || "-",
      Email: item.email || "-",
      Course: item.course || "-",
      Message: item.message || "-",
      Created: formatDate(item.createdAt),
    }));

    const worksheet = XLSX.utils.json_to_sheet(excelRows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Contacts");

    const fromLabel = sanitizeFilenameSegment(fromDate || "all");
    const toLabel = sanitizeFilenameSegment(toDate || "all");
    const searchLabel = sanitizeFilenameSegment(searchTerm.trim() || "all");
    const filename = `download-data-from-${fromLabel}-to-${toLabel}-search-${searchLabel}.xls`;
    XLSX.writeFile(workbook, filename, { bookType: "xls" });
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.replace("/admin/login");
  };

  const handleBack = () => {
    router.back();
  };

  const handleDeleteSingle = async (id) => {
    const ok = window.confirm("Delete this contact?");
    if (!ok) return;

    try {
      setDeleting(true);
      await deleteDoc(doc(db, "contact", id));
      setSelectedIds((prev) => prev.filter((x) => x !== id));
    } catch {
      setError("Failed to delete contact.");
    } finally {
      setDeleting(false);
    }
  };

  const handleDeleteSelected = async () => {
    if (selectedIds.length === 0) return;
    const ok = window.confirm(`Delete ${selectedIds.length} selected contacts?`);
    if (!ok) return;

    try {
      setDeleting(true);
      const batch = writeBatch(db);
      selectedIds.forEach((id) => {
        batch.delete(doc(db, "contact", id));
      });
      await batch.commit();
      setSelectedIds([]);
    } catch {
      setError("Failed to delete selected contacts.");
    } finally {
      setDeleting(false);
    }
  };

  if (checkingAuth) {
    return <div className="min-h-[70svh] grid place-items-center text-muted">Loading...</div>;
  }

  return (
    <section className="min-h-[100svh] bg-background px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-primary-dark">Contact Form Submissions</h1>
            <p className="text-sm text-muted mt-1">Showing: {filteredTotal} / {total}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleBack}
              disabled={deleting}
              className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Back
            </button>
            {selectedIds.length > 1 && (
              <button
                onClick={handleDeleteSelected}
                disabled={deleting}
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                {deleting ? "Deleting..." : `Delete Selected (${selectedIds.length})`}
              </button>
            )}
            <button
              onClick={exportFilteredToExcel}
              disabled={filteredItems.length === 0 || deleting}
              className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Download Data
            </button>
            <button
              onClick={handleLogout}
              disabled={deleting}
              className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark transition"
            >
              Logout
            </button>
          </div>
        </div>

        {error && <p className="mb-4 text-red-600 text-sm">{error}</p>}

        <div className="mb-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search name or mobile"
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20"
          />
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20"
          />
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20"
          />
          <button
            type="button"
            onClick={handleResetFilters}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm hover:bg-gray-50 transition"
          >
            Clear Filters
          </button>
        </div>

        <div className="overflow-x-auto bg-white border border-gray-100 rounded-2xl shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-primary/5 text-primary-dark">
              <tr>
                <th className="text-left px-4 py-3 font-semibold w-10">
                  <input
                    type="checkbox"
                    checked={allFilteredSelected}
                    onChange={toggleSelectAllFiltered}
                    aria-label="Select all visible contacts"
                    className="accent-primary"
                  />
                </th>
                <th className="text-left px-4 py-3 font-semibold">Name</th>
                <th className="text-left px-4 py-3 font-semibold">Phone</th>
                <th className="text-left px-4 py-3 font-semibold">Email</th>
                <th className="text-left px-4 py-3 font-semibold">Course</th>
                <th className="text-left px-4 py-3 font-semibold">Message</th>
                <th className="text-left px-4 py-3 font-semibold">Created</th>
                <th className="text-left px-4 py-3 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-8 text-center text-muted">
                    No submissions yet.
                  </td>
                </tr>
              ) : (
                filteredItems.map((item) => (
                  <tr key={item.id} className="border-t border-gray-100 align-top">
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(item.id)}
                        onChange={() => toggleSelectOne(item.id)}
                        aria-label={`Select ${item.name || "contact"}`}
                        className="accent-primary"
                      />
                    </td>
                    <td className="px-4 py-3">{item.name || "-"}</td>
                    <td className="px-4 py-3">{item.phone || "-"}</td>
                    <td className="px-4 py-3">{item.email || "-"}</td>
                    <td className="px-4 py-3">{item.course || "-"}</td>
                    <td className="px-4 py-3 max-w-[320px] whitespace-pre-wrap break-words">
                      {item.message || "-"}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">{formatDate(item.createdAt)}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() => handleDeleteSingle(item.id)}
                        disabled={deleting}
                        className="px-3 py-1.5 rounded-md bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 disabled:opacity-50 disabled:cursor-not-allowed transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
