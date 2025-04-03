"use client";
import { SquareMenu } from "lucide-react"; // Import the cross icon
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"; // To get the current route
import { Navlink } from "./Navlink"; // Import the Navlink component for popover

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path to highlight the active link

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  // Function to check if the link is active
  const isActiveLink = (href: string) => {
    if (href === "/" && (pathname === "/" || pathname === "/home")) {
      return "bg-[#fd6d15] text-[#7B5B4C]"; // Active state for home
    }
    return pathname === href
      ? "bg-[#fd6d15] text-[#7B5B4C]"
      : "text-[#7B5B4C] hover:text-[#7B5B4C]"; // Active state for other links
  };

  return (
    <nav className="bg-gray-100 p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <div className="flex items-center py-1">
          <Link href="/">
            <img
              src="/stayspace.png"
              alt="Support Logo"
              className="w-[150px] h-auto md:w-full md:h-15" // Adjust the size as needed
            />
          </Link>
        </div>

        {/* Navbar Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className={`px-4 py-2 ${isActiveLink("/")}`}>
            Home
          </Link>
          <Link
            href="/services"
            className={`px-4 py-2 ${isActiveLink("/services")}`}
          >
            Our Services
          </Link>
          <Link
            href="/contactus"
            className={`px-4 py-2 ${isActiveLink("/contactus")}`}
          >
            Contact Us
          </Link>
          <Link
            href="/partner"
            className={`px-4 py-2 ${isActiveLink("/partner")}`}
          >
            Become a Partner
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          onClick={toggleMenu}
          className="sm:hidden bg-gray-100 focus:outline-none text-3xl"
        >
              <Navlink />
  
        </div>
      </div>
    </nav>
  );
}
