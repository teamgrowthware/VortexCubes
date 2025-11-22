import React, { useState } from "react";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50 
        bg-black/40 backdrop-blur-lg 
        h-16 px-4 
        flex items-center justify-between
        border-b border-white/10
      "
    >
      {/* Logo */}
      <div className="h-full flex items-center">
        <img
          src={logo}
          alt="Brand Logo"
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 pr-6">
        <a href="#" className="text-gray-300 hover:text-white text-base">Home</a>
        <a href="#" className="text-gray-300 hover:text-white text-base">About Us</a>
        <a href="#" className="text-gray-300 hover:text-white text-base">Portfolio</a>
        <a href="#" className="text-gray-300 hover:text-white text-base">Services</a>
        <a href="#" className="text-gray-300 hover:text-white text-base">Institute</a>
        <a href="#" className="text-gray-300 hover:text-white text-base">Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden absolute top-16 left-0 w-full 
          bg-black/90 backdrop-blur-lg border-b border-white/10
          flex flex-col items-start px-6 py-4 gap-4
          transition-all duration-300 
          ${open ? "opacity-100 visible" : "opacity-0 invisible -translate-y-5"}
        `}
      >
        <a href="#" className="text-gray-300 hover:text-white text-lg">Home</a>
        <a href="#" className="text-gray-300 hover:text-white text-lg">About Us</a>
        <a href="#" className="text-gray-300 hover:text-white text-lg">Portfolio</a>
        <a href="#" className="text-gray-300 hover:text-white text-lg">Services</a>
        <a href="#" className="text-gray-300 hover:text-white text-lg">Institute</a>
        <a href="#" className="text-gray-300 hover:text-white text-lg">Contact</a>
      </div>
    </nav>
  );
}
