import {
  ArrowDownAZ,
  BookCheck,
  Cog,
  Component,
  MapPinPlusInside,
  MessageCircleQuestion,
  RedoDot,
} from "lucide-react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
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
              className="w-20 h-20 mr-6" // Adjust the size as needed
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#fd6d15] mb-6 lg:mt-3">
              How We Support You?
            </h2>
          </div>

          {/* Right Section */}
          <div className="w-full sm:w-1/2 flex flex-col justify-between ">
            <div className="h-full flex flex-col justify-between">
              <div className="mb-8">
                <p className="text-[#fd6d15] uppercase text-xl sm:text-2xl font-semibold flex">
                  <Component className="mr-4" /> For companies
                </p>
                <p className="text-md sm:text-xl text-[#7B5B4C]">
                  Tailor-made accommodation solutions.
                </p>
              </div>
              <div className="mb-8">
                <p className="text-[#fd6d15] uppercase text-xl sm:text-2xl font-semibold flex">
                  {" "}
                  <MapPinPlusInside className="mr-4" />
                  location
                </p>
                <p className="text-md sm:text-xl text-[#7B5B4C]">
                  Operating all over Sweden - Always close to you regardless of
                  boundaries.
                </p>
              </div>
              <div className="mb-8">
                <p className="text-[#fd6d15] uppercase text-xl sm:text-2xl font-semibold flex">
                  {" "}
                  <BookCheck className="mr-4" /> Trusted
                </p>
                <p className="text-md sm:text-xl text-[#7B5B4C]">
                  Worry-free handling - We handle all contact, agreements &
                  invoicing.
                </p>
              </div>
              <div className="mb-8">
                <p className="text-[#fd6d15] uppercase text-xl sm:text-2xl font-semibold flex">
                  {" "}
                  <ArrowDownAZ className="mr-4" /> All in one
                </p>
                <p className="text-md sm:text-xl text-[#7B5B4C]">
                  One contact for accommodation throughout Sweden.
                </p>
              </div>
              <div className="">
                <p className="text-[#fd6d15] uppercase text-xl sm:text-2xl font-semibold flex">
                  {" "}
                  <Cog className="mr-4" /> Gurantee
                </p>
                <p className="text-md sm:text-xl text-[#7B5B4C]">
                  Safe & Reliable Accommodation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f3f2]">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row">
          {/* Left Section */}
          <div className="w-full sm:w-1/2 flex flex-col justify-between mb-8 sm:mb-0  py-16 px-4 sm:px-12">
            {/* First Image - Logo */}
            <div className="mb-8 self-center">
            <Link href="/">
            <img
              src="/stayspace.png"
              alt="Support Logo"
              className="w-[150px] h-auto md:w-[200px] md:h-10" // Adjust the size as needed
            />
          </Link>
            </div>

            {/* Second Image - Bed Image */}
            <div className="">
              <img
                src="/bed1.jpg"
                alt="Bed Image"
                className="w-full h-auto rounded-sm" // Adds rounded corners to top-left and top-right
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full sm:w-1/2 flex flex-col justify-between  lg:py-16 px-4 sm:px-12">
            <div className="h-full flex flex-col justify-between">
              <div className="mb-1">
                <p className="text-[#fd6d15] uppercase text-2xl font-semibold flex flex-row">
                <MessageCircleQuestion className="mr-4"/>Why Choose StaySpace?
                </p>
              </div>
              <div className="mb-2">
                <p className="text-[#7B5B4C]  text-md md:text-lg font-semibold flex flex-row">
                <RedoDot className="mr-4"/>Tailored support and solutions adapted to your needs.
                </p>
                {/* <p className="text-lg sm:text-xl text-[#7B5B4C]">
            Smooth and hassle-free experience from start to finish.
          </p> */}
              </div>
              <div className="mb-2">
                <p className="text-[#7B5B4C]  text-md md:text-lg font-semibold flex flex-row">
                <RedoDot className="mr-4"/>Smooth and hassle-free experience from start to the End.
                </p>
              </div>
              <div className="mb-2">
                <p className="text-[#7B5B4C]  text-md md:text-lg font-semibold flex flex-row">
                <RedoDot className="mr-4"/>Fast and reliable service at every step of the process.
                </p>
                {/*   <p className="text-lg sm:text-xl text-[#7B5B4C]">
            Fast and efficient service, ensuring quick resolutions.
          </p> */}
              </div>
              <div className="mb-2">
                <p className="text-[#7B5B4C]  text-md md:text-lg font-semibold flex flex-row">
                <RedoDot className="mr-4"/>24/7 support to ensure we are always here when you need us.
                </p>
                {/* <p className="text-lg sm:text-xl text-[#7B5B4C]">
            Our team is available 24/7 to support you, whenever needed.
          </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
