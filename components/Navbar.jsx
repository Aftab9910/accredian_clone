"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-600">Accredian</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 font-medium text-black">
        <li className="cursor-pointer hover:text-blue-600">Home</li>
        <li className="cursor-pointer hover:text-blue-600">Programs</li>
        <li className="cursor-pointer hover:text-blue-600">About</li>
        <li className="cursor-pointer hover:text-blue-600">Contact</li>
      </ul>

      {/* Mobile Menu Button (3 lines) */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)} className="text-black text-3xl">
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden text-black">
          <li className="cursor-pointer hover:text-blue-600">Home</li>
          <li className="cursor-pointer hover:text-blue-600">Programs</li>
          <li className="cursor-pointer hover:text-blue-600">About</li>
          <li className="cursor-pointer hover:text-blue-600">Contact</li>

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
