"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 shadow ${
        scrolled ? "bg-white/60 backdrop-blur-md shadow-sm" : "bg-white"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="h-16 flex items-center justify-between">
          {/* Left: Logo + Brand */}
          <Link href="/" className="flex items-center gap-3">
            {/* Replace /logo.png with your uploaded logo file in /public */}
            <div className="w-32 h-32 relative">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* <span className="text-lg sm:text-xl font-extrabold text-gray-900">
              Less Annoying CRM
            </span> */}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-600 hover:text-orange-600 transition">
              Contact us
            </Link>

            <Link
              href="/login"
              className="text-sm font-medium px-4 py-2 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-50 transition">
              Log in
            </Link>

            <Link
              href="/signup"
              className="text-sm font-semibold px-4 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-shadow shadow-sm">
              Sign up
            </Link>
          </nav>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((s) => !s)}
              className="p-2 rounded-md text-orange-600 hover:bg-orange-50 transition">
              {open ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 shadow-sm transition-max-height duration-300 overflow-hidden ${
          open ? "max-h-60" : "max-h-0"
        }`}>
        <div className="px-4 py-4 flex flex-col gap-3">
          <Link
            href="/contact"
            className="text-base font-medium text-orange-500 py-2"
            onClick={() => setOpen(false)}>
            Contact us
          </Link>

          <Link
            href="/login"
            className="text-base font-medium py-2 border border-orange-500 rounded-full text-center text-orange-500"
            onClick={() => setOpen(false)}>
            Log in
          </Link>

          <Link
            href="/signup"
            className="text-base font-semibold py-2 rounded-full bg-orange-500 text-white text-center"
            onClick={() => setOpen(false)}>
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
