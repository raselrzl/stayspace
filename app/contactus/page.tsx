"use client";

import { Phone, Mail, MapPin } from "lucide-react"; // Import icons from lucide-react
import ContactForm from "../components/Form"; // Assuming you have your ContactForm component in this path
import EmbeddedMap from "../components/EmbeddedMap";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="text-[#7B5B4C]">
      {/* Background Section */}
      <section
        className="relative bg-cover bg-center h-[85vh] sm:h-[70vh] flex items-center justify-center text-[#7B5B4C] overflow-hidden"
        style={{ backgroundImage: "url('/contact.jpg')" }}
      >
        <div className="rounded-lg lg:mr-[400px] md:mr-[300px] w-[322px] sm:w-[400px] mx-auto bg-white opacity-72 p-8 text-[#7B5B4C] h-[450px] sm:h-[484px]">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-6 text-left">
            <p className="text-[#7B5B4C]">
              Call
              <br />
              <a href="tel:+46103333536" className="underline">
                +46 10-333 35 36
              </a>
            </p>
            <p className="flex items-center mb-4">
              <span className="text-[#7B5B4C] mt-10">
                Email <br />
                <a href="mailto:kontakt@stayspace.se" className="underline">
                  kontakt@stayspace.se
                </a>
              </span>
            </p>
          </h1>

          <div className="text-center mt-10">
            <p className="uppercase px-6 py-3 hover:bg-red-400 text-[#7B5B4C] font-semibold transition-all">
              Or fill up the form bellow
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-32">
          <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
            {/* Left Side: Contact Form */}
            <div className="lg:w-1/2 w-full mb-8 lg:mb-0 shadow-2xl">
              <ContactForm />
            </div>

            {/* Right Side: Contact Information */}
            <div className="lg:w-1/2 w-full p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#7B5B4C] mb-4">
                Direct Contact
              </h2>

              {/* Contact Information */}
              <div className="flex items-center mb-4">
                <Phone className="text-[#7B5B4C] mr-2" />
                <p className="text-[#7B5B4C]">
                  For direct contact, call us at{" "}
                  <a href="tel:+46103333536" className="underline">
                    +46 10-333 35 36
                  </a>
                </p>
              </div>
              <div className="flex items-center mb-4">
                <Mail className="text-[#7B5B4C] mr-2" />
                <p className="text-[#7B5B4C]">
                  We respond to emails within 24 hours. You can reach us at{" "}
                  <a href="mailto:kontakt@stayspace.se" className="underline">
                    kontakt@stayspace.se
                  </a>
                </p>
              </div>
              <div className="flex items-center mb-4">
                <MapPin className="text-[#7B5B4C] mr-2" />
                <p className="text-[#7B5B4C]">
                  StaySpace
                  <br />
                  Finspångsvägen 497, 605 80 Svärtinge
                </p>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="text-[#7B5B4C] mr-2" />
                <p className="text-[#7B5B4C]">
                  Phone:{" "}
                  <a href="tel:+46103333536" className="underline">
                    +46 10-333 35 36
                  </a>
                </p>
              </div>

              {/* Map Section (Currently a placeholder image) */}
              <div className="mt-8">
                <div className="relative w-full h-64 overflow-hidden">
                  <EmbeddedMap />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
