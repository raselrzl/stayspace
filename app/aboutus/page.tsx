"use client";

import { Phone, Mail, MapPin, History, Users, Home } from "lucide-react"; // Import icons from lucide-react
import ContactForm from "../components/Form"; // Assuming you have your ContactForm component in this path
import EmbeddedMap from "../components/EmbeddedMap";
import Link from "next/link";
const AboutUs = () => {
  return (
    <div className="text-[#7B5B4C]">
      {/* Background Section */}
      <section
        className="relative bg-cover bg-center h-[85vh] sm:h-[70vh] flex items-center justify-center text-[#7B5B4C] overflow-hidden"
        style={{ backgroundImage: "url('/ser1.jpg')" }}
      >
        <div className="rounded-lg lg:mr-[400px] md:mr-[300px] w-[322px] sm:w-[400px] mx-auto opacity-72 p-8 text-white h-[450px] sm:h-[484px]">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-6 text-left">
            <p className="">StaySpace</p>
          </h1>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-32">
          <div className="space-y-8">
            {/* History Section */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#7B5B4C] mb-4 text-right">
                <History className="w-6 h-6 text-[#7B5B4C] inline-block mr-2" />
                <span>How it all started</span>
              </h2>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <img
                  src="/contact1.jpg" // Image from the public folder
                  alt="History Image"
                  className="w-full sm:w-1/3 h-auto object-cover rounded-lg"
                />
                <p className="text-sm sm:text-lg mb-6 text-justify sm:w-2/3 border-t-2 border-gray-200">
                  The history of StaySpace started like many other success
                  stories: With a tough nut that needed to be cracked. The year
                  was 2015 and our founder Alexander Zinovjev was trying to help
                  a childhood friend to find accommodation for his staff in
                  Stockholm. His company couldn’t rent on the private housing
                  market and hotels didn’t meet their needs. Thanks to this,
                  Alexander realized how difficult it was for many foreign
                  companies to find good, affordable accommodation for their
                  employees in Sweden. That was when he decided to start
                  StaySpace: an innovative, flexible, personal company with the
                  vision of creating a home for people who’re working a long way
                  from their own home.
                </p>
              </div>
            </div>

            {/* What We Do Section */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#7B5B4C] mb-4 text-right">
                <MapPin className="w-6 h-6 text-[#7B5B4C] inline-block mr-2" />
                <span>What we do</span>
              </h2>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <img
                  src="/contact1.jpg" // Image from the public folder
                  alt="What We Do Image"
                  className="w-full sm:w-1/3 h-auto object-cover rounded-lg"
                />
                <p className="text-sm sm:text-lg mb-6 text-justify sm:w-2/3 border-t-2 border-gray-200">
                  Today, we are a fast-growing company with hundreds of
                  satisfied national and international customers. With
                  StaySpace, you can rent modern furnished apartments and villas
                  per day, per week, or per month in Stockholm, Göteborg,
                  Uppsala, Linköping, Västerås, Malmö, Lund, and many other
                  Swedish cities. All our accommodation is fully furnished and
                  equipped for self-catering, so you have everything you need
                  for a comfortable stay.
                  <br />
                  Most of our guests are companies, but private individuals who
                  need temporary housing are also very welcome. Whether you need
                  an apartment for a large team, a villa for a family, or an
                  apartment hotel for a single traveler, we have what you need.
                </p>
              </div>
            </div>

            {/* How We Do It Section */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#7B5B4C] mb-4 text-right">
                <Users className="w-6 h-6 text-[#7B5B4C] inline-block mr-2" />
                <span>How we do it</span>
              </h2>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <img
                  src="/contact1.jpg" // Image from the public folder
                  alt="How We Do It Image"
                  className="w-full sm:w-1/3 h-auto object-cover rounded-lg"
                />
                <p className="text-sm sm:text-lg mb-6 text-justify sm:w-2/3 border-t-2 border-gray-200">
                  For us, personal service is the most important thing of all.
                  We work hard to build up close relationships with our
                  customers by meeting their needs and delivering exceptional
                  customer service at affordable prices. We challenge the
                  ordinary housing market by acquiring and developing properties
                  that can meet our customers’ needs.
                </p>
              </div>
            </div>

            {/* StaySpace Information Section */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#7B5B4C] mb-4 text-right">
                <Home className="w-6 h-6 text-[#7B5B4C] inline-block mr-2" />
                <span>Why StaySpace?</span>
              </h2>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <img
                  src="/contact1.jpg" // Image from the public folder
                  alt="StaySpace Information Image"
                  className="w-full sm:w-1/3 h-auto object-cover rounded-lg"
                />
                <p className="text-sm sm:text-lg mb-6 text-justify sm:w-2/3 border-t-2 border-gray-200">
                  At StaySpace, we’re committed to providing flexible,
                  affordable, and quality accommodation solutions for businesses
                  and individuals. Whether you’re staying for a short-term or
                  long-term period, we ensure that your stay is comfortable and
                  hassle-free. Our diverse portfolio of properties and unmatched
                  customer service set us apart as the go-to solution for
                  corporate accommodation needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100" id="contactus">
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

              {/* Map Section */}
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

export default AboutUs;
