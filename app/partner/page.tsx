"use client"

import ContactForm from "../components/Form";
import PartnerContactForm from "../components/PartnerContactForm";

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
          {/* Flexbox for responsive two-column layout */}
          <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 p-4 rounded-2xl">
            {/* First Div with Text */}
            <div className="flex-1 p-6 shadow-md">
              <h2 className="text-2xl font-bold text-[#7B5B4C] mb-4">
                Do You Want to Rent Out Your Property?
              </h2>
              <p className="text-md text-[#7B5B4C] mb-4">
                We at StaySpace collaborate with land and property owners to create a thriving community. We are always open to new partnerships.
              </p>
              <p className="text-md text-[#7B5B4C] mb-4">
                We offer homes for a large number of professionals, ensuring the process of renting out your property is safe, easy, and customizable.
              </p>
              <p className="text-md text-[#7B5B4C] mt-4">
                Ready to rent out your property? Contact us today to get started!
              </p>
            </div>

            {/* Second Div with Image */}
            <div className="flex-1">
              <img
                src="/her3.jpg"
                alt="StaySpace Logo"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Responsive layout for mobile (image first, then text) */}
          <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 p-4 mt-8 rounded-2xl">
            {/* Third Div with Text */}
            <div className="flex-1 p-6 shadow-md">
              <h2 className="text-2xl font-bold text-[#7B5B4C] mb-4">
                How Does the Rental Process Work?
              </h2>
              <p className="text-md text-[#7B5B4C] mb-4">
                The first step is to fill out the "Become a Host" form on our website, where you'll provide information about your property. We'll then publish your property details along with photos for potential tenants to view.
              </p>
              <p className="text-md text-[#7B5B4C] mb-4">
                Once your details are submitted, we'll get in touch with you to discuss rental periods, number of guests, and other relevant details. You will have the final decision on whether or not to rent out your property.
              </p>
            </div>

            {/* Fourth Div with Image */}
            <div className="flex-1">
              <img
                src="/contact2.jpg"
                alt="Property Rental"
                className="w-full h-auto object-cover rounded-2xl"
              />
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
