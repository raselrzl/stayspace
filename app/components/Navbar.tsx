"use client";
import { SquareMenu } from "lucide-react"; // Import the cross icon
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // To get the current route
import { Navlink } from "./Navlink"; // Import the Navlink component for popover
import TranslateWidget from "./TranslateWidget";
import { useTranslations } from "next-intl"; // Import useTranslations for multi-language support

export default function Navbar() {
  const t = useTranslations(); // Access translations
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State to track if scrolled
  const pathname = usePathname(); // Get the current path to highlight the active link

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  // Function to check if the link is active
  const isActiveLink = (href: string) => {
    // If the link is active, apply the bottom border color
    return pathname === href
      ? "text-[#7B5B4C] border-b-4 border-[#7B5B4C]" // Apply the border when active
      : "text-[#7B5B4C] hover:text-[#7B5B4C] hover:border-b-4 hover:border-[#7B5B4C]"; // Regular state for hover effect
  };

  // Listen for scroll events to toggle the navbar height
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true); // Set isScrolled to true when user scrolls down
      } else {
        setIsScrolled(false); // Set isScrolled to false when at the top
      }
    };

    window.addEventListener("scroll", handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener
    };
  }, []);

  return (
    <nav
      className={`bg-gray-100 p-4 transition-all duration-300 sticky top-0 z-50 uppercase ${isScrolled ? "py-1" : "py-4"}`}
      style={{
        boxShadow: "0 4px 4px rgb(123, 91, 76)", // Yellow shadow (rgba(253, 109, 21, 0.6))
        borderBottom: "4px solid transparent", // Invisible border to hold the shadow
      }}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <div className="flex items-center py-1">
          <Link href="/">
            <img
              src="/stayspace.png"
              alt={t("navbar.logoAltText")} // Fetch the alt text for the logo from the translations
              className="w-[150px] h-auto md:w-full md:h-15" // Adjust the size as needed
            />
          </Link>
        </div>

        {/* Navbar Links (Desktop) */}
        <div className="hidden md:flex space-x-6 font-bold">
          <Link href="/" className={`py-1 ${isActiveLink("/")}`}>
            {t("navbar.home")}
          </Link>
          <Link href="/services" className={`py-1 ${isActiveLink("/services")}`}>
            {t("navbar.ourServices")}
          </Link>
          <Link href="/contact" className={`py-1 ${isActiveLink("/contact")}`}>
            {t("navbar.contact")}
          </Link>
          <Link href="/partner" className={`py-1 ${isActiveLink("/partner")}`}>
            {t("navbar.partner")}
          </Link>
          <Link href="/tenant" className={`py-1 ${isActiveLink("/tenant")}`}>
            {t("navbar.tenant")}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div onClick={toggleMenu} className="sm:hidden bg-gray-100 focus:outline-none text-3xl">
          <Navlink />
        </div>
      </div>
    </nav>
  );
}
