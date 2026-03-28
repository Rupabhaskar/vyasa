"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/components/lib/firebase";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) router.replace("/admin/contacts");
    });
    return () => unsub();
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      router.replace("/admin/contacts");
    } catch (err) {
      setError("Invalid login credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-[100svh] bg-background flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md bg-white border border-gray-100 rounded-3xl shadow-xl p-8">
        <h1 className="text-2xl font-bold text-primary-dark mb-2">Admin Login</h1>
        <p className="text-sm text-muted mb-6">Sign in to view contact form submissions.</p>

        {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl py-3 font-semibold bg-primary text-white hover:bg-primary-dark transition disabled:opacity-70"
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        <Link href="/" className="block text-center text-sm text-primary mt-5 hover:underline">
          Back to home
        </Link>
      </div>
    </section>
  );
}
