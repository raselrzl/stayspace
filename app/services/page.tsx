"use client";

import Link from "next/link";
import { Phone, Mail, Home, Package, Headphones } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const Services = () => {
  const t = useTranslations();

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[85vh] sm:h-[70vh] flex items-center justify-center text-white opacity-87 overflow-hidden"
        style={{ backgroundImage: "url('/contact2.jpg')" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mx-4 sm:mx-0 px-6 sm:px-12 lg:px-32"
        >
          <h1 className="text-2xl sm:text-4xl font-bold leading-tight mb-6 text-shadow-lg">
            {t("service.hero.title")}
          </h1>

          <Link
            href="/contact#contactus"
            className="uppercase px-6 py-3 bg-[#7B5B4C] hover:bg-[#96705f] text-white font-semibold transition-all rounded-[20px]"
          >
            {t("service.hero.button")}
          </Link>
        </motion.div>
      </section>

      {/* Info Section */}
      <motion.section
      className="p-8 bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 sm:px-12 bg-amber-100 rounded-2xl p-8">
        <motion.div
          className="w-full sm:w-1/2 pr-6 mb-8 sm:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-[#7B5B4C] mb-4">
            {t("service.sectionOne.title")}
          </h2>
          <p className="text-md text-[#7B5B4C] mb-6">
            {t("service.sectionOne.text")}
          </p>
        </motion.div>

        <motion.div
          className="w-full sm:w-1/2 flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0 border-l-0 sm:border-l-2 sm:border-[#7B5B4C] pl-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <a
            href="/contact#contactus"
            className="w-full sm:w-auto text-center px-6 py-3 text-white bg-[#7B5B4C] rounded-lg shadow-md hover:bg-[#9E7B58] transition-all flex items-center justify-center space-x-2"
          >
            <Mail className="w-5 h-5" />
            <span>{t("service.buttons.contactUs")}</span>
          </a>
          <a
            href="tel:+46103333536"
            className="w-full sm:w-auto text-center px-6 py-3 text-white bg-[#cc0000] rounded-lg shadow-md hover:bg-[#a60000] transition-all flex items-center justify-center space-x-2"
          >
            <Phone className="w-5 h-5" />
            <span>{t("service.buttons.callUs")}</span>
          </a>
        </motion.div>
      </div>
    </motion.section>

      {/* Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-32">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-[#7B5B4C] mb-10 uppercase">
            {t("service.sectionTwo.title")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Home className="w-6 h-6 text-[#7B5B4C] mr-3" />,
                image: "/corp.jpg",
                title: t("service.cards.cardOne.title"),
                text1: t("service.cards.cardOne.textOne"),
                text2: t("service.cards.cardOne.textTwo"),
                delay: 0.2,
              },
              {
                icon: <Package className="w-6 h-6 text-[#7B5B4C] mr-3" />,
                image: "/twofl.webp",
                title: t("service.cards.cardTwo.title"),
                text1: t("service.cards.cardTwo.textOne"),
                text2: t("service.cards.cardTwo.textTwo"),
                delay: 0.4,
              },
              {
                icon: <Headphones className="w-6 h-6 text-[#7B5B4C] mr-3" />,
                image: "/24.webp",
                title: t("service.cards.cardThree.title"),
                text1: t("service.cards.cardThree.text"),
                text2: "",
                delay: 0.6,
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: card.delay }}
                className="w-full opacity-80 p-8 text-[#7B5B4C] shadow-sm bg-white rounded-lg"
              >
                <img
                  src={card.image}
                  alt="StaySpace Service"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <div className="flex items-center mb-4">
                  {card.icon}
                  <h1 className="text-xl sm:text-2xl font-bold leading-tight text-left">
                    {card.title}
                  </h1>
                </div>
                <p className="text-sm md:text-lg mb-6 text-justify">{card.text1}</p>
                {card.text2 && (
                  <p className="text-sm md:text-lg mb-6 text-justify">{card.text2}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
