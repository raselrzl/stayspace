"use client";

import ContactForm from "../components/Form";
import PartnerContactForm from "../components/PartnerContactForm";
import { CheckCircle, Users, Handshake, PhoneCall } from "lucide-react";
import { FileText, Image, MessageCircle, Check } from "lucide-react";

const BecomePartner = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center h-[85vh] sm:h-[70vh] flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: "url('/pa1.jpg')" }}
      >
        <div className="lg:mr-[950px] md:mr-[800px] w-[322px] sm:w-[400px] mx-auto rounded-lg bg-white opacity-72 p-8 text-[#7B5B4C] h-[450px] sm:h-[484px]">
          {/* Optional Heading */}
          {/* <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-6 text-left"> */}
          {/*     Where */}
          {/*     <br /> */}
          {/*     Business */}
          {/*     <br /> */}
          {/*     Meets Comfort */}
          {/* </h1> */}
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-32">
          <div className="flex flex-col-reverse md:flex-row space-y-8 lg:space-y-0 lg:space-x-8 p-4 rounded-2xl">
            <div className="flex-1 p-6 shadow-md">
              <h2 className="text-2xl font-bold text-[#7B5B4C] mb-4">
                Do You Want to Rent Out Your Property?
              </h2>

              <ul className="space-y-3 text-[#7B5B4C]">
                <li className="flex items-start">
                  <Handshake className="w-5 h-5 mt-1 mr-2 text-[#7B5B4C]" />
                  <span>
                    StaySpace collaborates with land and property owners to
                    create a thriving community.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mt-1 mr-2 text-[#7B5B4C]" />
                  <span>We are always open to new partnerships.</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-5 h-5 mt-1 mr-2 text-[#7B5B4C]" />
                  <span>
                    We offer homes for a large number of professionals.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mt-1 mr-2 text-[#7B5B4C]" />
                  <span>
                    Renting your property is safe, easy, and customizable.
                  </span>
                </li>
                <li className="flex items-start mt-4">
                  <PhoneCall className="w-5 h-5 mt-1 mr-2 text-[#7B5B4C]" />
                  <span>
                    Ready to rent out your property? Contact us today to get
                    started!
                  </span>
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
                How Does the Rental Process Work?
              </h2>

              <ul className="space-y-3 text-[#7B5B4C]">
                <li className="flex items-start">
                  <FileText className="w-5 h-5 mt-1 mr-2 text-[#7B5B4C]" />
                  <span>
                    Fill out the "Become a Host" form on our website with your
                    property details.
                  </span>
                </li>
                <li className="flex items-start">
                  <Image className="w-5 h-5 mt-1 mr-2 text-[#7B5B4C]" />
                  <span>
                    We publish your listing along with photos for potential
                    tenants to view.
                  </span>
                </li>
                <li className="flex items-start">
                  <MessageCircle className="w-5 h-5 mt-1 mr-2 text-[#7B5B4C]" />
                  <span>
                    We’ll contact you to discuss rental periods, guest count,
                    and other details.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mt-1 mr-2 text-[#7B5B4C]" />
                  <span>
                    You make the final decision on whether to rent out your
                    property.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Partner Contact Form */}
        </div>
        <div className="flex-1">
          <PartnerContactForm />
        </div>
      </section>
    </>
  );
};

export default BecomePartner;
