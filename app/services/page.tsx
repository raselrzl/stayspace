import Link from "next/link";
import { Phone, Mail, Home, Package, Headphones } from "lucide-react";
const Services = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center h-[85vh] sm:h-[70vh] flex items-center justify-center text-white opacity-87 overflow-hidden"
        style={{ backgroundImage: "url('/contact2.jpg')" }}
      >
        <div className="text-center mx-4 sm:mx-0 px-6 sm:px-12 lg:px-32">
          <h1 className="text-2xl sm:text-4xl font-bold leading-tight mb-6 text-shadow-lg">
            Looking for Flexible, Affordable, and Quality Accommodation for Your
            Team with StaySpace.
          </h1>

          <Link
            href="/aboutus#contactus"
            className="uppercase px-6 py-3 bg-[#7B5B4C] hover:bg-[#96705f] text-white font-semibold transition-all rounded-[20px]"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <section className="p-8 bg-gray-50">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 sm:px-12 bg-amber-100 rounded-2xl p-8">
          {/* Left Side (Text) */}
          <div className="w-full sm:w-1/2 pr-6 mb-8 sm:mb-0">
            <h2 className="text-3xl font-bold text-[#7B5B4C] mb-4">
              Do you have any questions?
            </h2>
            <p className="text-md text-[#7B5B4C] mb-6">
              Do you have questions or can't find the right accommodation for
              you? Our customer service is happy to help you find the right
              solution.
            </p>
          </div>

          {/* Right Side (Buttons with Border) */}
          <div className="w-full sm:w-1/2 flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0 border-l-0 sm:border-l-2 sm:border-[#7B5B4C] pl-6">
            {/* Contact Us Button */}
            <a
              href="/aboutus#contactus"
              className="w-full sm:w-auto text-center px-6 py-3 text-white bg-[#7B5B4C] rounded-lg shadow-md hover:bg-[#9E7B58] transition-all flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Us</span>
            </a>

            {/* Call Us Button */}
            <a
              href="tel:+46103333536"
              className="w-full sm:w-auto text-center px-6 py-3 text-white bg-[#cc0000] rounded-lg shadow-md hover:bg-[#a60000] transition-all flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Us for Direct Conversation</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-32">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-[#7B5B4C] mb-10 uppercase">
            Our Services At StaySpace
          </h2>
          {/* Grid container for 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* First Card */}
            <div className="w-full opacity-80 p-8 text-[#7B5B4C] shadow-sm bg-white rounded-lg">
              <img
                src="/contact1.jpg" // Image from public folder
                alt="StaySpace Service"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <div className="flex items-center mb-4">
                <Home className="w-6 h-6 text-[#7B5B4C] mr-3" />
                <h1 className="text-xl md:text-2xl font-bold leading-tight text-left">
                  StaySpace
                </h1>
              </div>
              <p className="text-sm md:text-lg mb-6 text-justify">
                specializes in providing corporate accommodation, making it easy
                for you to find the right accommodation for your employees.
              </p>
              <p className="text-sm md:text-lg mb-6 text-justify">
                We offer tailor-made solutions for both short and long-term
                needs, with a wide range of attractive and fully equipped
                apartments. Let us handle the accommodation process so you can
                focus on your business.
              </p>
            </div>

            {/* Second Card */}
            <div className="w-full opacity-80 p-8 text-[#7B5B4C] shadow-sm bg-white rounded-lg">
              <img
                src="/contact1.jpg" // Image from public folder
                alt="StaySpace Service"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <div className="flex items-center mb-4">
                <Package className="w-6 h-6 text-[#7B5B4C] mr-3" />
                <h1 className="text-xl sm:text-2xl font-bold leading-tight text-left">
                  At StaySpace
                </h1>
              </div>
              <p className="text-sm md:text-lg mb-6 text-justify">
                We tailor our solutions to suit the different needs and budgets
                of companies. We offer a wide range of accommodation options,
                from high-comfort apartments and houses to more economical
                options such as hostels.
              </p>
              <p className="text-sm md:text-lg mb-6 text-justify">
                Whether you are looking for accommodation for a longer project
                or a shorter stay, we strive to deliver tailor-made solutions
                that combine quality and cost-effectiveness.
              </p>
            </div>

            {/* Third Card */}
            <div className="w-full opacity-80 p-8 text-[#7B5B4C] shadow-sm bg-white rounded-lg">
              <img
                src="/contact1.jpg" // Image from public folder
                alt="StaySpace Service"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <div className="flex items-center mb-4">
                <Headphones className="w-6 h-6 text-[#7B5B4C] mr-3" />
                <h1 className="text-xl sm:text-2xl font-bold leading-tight text-left">
                  24/7 Support
                </h1>
              </div>
              <p className="text-sm md:text-lg mb-6 text-justify">
                We are always available to assist and answer questions, allowing
                our guests to focus on what really matters during their stay.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
