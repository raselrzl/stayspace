"use client";

import { useTranslations } from "next-intl"; // Import useTranslations for translations
import Link from "next/link";
import TenantForm from "../components/TenantForm";

const Tenant = () => {
  const t = useTranslations(); // Access translations

  return (
    <>
      <section
        className="relative bg-cover bg-center h-[85vh] sm:h-[70vh] flex items-center justify-center text-[#7B5B4C] overflow-hidden"
        style={{ backgroundImage: "url('/ser.jpg')" }}
      >
        {/* Background Section (optional content like the previous one can be added) */}
      </section>
      
      <section className="py-20 px-8 sm:px-12">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-xl font-bold text-[#7B5B4C] mb-8 border-b-2 pb-2 border-gray-100">
            {t("tenantPage.alwaysIncluded")}
          </h2>
          <p className="text-md text-[#7B5B4C] mb-8">
            {t("tenantPage.fullAmenities")}
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
            {/* Fully Furnished */}
            <div className="text-center">
              <img
                src="/furnished.png"
                alt="Fully Furnished"
                className="w-10 h-10 mx-auto mb-4"
              />
              <p className="text-[#7B5B4C] font-semibold">{t("tenantPage.fullyFurnished")}</p>
            </div>

            {/* Fully Equipped Kitchen */}
            <div className="text-center">
              <img
                src="/equip.png"
                alt="Fully Equipped Kitchen"
                className="w-10 h-10 mx-auto mb-4"
              />
              <p className="text-[#7B5B4C] font-semibold">{t("tenantPage.fullyEquippedKitchen")}</p>
            </div>

            {/* WiFi */}
            <div className="text-center">
              <img
                src="/wifi.png"
                alt="WiFi"
                className="w-10 h-10 mx-auto mb-4"
              />
              <p className="text-[#7B5B4C] font-semibold">{t("tenantPage.wifi")}</p>
            </div>

            {/* 24/7 Service */}
            <div className="text-center">
              <img
                src="/service.png"
                alt="24/7 Service"
                className="w-10 h-10 mx-auto mb-4"
              />
              <p className="text-[#7B5B4C] font-semibold">{t("tenantPage.twentyFourSevenService")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tenant Contact Form */}
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 p-4 bg-gray-100">
        <div className="flex-1">
          <TenantForm />
        </div>
      </div>

      <section className="py-16 px-4 sm:px-12 text-xs md:text-sm">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-xl font-bold text-[#7B5B4C] mb-8 border-b-2 pb-2 border-gray-100">
            {t("tenantPage.extraServices")}
          </h2>
          <p className="text-md text-[#7B5B4C] mb-8">
            {t("tenantPage.extraServicesDescription")}
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
            {/* Cleaning */}
            <div className="">
              <img
                src="/cleaning.png"
                alt="Cleaning"
                className="w-10 h-10 mx-auto mb-4"
              />
              <p className="text-[#7B5B4C] font-semibold">{t("tenantPage.cleaning")}</p>
            </div>

            {/* Flexible Cancellation */}
            <div className="">
              <img
                src="/cancelletion.png"
                alt="Flexible Cancellation"
                className="w-10 h-10 mx-auto mb-4"
              />
              <p className="text-[#7B5B4C] font-semibold">{t("tenantPage.flexibleCancellation")}</p>
            </div>

            {/* Damage Protection */}
            <div className="">
              <img
                src="/insurance.png"
                alt="Damage Protection"
                className="w-10 h-10 mx-auto mb-4"
              />
              <p className="text-[#7B5B4C] font-semibold">{t("tenantPage.damageProtection")}</p>
            </div>

            {/* Early Check-in */}
            <div className="">
              <img
                src="/checkin.png"
                alt="Early Check-in"
                className="w-10 h-10 mx-auto mb-4"
              />
              <p className="text-[#7B5B4C] font-semibold">{t("tenantPage.earlyCheckin")}</p>
            </div>

            {/* Late Checkout */}
            <div className="">
              <img
                src="/out.png"
                alt="Late Checkout"
                className="w-10 h-10 mx-auto mb-4"
              />
              <p className="text-[#7B5B4C] font-semibold">{t("tenantPage.lateCheckout")}</p>
            </div>

            {/* Extra Linen & Towels */}
            <div className="">
              <img
                src="/towels.png"
                alt="Extra Linen & Towels"
                className="w-10 h-10 mx-auto mb-4"
              />
              <p className="text-[#7B5B4C] font-semibold">{t("tenantPage.extraLinenTowels")}</p>
            </div>

            {/* Extra Bed */}
            <div className="">
              <img
                src="/bed.png"
                alt="Extra Bed"
                className="w-10 h-10 mx-auto mb-4"
              />
              <p className="text-[#7B5B4C] font-semibold">{t("tenantPage.extraBed")}</p>
            </div>

            {/* Baby Crib */}
            <div className="">
              <img
                src="/kidsbed.png"
                alt="Baby Crib"
                className="w-10 h-10 mx-auto mb-4"
              />
              <p className="text-[#7B5B4C] font-semibold">{t("tenantPage.babyCrib")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tenant;
