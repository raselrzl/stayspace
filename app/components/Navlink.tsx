"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Facebook, Linkedin, Mail, SquareMenu, X } from "lucide-react";
import { useState } from "react"; // Import useState hook
import Link from "next/link"; // Import Link for navigation
import { usePathname } from "next/navigation"; // To get the current route

export function Navlink() {
  const [isPopoverVisible, setPopoverVisible] = useState(false); // Initially, the popover is hidden
  const pathname = usePathname(); // Get the current path to highlight the active link

  const handleClose = () => {
    setPopoverVisible(false); // Close the popover when the cross button is clicked
  };

  // Function to check if the link is active
  const isActiveLink = (href: string) => {
    // For the homepage link, check for both "/" and "/home"
    if (href === "/" && (pathname === "/" || pathname === "/home")) {
      return "bg-[#7B5B4C] text-white rounded-[20px]"; // Active state for home
    }
    return pathname === href
      ? "bg-[#7B5B4C] text-white rounded-[20px]"
      : "text-[#7B5B4C] hover:text-[#7B5B4C]"; // Active state for other links
  };

  return (
    <div className="">
      {/* Trigger */}
      <Popover open={isPopoverVisible} onOpenChange={setPopoverVisible}>
        <PopoverTrigger asChild>
          <button
            onClick={() => setPopoverVisible(true)}
            className="text-[#7B5B4C]"
          >
            <SquareMenu className="text-2xl" />
          </button>
        </PopoverTrigger>

        {/* Popover content */}
        <PopoverContent className="w-[200px] h-auto bg-gray-100 text-[#7B5B4C] text-justify p-4 relative rounded-lg">
          {/* Close Button */}
          <div className="absolute top-2 right-2">
            <button onClick={handleClose}>
              <X className="text-2xl" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col justify-center items-center space-y-6 uppercase font-bold">
            <Link href="/" className={`px-4 py-1 text-xs ${isActiveLink("/")}`}>
              Home
            </Link>
            <Link
              href="/services"
              className={`px-4 py-1 text-xs ${isActiveLink("/services")}`}
            >
              Our Services
            </Link>
            <Link
              href="/contactus"
              className={`px-4 py-1 text-xs ${isActiveLink("/contactus")}`}
            >
              Contact Us
            </Link>
            <Link
              href="/partner"
              className={`px-4 py-1 text-xs ${isActiveLink("/partner")}`}
            >
              Become a Partner
            </Link>

            <div className="flex text-center flex-row mt-8">
              <div className="flex justify-center space-x-4 items-center">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-6 h-6 cursor-pointer text-[#7B5B4C] hover:text-[#7B5B4C]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/stay-space-034978358/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6 cursor-pointer text-[#7B5B4C] hover:text-[#7B5B4C]" />
                </a>
                <a href="mailto:kontakt@stayspace.se">
                  <Mail className="w-6 h-6 cursor-pointer text-[#7B5B4C] hover:text-[#7B5B4C]" />
                </a>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
