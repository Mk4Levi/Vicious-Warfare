"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="font-bold text-xl">
            Logo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`${isActive("/") ? "text-blue-600" : "text-gray-600"} hover:text-blue-500`}
            >
              Home
            </Link>
            <Link
              href="/events"
              className={`${
                isActive("/events") ? "text-blue-600" : "text-gray-600"
              } hover:text-blue-500`}
            >
              Events
            </Link>
            <Link
              href="/contact"
              className={`${
                isActive("/contact") ? "text-blue-600" : "text-gray-600"
              } hover:text-blue-500`}
            >
              Contact
            </Link>
            <Link
              href="/gallery"
              className={`${
                isActive("/gallery") ? "text-blue-600" : "text-gray-600"
              } hover:text-blue-500`}
            >
              Gallery
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <Link
              href="/"
              className={`block py-2 ${isActive("/") ? "text-blue-600" : "text-gray-600"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/events"
              className={`block py-2 ${isActive("/events") ? "text-blue-600" : "text-gray-600"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/contact"
              className={`block py-2 ${isActive("/contact") ? "text-blue-600" : "text-gray-600"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/gallery"
              className={`block py-2 ${isActive("/gallery") ? "text-blue-600" : "text-gray-600"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
