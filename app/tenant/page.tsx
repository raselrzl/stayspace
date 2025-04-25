"use client";

import { useTranslations } from "next-intl";
import TenantForm from "../components/TenantForm";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Tenant = () => {
  const t = useTranslations();

  return (
    <>
      {/* Hero Banner */}
      <motion.section
        className="relative bg-cover bg-center h-[85vh] sm:h-[70vh] flex items-center justify-center text-[#7B5B4C] overflow-hidden"
        style={{ backgroundImage: "url('/ser.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Always Included Section */}
      <motion.section
        className="py-20 px-8 sm:px-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-xl font-bold text-[#7B5B4C] mb-8 border-b-2 pb-2 border-gray-100">
            {t("tenantPage.alwaysIncluded")}
          </h2>
          <p className="text-md text-[#7B5B4C] mb-8">
            {t("tenantPage.fullAmenities")}
          </p>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {[
              { icon: "/furnished.png", label: "fullyFurnished" },
              { icon: "/equip.png", label: "fullyEquippedKitchen" },
              { icon: "/wifi.png", label: "wifi" },
              { icon: "/service.png", label: "twentyFourSevenService" },
            ].map(({ icon, label }) => (
              <motion.div key={label} variants={fadeInUp} className="text-center">
                <img src={icon} alt={label} className="w-10 h-10 mx-auto mb-4" />
                <p className="text-[#7B5B4C] font-semibold">
                  {t(`tenantPage.${label}`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.div
        className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 p-4 bg-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <div className="flex-1">
          <TenantForm />
        </div>
      </motion.div>

      {/* Extra Services Section */}
      <motion.section
        className="py-16 px-4 sm:px-12 text-xs md:text-sm"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-xl font-bold text-[#7B5B4C] mb-8 border-b-2 pb-2 border-gray-100">
            {t("tenantPage.extraServices")}
          </h2>
          <p className="text-md text-[#7B5B4C] mb-8">
            {t("tenantPage.extraServicesDescription")}
          </p>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {[
              { icon: "/cleaning.png", label: "cleaning" },
              { icon: "/cancelletion.png", label: "flexibleCancellation" },
              { icon: "/insurance.png", label: "damageProtection" },
              { icon: "/checkin.png", label: "earlyCheckin" },
              { icon: "/out.png", label: "lateCheckout" },
              { icon: "/towels.png", label: "extraLinenTowels" },
              { icon: "/bed.png", label: "extraBed" },
              { icon: "/kidsbed.png", label: "babyCrib" },
            ].map(({ icon, label }) => (
              <motion.div key={label} variants={fadeInUp} className="text-center">
                <img src={icon} alt={label} className="w-10 h-10 mx-auto mb-4" />
                <p className="text-[#7B5B4C] font-semibold">
                  {t(`tenantPage.${label}`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Tenant;
