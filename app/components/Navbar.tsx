"use client";
import { SquareMenu, X } from "lucide-react"; // Import the cross icon
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"; // To get the current route

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path to highlight the active link

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to check if the link is active
  const isActiveLink = (href: string) => {
    // For the homepage link, check for both "/" and "/home"
    if (href === "/" && (pathname === "/" || pathname === "/home")) {
      return "bg-[#fd6d15] text-white"; // Active state for home
    }
    return pathname === href ? "bg-[#fd6d15] text-white" : "text-[#fd6d15] hover:text-white"; // Active state for other links
  };

  return (
    <nav className="bg-gray-100 p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <div className="flex items-center">
          <Link href="/">
            <h1 className="font-medium text-[#7B5B4C] text-3xl py-2 lg:text-5xl tracking-wider">
              stayspace
            </h1>
          </Link>
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className={`px-4 py-2 rounded-lg ${isActiveLink("/")}`}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`px-4 py-2 rounded-lg ${isActiveLink("/services")}`}
          >
            Our Services
          </Link>
          <Link
            href="/contactus"
            className={`px-4 py-2 rounded-lg ${isActiveLink("/contactus")}`}
          >
            Contact Us
          </Link>
          <Link
            href="/partner"
            className={`px-4 py-2 rounded-lg ${isActiveLink("/partner")}`}
          >
            Become a Partner
          </Link>
        </div>

        {/* Hamburger Menu for mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-amber-800 focus:outline-none text-3xl"
        >
          <SquareMenu className="text-2xl" />
        </button>
      </div>

      {/* Mobile Drawer Menu (Slide from top to bottom with animation) */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } fixed top-0 left-0 right-0 bg-[#C5B0A1] py-4 flex flex-col h-[50vh] overflow-auto transition-transform duration-500 ease-in-out z-50 transform ${
          isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-[-100%] opacity-0"
        }`}
      >
        {/* Close Drawer Button */}
        <button
          onClick={toggleMenu}
          className="text-[#7B5B4C] absolute top-4 right-4 text-3xl"
        >
          <X />
        </button>

        {/* Center the Links */}
        <div className="flex flex-col justify-center items-center space-y-6">
          <Link
            href="/"
            className={`px-4 py-2 rounded-lg ${isActiveLink("/")}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`px-4 py-2 rounded-lg ${isActiveLink("/services")}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Our Services
          </Link>
          <Link
            href="/contactus"
            className={`px-4 py-2 rounded-lg ${isActiveLink("/contactus")}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
          <Link
            href="/partner"
            className={`px-4 py-2 rounded-lg ${isActiveLink("/partner")}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Become a Partner
          </Link>
          <div className="flex text-center mt-20">
            <h1 className="font-medium text-[#7B5B4C] text-3xl py-2 lg:text-5xl tracking-wider">
              stayspace
            </h1>
          </div>
        </div>
      </div>
    </nav>
  );
}
