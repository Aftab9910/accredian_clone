"use client";
import { useState } from "react";
import Button from "./Button";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // ✅ important fix
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      const data = await res.json();

      alert("Form Submitted!");
      setForm({ name: "", email: "" });
    } catch (err) {
      alert("Error submitting form");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      suppressHydrationWarning // ✅ hydration fix (optional but safe)
      className="flex flex-col gap-4 max-w-md mx-auto"
    >
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        className="border p-2 rounded text-black"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        autoComplete="off" // ✅ extension issue reduce
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        className="border p-2 rounded text-black"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        autoComplete="off" // ✅ important
        required
      />

      <Button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
