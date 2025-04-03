"use client"

import PartnerContactForm from "../components/PartnerContactForm";

const BecomePartner = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center h-[85vh] sm:h-[70vh] flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: "url('/pa1.jpg')" }}
      >
        <div className="lg:mr-[950px] md:mr-[800px] w-[322px] sm:w-[400px] mx-auto bg-white opacity-72 p-8 text-[#7B5B4C] h-[450px] sm:h-[484px]">
          {/* <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-6 text-left"> */}
          {/*     Where */}
          {/*     <br /> */}
          {/*     Business */}
          {/*     <br /> */}
          {/*     Meets Comfort */}
          {/* </h1> */}
          {/* <p className="text-md md:text-lg mb-6 text-left"> */}
          {/*     Specialist in customized<br /> accommodation solutions <br />for companies */}
          {/*     throughout Sweden */}
          {/* </p> */}
          {/* <p className="text-md md:text-lg mb-6 text-left"> */}
          {/*     Is your company looking for accommodation<br /> for a longer construction */}
          {/*     project <br />or<br /> a shorter assignment? */}
          {/* </p> */}
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-32">
          <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 p-8">
            {/* First Div with Image */}
            <div className="flex-1">
              <img
                src="/contact2.jpg"
                alt="Partner Image"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Second Div with Heading and Text */}
            <div className="flex-1 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-[#7B5B4C] mb-4">Become our Partner</h2>
              <p className="text-lg text-[#7B5B4C] mb-4">
                At StaySpace, we are looking for housing options such as apartments, hostels, or other solutions to meet companies' needs for temporary housing. As a partner, you will receive:
              </p>
              <ul className="list-disc pl-5 text-[#7B5B4C]">
                <li>Exposure to companies looking for accommodation for employees</li>
                <li>A simple registration process and management</li>
                <li>Flexible contracts for short and long periods</li>
              </ul>
              <p className="text-lg text-[#7B5B4C] mt-4">
                Do you want to become part of our network? Register your home with us today!
              </p>
            </div>

            {/* Third Div with the Form */}
            <div className="flex-1 p-6 rounded-lg shadow-md">
              <PartnerContactForm /> {/* Using the PartnerContactForm component here */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BecomePartner;
