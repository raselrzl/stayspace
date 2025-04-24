"use client";

import { Phone, Mail, MapPin, Headphones } from "lucide-react"; // Import icons from lucide-react
import ContactForm from "../components/Form"; // Assuming you have your ContactForm component in this path
import EmbeddedMap from "../components/EmbeddedMap"; // Assuming you have your map component in this path
import { useState } from "react";
import { useTranslations } from "next-intl";

const contact = () => {
const t = useTranslations(); // Access translations

  return (
    <div className="text-[#7B5B4C]">
      {/* Background Section */}
      <section
        className="relative bg-cover bg-center h-[85vh] sm:h-[70vh] flex items-center justify-center text-[#7B5B4C] overflow-hidden"
        style={{ backgroundImage: "url('/ser1.jpg')" }}
      >
        <div className="rounded-lg lg:mr-[400px] md:mr-[300px] w-[322px] sm:w-[400px] mx-auto opacity-72 p-8 text-white h-[450px] sm:h-[484px]">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-6 text-left">
            {t("contact.hero.title")}
          </h1>
          <p className="text-lg"> {t("contact.hero.subtitle")}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100" id="contactus">
        <div className="container mx-auto px-6 sm:px-12 lg:px-32">
          <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
            {/* Left Side: Contact Form */}
            <div className="lg:w-1/2 w-full mb-8 lg:mb-0 shadow-2xl">
              <ContactForm />
            </div>

            {/* Right Side: Contact Information */}
            <div className="lg:w-1/2 w-full p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#7B5B4C] mb-4">
              {t("contact.directContact.title")}
              </h2>

              {/* Contact Information */}
              <div className="flex items-center mb-4">
                <Phone className="text-[#7B5B4C] mr-2" />
                <p className="text-[#7B5B4C]">
                {t("contact.directContact.phoneText")}{" "}
                  <a href={`tel:${t("contact.directContact.phone")}`} className="underline">
                  {t("contact.directContact.phone")}
                  </a>
                </p>
              </div>
              <div className="flex items-center mb-4">
                <Mail className="text-[#7B5B4C] mr-2" />
                <p className="text-[#7B5B4C]">
                {t("contact.directContact.emailText")}{" "}
                  <a href={`mailto:${t("contact.directContact.email")}`} className="underline">
                  {t("contact.directContact.email")}
                  </a>
                </p>
              </div>
              <div className="flex items-center mb-4">
                <MapPin className="text-[#7B5B4C] mr-2" />
                <p className="text-[#7B5B4C]">
                {t("contact.directContact.address")}
                </p>
              </div>
              <div className="flex items-center mb-4">
                <Headphones className="text-[#7B5B4C] mr-2" />
                <p className="text-[#7B5B4C]">
                {t("contact.directContact.supportText")}
                </p>
              </div>

              {/* Map Section */}
              <div className="mt-8">
                <div className="relative w-full h-64 overflow-hidden">
                <EmbeddedMap /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default contact;
