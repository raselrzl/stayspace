"use client";

import { Phone, Mail, MapPin } from "lucide-react"; // Import icons from lucide-react
import ContactForm from "../components/Form"; // Assuming you have your ContactForm component in this path
import EmbeddedMap from "../components/EmbeddedMap";

const ContactUs = () => {
  return (
    <div className="text-[#7B5B4C]">
      <section
        className="relative bg-cover bg-center h-[85vh] sm:h-[70vh] flex items-center justify-center text-[#7B5B4C] overflow-hidden"
        style={{ backgroundImage: "url('/her3.jpg')" }}
      >
        <div className="lg:mr-[300px] w-[322px] sm:w-[400px] mx-auto bg-white opacity-72 p-8 text-[#7B5B4C] h-[450px] sm:h-[484px]">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-6 text-left">
            Where
            <br />
            Business
            <br />
            Meets Comfort
          </h1>
          <p className="text-md md:text-lg mb-6 text-left">
            Specialist in customized accommodation solutions for companies
            throughout Sweden
          </p>
          <p className="text-md md:text-lg mb-6 text-left">
            Is your company looking for accommodation for a longer construction
            project or a shorter assignment?
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <div className="flex flex-col lg:flex-row mx-auto p-5 sm:px-6 lg:px-8">
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

            <div className="relative w-full h-64 rounded-lg overflow-hidden">
             {/*  <img
                src="/her4.jpg"
                alt="Map location"
                className="object-cover w-full h-full"
              /> */}
              <EmbeddedMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
