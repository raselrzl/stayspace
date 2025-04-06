"use client";
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
import ContactForm from "./components/Form";

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
            <div>
            <img
              src="/support.png"
              alt="Support Logo"
              className="w-20 h-20 mr-6 animate-on-scroll"
            />
            <h2 className="uppercase text-xl sm:text-3xl md:text-4xl font-bold text-[#7B5B4C] mb-6 lg:mt-3">
              How We Support You?
            </h2>
            </div>
          
            <div>
            <ContactForm />
            </div>
            
          </div>

          {/* Right Section */}
          <div className="w-full sm:w-1/2 flex flex-col justify-between">
            <div className="h-full flex flex-col justify-between">
              <div className="mb-8">
                <p className="text-[#7B5B4C] uppercase text-lg sm:text-2xl font-semibold flex ">
                  <Component className="mr-4" /> For companies
                </p>
                <p className="text-md sm:text-xl text-[#7B5B4C] animate-on-scroll">
                  Tailor-made accommodation solutions.
                </p>
              </div>
              <div className="mb-8">
                <p className="text-[#7B5B4C] uppercase text-lg sm:text-2xl font-semibold flex animate-on-scroll">
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
                  <BookCheck className="mr-4" /> Trusted
                </p>
                <p className="text-md sm:text-xl text-[#7B5B4C] animate-on-scroll">
                  Worry-free handling - We handle all contact, agreements & invoicing.
                </p>
              </div>
              <div className="mb-8">
                <p className="text-[#7B5B4C] uppercase text-lg sm:text-2xl font-semibold flex animate-on-scroll">
                  <ArrowDownAZ className="mr-4" /> All in one
                </p>
                <p className="text-md sm:text-xl text-[#7B5B4C] animate-on-scroll">
                  One contact for accommodation throughout Sweden.
                </p>
              </div>
              <div className="">
                <p className="text-[#7B5B4C] uppercase text-lg sm:text-2xl font-semibold flex animate-on-scroll">
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
          <div className="w-full sm:w-1/2 flex flex-col justify-between mb-8 sm:mb-0 py-16 px-4 sm:px-12">
            {/* First Image - Logo */}
            <div className="mb-8 self-center animate-on-scroll">
              <Link href="/">
                <img
                  src="/stayspace.png"
                  alt="StaySpace Logo"
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
                  <RedoDot className="mr-4" />Tailored support and solutions adapted to your needs.
                </p>
              </div>
              <div className="mb-2">
                <p className="text-[#7B5B4C] text-md md:text-lg font-semibold flex flex-row animate-on-scroll">
                  <RedoDot className="mr-4" />Smooth and hassle-free experience from start to the End.
                </p>
              </div>
              <div className="mb-2">
                <p className="text-[#7B5B4C] text-md md:text-lg font-semibold flex flex-row animate-on-scroll">
                  <RedoDot className="mr-4" />Fast and reliable service at every step of the process.
                </p>
              </div>
              <div className="mb-2">
                <p className="text-[#7B5B4C] text-md md:text-lg font-semibold flex flex-row animate-on-scroll">
                  <RedoDot className="mr-4" />24/7 support to ensure we are always here when you need us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#fdfaf5]">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-12">
          
          {/* Card 1 - CHOOSE YOUR PATH */}
          <div className="p-6 rounded-lg shadow-md animate-on-scroll">
            <h3 className="text-2xl font-bold text-[#7B5B4C] mb-4">CHOOSE YOUR PATH</h3>
            <img
              src="/her1.jpg" // Replace with your own image
              alt="Choose Your Path"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <Link href="/choose-your-path">
              <p className="text-[#7B5B4C] text-sm font-semibold">
                Become a tenant at StaySpace and enjoy a comfortable accommodation with modern amenities, or become a host and maximize the value of your property's full potential with our experts in real estate management. Choose the path that suits you and start your journey with us today.
              </p>
            </Link>
            <Link href="/personal-services">
              <p className="text-[#7B5B4C] text-lg font-semiboldn underline mt-2">Get in Touch</p>
            </Link>
          </div>

          {/* Card 2 - SHARE YOUR NEEDS */}
          <div className="p-6 rounded-lg shadow-md animate-on-scroll">
            <h3 className="text-2xl font-bold text-[#7B5B4C] mb-4">SHARE YOUR NEEDS</h3>
            <img
              src="/her1.jpg" // Replace with your own image
              alt="Share Your Needs"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <Link href="/share-your-needs">
              <p className="text-[#7B5B4C] text-sm font-semibold">
                Fill out our simple registration form to start your experience with StaySpace. Share your accommodation preferences and requirements, so we can provide the perfect place to stay or improve your property management services tailored to your specific needs.
              </p>
            </Link>
            <Link href="/personal-services">
              <p className="text-[#7B5B4C] text-lg font-semibold underline mt-2">Get in Touch</p>
            </Link>
          </div>

          {/* Card 3 - PERSONAL SERVICES */}
          <div className="p-6 rounded-lg shadow-md animate-on-scroll">
            <h3 className="text-2xl font-bold text-[#7B5B4C] mb-4">PERSONAL SERVICES</h3>
            <img
              src="/her1.jpg" // Replace with your own image
              alt="Personal Services"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <Link href="/personal-services">
              <p className="text-[#7B5B4C] text-sm font-semibold">
                Our dedicated team at StaySpace will give you the personal service and tailor-made housing solutions. We will guide you through each step of the process, ensuring a seamless and hassle-free experience, whether you're looking to rent or manage a property.
              </p>
            </Link>
            <Link href="/personal-services">
              <p className="text-[#7B5B4C] text-lg font-semibold underline mt-2">Get in Touch</p>
            </Link>
          </div>

        </div>
      </section>
      <section className="py-16 bg-[#fdfaf5]">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#7B5B4C] mb-8 animate-on-scroll">
            Our Trusted Partners
          </h2>
          <p className="text-md text-[#7B5B4C] mb-8 animate-on-scroll">
            StaySpace works with some of the best companies in the industry to provide seamless accommodation solutions. Our trusted partners help us deliver top-tier service to tenants and hosts alike.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 justify-center animate-on-scroll">
            {/* Logo 1 */}
            <div className="flex justify-center">
              <img
                src="/stayspace.png" // Your logo
                alt="Company Logo 1"
                className="w-24 h-auto"
              />
            </div>
            {/* Logo 2 */}
            <div className="flex justify-center">
              <img
                src="/stayspace.png" // Your logo
                alt="Company Logo 2"
                className="w-24 h-auto"
              />
            </div>
            {/* Logo 3 */}
            <div className="flex justify-center">
              <img
                src="/stayspace.png" // Your logo
                alt="Company Logo 3"
                className="w-24 h-auto"
              />
            </div>
            {/* Logo 4 */}
            <div className="flex justify-center">
              <img
                src="/stayspace.png" // Your logo
                alt="Company Logo 4"
                className="w-24 h-auto"
              />
            </div>
            {/* Logo 5 */}
            <div className="flex justify-center">
              <img
                src="/stayspace.png" // Your logo
                alt="Company Logo 5"
                className="w-24 h-auto"
              />
            </div>
            {/* Logo 6 */}
            <div className="flex justify-center">
              <img
                src="/stayspace.png" // Your logo
                alt="Company Logo 6"
                className="w-24 h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
