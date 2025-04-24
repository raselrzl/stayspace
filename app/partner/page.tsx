"use client";

import { useTranslations } from "next-intl"; // Import useTranslations for translations
import ContactForm from "../components/Form";
import PartnerContactForm from "../components/PartnerContactForm";
import { CheckCircle, Users, Handshake, PhoneCall } from "lucide-react";
import { FileText, Image, MessageCircle, Check } from "lucide-react";

const BecomePartner = () => {
  const t = useTranslations(); // Access translations

  return (
    <>
      <section
        className="relative bg-cover bg-center h-[85vh] sm:h-[70vh] flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: "url('/pa1.jpg')" }}
      >
        {/* Add any additional content or overlay for this section if needed */}
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-32">
          <div className="flex flex-col-reverse md:flex-row space-y-8 lg:space-y-0 lg:space-x-8 p-4 rounded-2xl">
            <div className="flex-1 p-6 shadow-md">
              <h2 className="text-2xl font-bold text-[#7B5B4C] mb-4">
                {t("partnerPage.propertyTitle")}
              </h2>

              <ul className="space-y-3 text-[#7B5B4C]">
                <li className="flex items-start">
                  <Handshake className="w-5 h-5 mt-1 mr-2 text-[#7B5B4C]" />
                  <span>{t("partnerPage.collaborationText")}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mt-1 mr-2 text-[#7B5B4C]" />
                  <span>{t("partnerPage.openToPartnerships")}</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-5 h-5 mt-1 mr-2 text-[#7B5B4C]" />
                  <span>{t("partnerPage.homesForProfessionals")}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mt-1 mr-2 text-[#7B5B4C]" />
                  <span>{t("partnerPage.rentingIsEasy")}</span>
                </li>
                <li className="flex items-start mt-4">
                  <PhoneCall className="w-5 h-5 mt-1 mr-2 text-[#7B5B4C]" />
                  <span>{t("partnerPage.contactUsToStart")}</span>
                </li>
              </ul>
            </div>

            <div className="flex-1">
              <img
                src="/her3.jpg"
                alt="StaySpace Logo"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-8 lg:space-y-0 lg:space-x-8 p-4 rounded-2xl">
            <div className="flex-1">
              <img
                src="/contact2.jpg"
                alt="Property Rental"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
            <div className="flex-1 p-6 shadow-md">
              <h2 className="text-2xl font-bold text-[#7B5B4C] mb-4">
                {t("partnerPage.rentalProcessTitle")}
              </h2>

              <ul className="space-y-3 text-[#7B5B4C]">
                <li className="flex items-start">
                  <FileText className="w-5 h-5 mt-1 mr-2 text-[#7B5B4C]" />
                  <span>{t("partnerPage.formDescription")}</span>
                </li>
                <li className="flex items-start">
                  <Image className="w-5 h-5 mt-1 mr-2 text-[#7B5B4C]" />
                  <span>{t("partnerPage.publishListing")}</span>
                </li>
                <li className="flex items-start">
                  <MessageCircle className="w-5 h-5 mt-1 mr-2 text-[#7B5B4C]" />
                  <span>{t("partnerPage.contactToDiscuss")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mt-1 mr-2 text-[#7B5B4C]" />
                  <span>{t("partnerPage.finalDecision")}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Partner Contact Form */}
          <div className="flex-1 mt-8">
            <PartnerContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default BecomePartner;
