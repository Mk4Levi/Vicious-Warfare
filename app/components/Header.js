"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import appLogo from "./logo.jpg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
    { href: "/gallery", label: "Gallery" },
  ];

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-2xl">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo with Next.js Image component */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src={appLogo}
              alt="Vicious Warfare Logo"
              width={50}
              height={50}
              className="rounded-full border-2 border-red-700"
            />
            <span className="font-bold text-xl tracking-wider uppercase hidden sm:block">
              Vicious Warfare
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  uppercase tracking-wider text-sm
                  transition-all duration-300 ease-in-out
                  hover:text-red-600
                  ${isActive(link.href) ? "text-red-600 font-bold" : "text-gray-300"}
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-800 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6 text-white"
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
          <div className="md:hidden bg-black shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  block px-4 py-3 
                  border-b border-gray-800 
                  uppercase tracking-wider
                  transition-colors duration-300
                  ${
                    isActive(link.href)
                      ? "text-red-600 bg-gray-900"
                      : "text-gray-300 hover:bg-gray-900"
                  }
                `}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
