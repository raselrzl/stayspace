"use client";

import { useTranslations } from "next-intl";
import ContactForm from "../components/Form";
import PartnerContactForm from "../components/PartnerContactForm";
import {
  CheckCircle,
  Users,
  Handshake,
  PhoneCall,
  FileText,
  Image,
  MessageCircle,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

const BecomePartner = () => {
  const t = useTranslations();

  const collaborationPoints = [
    {
      icon: <Handshake className="w-5 h-5 mt-1 mr-2 text-[#7B5B4C]" />,
      text: t("partnerPage.collaborationText"),
      id: "collab",
    },
    {
      icon: <CheckCircle className="w-5 h-5 mt-1 mr-2 text-[#7B5B4C]" />,
      text: t("partnerPage.openToPartnerships"),
      id: "partnerships",
    },
    {
      icon: <Users className="w-5 h-5 mt-1 mr-2 text-[#7B5B4C]" />,
      text: t("partnerPage.homesForProfessionals"),
      id: "professionals",
    },
    {
      icon: <CheckCircle className="w-5 h-5 mt-1 mr-2 text-[#7B5B4C]" />,
      text: t("partnerPage.rentingIsEasy"),
      id: "easyRenting",
    },
    {
      icon: <PhoneCall className="w-5 h-5 mt-1 mr-2 text-[#7B5B4C]" />,
      text: t("partnerPage.contactUsToStart"),
      id: "contactToStart",
    },
  ];

  const rentalSteps = [
    {
      icon: <FileText className="w-5 h-5 mt-1 mr-2 text-[#7B5B4C]" />,
      text: t("partnerPage.formDescription"),
      id: "formDesc",
    },
    {
      icon: <Image className="w-5 h-5 mt-1 mr-2 text-[#7B5B4C]" />,
      text: t("partnerPage.publishListing"),
      id: "listing",
    },
    {
      icon: <MessageCircle className="w-5 h-5 mt-1 mr-2 text-[#7B5B4C]" />,
      text: t("partnerPage.contactToDiscuss"),
      id: "discuss",
    },
    {
      icon: <Check className="w-5 h-5 mt-1 mr-2 text-[#7B5B4C]" />,
      text: t("partnerPage.finalDecision"),
      id: "final",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="relative bg-cover bg-center h-[85vh] sm:h-[70vh] flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: "url('/pa1.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Main Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-32 space-y-12">
          {/* First Row */}
          <motion.div
            className="flex flex-col-reverse md:flex-row space-y-8 lg:space-y-0 lg:space-x-8 p-4 rounded-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex-1 p-6 shadow-md">
              <h2 className="text-2xl font-bold text-[#7B5B4C] mb-4">
                {t("partnerPage.propertyTitle")}
              </h2>

              <ul className="space-y-3 text-[#7B5B4C]">
                {collaborationPoints.map((item) => (
                  <motion.li
                    key={item.id}
                    className="flex items-start"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <img
                src="/her3.jpg"
                alt="StaySpace"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Second Row */}
          <motion.div
            className="flex flex-col md:flex-row space-y-8 lg:space-y-0 lg:space-x-8 p-4 rounded-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <img
                src="/contact2.jpg"
                alt="Rental Process"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </motion.div>

            <div className="flex-1 p-6 shadow-md">
              <h2 className="text-2xl font-bold text-[#7B5B4C] mb-4">
                {t("partnerPage.rentalProcessTitle")}
              </h2>

              <ul className="space-y-3 text-[#7B5B4C]">
                {rentalSteps.map((item) => (
                  <motion.li
                    key={item.id}
                    className="flex items-start"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="flex-1 mt-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <PartnerContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BecomePartner;
