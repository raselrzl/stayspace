"use client";

import * as React from "react";
import { SquareMenu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link"; // Assuming you're using Next.js

export function DrawerNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>

      <DrawerContent className="fixed top-0 left-0 right-0 bg-[#C5B0A1] h-screen overflow-auto transform transition-all duration-300 ease-in-out">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="flex justify-between items-center p-4">
            <div className="flex items-center">
              <h1 className="font-medium text-[#7B5B4C] text-3xl py-2 lg:text-5xl tracking-wider">
                stayspace
              </h1>
            </div>

            {/* Hamburger Menu for mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-amber-800 focus:outline-none text-3xl"
            >
              <SquareMenu className="text-2xl" />
            </button>
          </DrawerHeader>

          {/* Navbar Links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:hidden bg-[#C5B0A1] space-y-4 text-center py-4 flex flex-col`}
          >
            <Link
              href="#"
              className="text-white hover:text-gray-300 bg-[#7B5B4C] px-4 py-2 rounded-lg"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-white hover:text-gray-300 bg-[#7B5B4C] px-4 py-2 rounded-lg"
            >
              Our Services
            </Link>
            <Link
              href="#"
              className="text-white hover:text-gray-300 bg-[#7B5B4C] px-4 py-2 rounded-lg"
            >
              Contact Us
            </Link>
            <Link
              href="#"
              className="text-white hover:text-gray-300 bg-[#7B5B4C] px-4 py-2 rounded-lg"
            >
              Become a Partner
            </Link>
          </div>

          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
