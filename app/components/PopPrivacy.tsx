"use client"
import { useState } from "react"; // Import useState hook
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function PopPrivacyPolicy() {
  const [isPopoverVisible, setPopoverVisible] = useState(true); // State to control visibility

  const handleClose = () => {
    setPopoverVisible(false); // Close the popover when the cross button is clicked
  };

  return (
    <div>
      <Popover open={isPopoverVisible} onOpenChange={setPopoverVisible}>
        <PopoverTrigger asChild>
          <p className="underline cursor-pointer">Privacy Policy</p>
        </PopoverTrigger>

        <PopoverContent className="w-[300px] h-[500px] bg-black overflow-scroll text-justify relative">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-white text-xl"
          >
            X
          </button>

          <div className="w-full text-xs">
            <h2 className="text-xl font-bold mb-4 text-center">Privacy Policy</h2>
            <p className="mb-4">
              We value your privacy and strive to protect your personal information. This page explains how we collect, use and protect your information when you visit our website.
            </p>

            <h3 className="font-semibold mt-6">1. What information do we collect?</h3>
            <p className="mb-4">
              We collect personal information that you voluntarily provide to us, for example when you fill out contact forms, register for our services or communicate with us. This may include name, email address, phone number and company information.
            </p>

            <h3 className="font-semibold">2. How do we use your information?</h3>
            <ul className="list-inside list-disc mb-4">
              <li>Provide and improve our services</li>
              <li>Communicate with you and respond to your inquiries</li>
              <li>Send relevant information, such as offers and updates (you can always opt out of marketing messages)</li>
              <li>Ensure a smooth user experience on our website</li>
            </ul>

            <h3 className="font-semibold">3. Sharing of data</h3>
            <p className="mb-4">
              We do not share your personal data with third parties, except if necessary to complete our services (eg payment providers or technical services) or if required by law.
            </p>

            <h3 className="font-semibold">4. Cookies and Tracking Technologies</h3>
            <p className="mb-4">
              We use cookies and similar technologies to improve the user experience on our website. These help us collect information about how you navigate our site and customize content based on your preferences. You can choose to disable cookies in your browser, but some features of the website may be affected.
            </p>

            <h3 className="font-semibold">5. Security</h3>
            <p className="mb-4">
              We take appropriate technical and organizational measures to protect your personal data against unauthorized access, loss or misuse.
            </p>

            <h3 className="font-semibold">6. Your rights</h3>
            <p className="mb-4">
              You have the right to request information about what personal data we have about you, as well as the right to correct, erase or request that we restrict the processing of your data. If you wish to exercise these rights or have any questions about our handling of your personal data, please contact us.
            </p>

            <h3 className="font-semibold">7. Changes to the Privacy Policy</h3>
            <p className="mb-4">
              We may update this Privacy Policy. In the event of major changes, we will inform you by publishing an updated version on our website.
            </p>

            <h3 className="font-semibold">Contact</h3>
            <p>
              If you have any questions about our privacy policy or how we handle your personal data, please contact us at{" "}
              <a href="mailto:kontakt@stayspace.se" className="text-amber-500 underline">
                kontakt@stayspace.se
              </a>.
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
