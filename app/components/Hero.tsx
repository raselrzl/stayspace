"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl"; // Import useTranslations for multi-language support
import { motion } from "framer-motion"; // Import Framer Motion

// ImageSlider for changing background image
const ImageSlider = () => {
  const slides = [
    { url: 'bed1.jpg' },
    { url: 'her3.jpg' },
    { url: 'her1.jpg' },
    { url: 'bed2.jpg' },
    { url: 'her2.jpg' },
    { url: 'her4.jpg' },
    { url: 'her5.jpg' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1); // The index of the next image
  const [transitioning, setTransitioning] = useState(false);

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setTransitioning(true);  // Enable transition
    setNextIndex(isLastSlide ? 0 : currentIndex + 1);  // Update next image index

    // Wait for 6 seconds before changing image and then start transition
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setTransitioning(false);  // Disable transition after changing the image
    }, 1000);  // Transition duration of 1 second
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(autoSlide); // Clean up the interval on component unmount
  }, [currentIndex]);

  return { url: slides[currentIndex].url, nextUrl: slides[nextIndex].url, transitioning }; // Return the current and next image URLs and transition state
};

const Hero = () => {
  const t = useTranslations(); // Access translations

  const { url: backgroundImage, nextUrl, transitioning } = ImageSlider(); // Get the current background image URL from ImageSlider

  return (
    <section className="relative h-[85vh] sm:h-[70vh] flex items-center justify-center overflow-hidden bg-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0">
        {/* Current background image */}
        <motion.div
          className={`absolute inset-0 bg-cover bg-center ${transitioning ? "z-0" : "z-10"}`}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            transform: transitioning ? "translateX(-100%)" : "translateX(0%)", // Slide out to left
            transition: transitioning ? "transform 1s ease-in-out" : "none", // 1-second slide transition
          }}
        ></motion.div>

        {/* Next background image behind */}
        <motion.div
          className={`absolute inset-0 bg-cover bg-center ${transitioning ? "z-10" : "z-0"}`}
          style={{
            backgroundImage: `url(${nextUrl})`,
            transform: transitioning ? "translateX(0%)" : "translateX(100%)", // Slide in from right
            transition: transitioning ? "transform 1s ease-in-out" : "none", // 1-second slide transition
          }}
        ></motion.div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 lg:mr-[300px] w-[322px] sm:w-[400px] mx-auto bg-gray-100 opacity-82 p-8 text-[#7B5B4C] h-[450px] sm:h-[484px] rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-2xl sm:text-3xl font-bold leading-tight mb-6 text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {t("hero.heading")} <br/>{t("hero.heading1")}<br/>{t("hero.heading2")}
        </motion.h1>
        <motion.p
          className="text-md md:text-lg mb-6 text-left italic"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {t("hero.description1")}
        </motion.p>
        <motion.p
          className="text-md md:text-lg mb-6 text-left italic"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          {t("hero.description2")}
        </motion.p>
        <div className="text-center mt-6">
          <Link
            href="/contact#contactus"
            className="uppercase text-sm md:text-md px-5 py-2 bg-[#7B5B4C] hover:bg-[#96705f] text-white font-semibold transition-all rounded-[20px]"
          >
            {t("hero.contact_button")}
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
