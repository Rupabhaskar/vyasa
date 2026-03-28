"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { auth, db } from "@/components/lib/firebase";

function formatDate(ts) {
  if (!ts) return "-";
  const date = ts.toDate ? ts.toDate() : new Date(ts);
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export default function AdminContactsPage() {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

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

  const total = useMemo(() => items.length, [items]);

  const handleLogout = async () => {
    await signOut(auth);
    router.replace("/admin/login");
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
            <p className="text-sm text-muted mt-1">Total entries: {total}</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark transition"
          >
            Logout
          </button>
        </div>

        {error && <p className="mb-4 text-red-600 text-sm">{error}</p>}

        <div className="overflow-x-auto bg-white border border-gray-100 rounded-2xl shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-primary/5 text-primary-dark">
              <tr>
                <th className="text-left px-4 py-3 font-semibold">Name</th>
                <th className="text-left px-4 py-3 font-semibold">Phone</th>
                <th className="text-left px-4 py-3 font-semibold">Email</th>
                <th className="text-left px-4 py-3 font-semibold">Course</th>
                <th className="text-left px-4 py-3 font-semibold">Message</th>
                <th className="text-left px-4 py-3 font-semibold">Created</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-muted">
                    No submissions yet.
                  </td>
                </tr>
              ) : (
                items.map((item) => (
                  <tr key={item.id} className="border-t border-gray-100 align-top">
                    <td className="px-4 py-3">{item.name || "-"}</td>
                    <td className="px-4 py-3">{item.phone || "-"}</td>
                    <td className="px-4 py-3">{item.email || "-"}</td>
                    <td className="px-4 py-3">{item.course || "-"}</td>
                    <td className="px-4 py-3 max-w-[320px] whitespace-pre-wrap break-words">
                      {item.message || "-"}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">{formatDate(item.createdAt)}</td>
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
