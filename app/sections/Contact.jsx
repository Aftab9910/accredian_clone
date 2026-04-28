"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/lead", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Submitted!");
  };

  return (
    <section className="py-16 bg-gray-100 text-center text-black">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

      <form
        className="flex flex-col gap-4 max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Name"
          className="p-2 border text-black"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          className="p-2 border text-black"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <button className="bg-blue-600 text-white p-2 rounded">Submit</button>
      </form>
    </section>
  );
}
