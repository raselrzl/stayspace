"use client"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react"; // Import useState hook

export function PopLegalInfo() {
  const [isPopoverVisible, setPopoverVisible] = useState(true); // State to control visibility

  const handleClose = () => {
    setPopoverVisible(false); // Close the popover when the cross button is clicked
  };

  return (
    <div>
      {/* Trigger */}
      <Popover open={isPopoverVisible} onOpenChange={setPopoverVisible}>
        <PopoverTrigger asChild>
          <p className="underline cursor-pointer">Legal Information</p>
        </PopoverTrigger>

        {/* Popover content */}
        <PopoverContent className="w-[300px] h-[400px] bg-[#f8f3f2] text-[#7B5B4C] text-justify p-4 relative">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-[#7B5B4C]  text-xl"
          >
            X
          </button>

          <div className="w-full text-xs">
            <h2 className="text-xl font-bold mb-4 text-center">Legal Information</h2>

            {/* Company Name */}
            <div className="mb-4">
              <h3 className="font-semibold">Company Name</h3>
              <p>Centralis Group Invest AB</p>
            </div>

            {/* Registered Office */}
            <div className="mb-4">
              <h3 className="font-semibold">Registered Office</h3>
              <p>NORRKÖPING</p>
            </div>

            {/* Contact Details */}
            <div className="mb-4">
              <h3 className="font-semibold">Contact Details</h3>
              <p>
                Email:{" "}
                <a
                  href="mailto:contact@staysafe.se"
                  className="text-gray-600 underline"
                >
                  contact@staysafe.se
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+46103333536" className="text-gray-600 underline">
                  +46 10 333 3536
                </a>
              </p>
            </div>

            {/* Organization Number */}
            <div className="mb-4">
              <h3 className="font-semibold">Organization Number</h3>
              <p>559138-9597</p>
            </div>

            {/* VAT Registration Number */}
            <div className="mb-4">
              <h3 className="font-semibold">VAT Registration Number</h3>
              <p>SE559138959701</p>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
