"use client"
import {
  ArrowDownAZ,
  BookCheck,
  Cog,
  Component,
  MapPin,
  MapPinPlusInside,
  MessageCircleQuestion,
  Phone,
  RedoDot,
  Search,
  Smile,
  User,
} from "lucide-react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Link from "next/link";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Add event listener for animations on scroll
    const handleScroll = () => {
      const sections = document.querySelectorAll(".animate-on-scroll");
      sections.forEach((section) => {
        const position = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight * 0.8 && position > -windowHeight * 0.2) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to add animations to already-visible elements
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Hero />
      <section className="bg-[#fdfaf5] py-16 px-4 sm:px-12">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row">
          {/* Left Section */}
          <div className="w-full sm:w-1/2 flex flex-row justify-start mb-8 sm:mb-0">
            {/* Logo Image */}
            <img
              src="/support.png"
              alt="Support Logo"
              className="w-20 h-20 mr-6 animate-on-scroll"
            />
            <h2 className="uppercase text-xl sm:text-3xl md:text-4xl font-bold text-[#7B5B4C] mb-6 lg:mt-3 animate-on-scroll">
              How We Support You?
            </h2>
          </div>

          {/* Right Section */}
          <div className="w-full sm:w-1/2 flex flex-col justify-between">
            <div className="h-full flex flex-col justify-between">
              <div className="mb-8">
                <p className="text-[#7B5B4C] uppercase text-lg sm:text-2xl font-semibold flex animate-on-scroll">
                  <Component className="mr-4" /> For companies
                </p>
                <p className="text-md sm:text-xl text-[#7B5B4C] animate-on-scroll">
                  Tailor-made accommodation solutions.
                </p>
              </div>
              <div className="mb-8">
                <p className="text-[#7B5B4C] uppercase text-lg sm:text-2xl font-semibold flex animate-on-scroll">
                  {" "}
                  <MapPinPlusInside className="mr-4" />
                  location
                </p>
                <p className="text-md sm:text-xl text-[#7B5B4C] animate-on-scroll">
                  Operating all over Sweden - Always close to you regardless of
                  boundaries.
                </p>
              </div>
              <div className="mb-8">
                <p className="text-[#7B5B4C] uppercase text-lg sm:text-2xl font-semibold flex animate-on-scroll">
                  {" "}
                  <BookCheck className="mr-4" /> Trusted
                </p>
                <p className="text-md sm:text-xl text-[#7B5B4C] animate-on-scroll">
                  Worry-free handling - We handle all contact, agreements &
                  invoicing.
                </p>
              </div>
              <div className="mb-8">
                <p className="text-[#7B5B4C] uppercase text-lg sm:text-2xl font-semibold flex animate-on-scroll">
                  {" "}
                  <ArrowDownAZ className="mr-4" /> All in one
                </p>
                <p className="text-md sm:text-xl text-[#7B5B4C] animate-on-scroll">
                  One contact for accommodation throughout Sweden.
                </p>
              </div>
              <div className="">
                <p className="text-[#7B5B4C] uppercase text-lg sm:text-2xl font-semibold flex animate-on-scroll">
                  {" "}
                  <Cog className="mr-4" /> Gurantee
                </p>
                <p className="text-md sm:text-xl text-[#7B5B4C] animate-on-scroll">
                  Safe & Reliable Accommodation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fdfaf5]">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row">
          {/* Left Section */}
          <div className="w-full sm:w-1/2 flex flex-col justify-between mb-8 sm:mb-0  py-16 px-4 sm:px-12">
            {/* First Image - Logo */}
            <div className="mb-8 self-center animate-on-scroll">
              <Link href="/">
                <img
                  src="/stayspace.png"
                  alt="Support Logo"
                  className="w-[150px] h-auto md:w-[200px] md:h-10"
                />
              </Link>
            </div>

            {/* Second Image - Bed Image */}
            <div className="animate-on-scroll">
              <img
                src="/bed1.jpg"
                alt="Bed Image"
                className="w-full h-auto rounded-sm"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full sm:w-1/2 flex flex-col justify-between lg:py-16 px-4 sm:px-12">
            <div className="h-full flex flex-col justify-between">
              <div className="mb-1">
                <p className="text-[#7B5B4C] uppercase text-2xl font-semibold flex flex-row animate-on-scroll">
                  <MessageCircleQuestion className="mr-4" />Why Choose StaySpace?
                </p>
              </div>
              <div className="mb-2">
                <p className="text-[#7B5B4C] text-md md:text-lg font-semibold flex flex-row animate-on-scroll">
                  <RedoDot className="mr-4" />Tailored support and solutions
                  adapted to your needs.
                </p>
              </div>
              <div className="mb-2">
                <p className="text-[#7B5B4C] text-md md:text-lg font-semibold flex flex-row animate-on-scroll">
                  <RedoDot className="mr-4" />Smooth and hassle-free experience
                  from start to the End.
                </p>
              </div>
              <div className="mb-2">
                <p className="text-[#7B5B4C] text-md md:text-lg font-semibold flex flex-row animate-on-scroll">
                  <RedoDot className="mr-4" />Fast and reliable service at every
                  step of the process.
                </p>
              </div>
              <div className="mb-2">
                <p className="text-[#7B5B4C] text-md md:text-lg font-semibold flex flex-row animate-on-scroll">
                  <RedoDot className="mr-4" />24/7 support to ensure we are
                  always here when you need us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
