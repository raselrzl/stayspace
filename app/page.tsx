import { ArrowDownAZ, BookCheck, Cog, Component, MapPinPlusInside } from "lucide-react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

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
            className="w-20 h-20 mr-6"  // Adjust the size as needed
          />
          <h2 className="text-4xl sm:text-5xl font-bold text-[#fd6d15] mb-6 lg:mt-3">
            How We Support You?
          </h2>
        </div>

        {/* Right Section */}
        <div className="w-full sm:w-1/2 flex flex-col justify-between border-l-4 pl-4">
          <div className="h-full flex flex-col justify-between">
            <div className="mb-8">
              <p className="text-[#fd6d15] uppercase text-2xl font-semibold flex"><Component className="mr-4"/> For companies</p>
              <p className="text-lg sm:text-xl text-[#7B5B4C]">
                Tailor-made accommodation solutions.
              </p>
            </div>
            <div className="mb-8">
            <p className="text-[#fd6d15] uppercase text-2xl font-semibold flex"> <MapPinPlusInside className="mr-4"/>location</p>
              <p className="text-lg sm:text-xl text-[#7B5B4C]">
                Operating all over Sweden - Always close to you regardless of boundaries.
              </p>
            </div>
            <div className="mb-8">
            <p className="text-[#fd6d15] uppercase text-2xl font-semibold flex"> <BookCheck  className="mr-4"/> Trusted</p>
              <p className="text-lg sm:text-xl text-[#7B5B4C]">
                Worry-free handling - We handle all contact, agreements & invoicing.
              </p>
            </div>
            <div className="mb-8">
            <p className="text-[#fd6d15] uppercase text-2xl font-semibold flex"> <ArrowDownAZ  className="mr-4"/> All in one</p>
              <p className="text-lg sm:text-xl text-[#7B5B4C]">
                One contact for accommodation throughout Sweden.
              </p>
            </div>
            <div className="">
            <p className="text-[#fd6d15] uppercase text-2xl font-semibold flex"> <Cog  className="mr-4"/> Gurantee</p>
              <p className="text-lg sm:text-xl text-[#7B5B4C]">
                Safe & Reliable Accommodation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
