import Link from "next/link";

const Services = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center h-[85vh] sm:h-[70vh] flex items-center justify-center text-[#7B5B4C] overflow-hidden"
        style={{ backgroundImage: "url('/ser.jpg')" }}
      >
        <div className="rounded-lg lg:mr-[300px] w-[280px] sm:w-[400px] mx-auto bg-white opacity-72 p-8 text-[#7B5B4C] h-[350px] sm:h-[484px]">
          <h1 className="text-xl sm:text-2xl font-bold leading-tight mb-6 text-left">
            Looking for
            <br />
            Flexible,
            <br />
            Affordable,
            <br />
            and Quality
            <br />
            Accommodation for Your Team
            <br />
            with StaySpace.
          </h1>

          <div className="text-center mt-6">
            <Link
              href="/contactus"
              className="uppercase px-5 py-2 bg-[#7B5B4C] hover:bg-[#96705f] text-white font-semibold transition-all rounded-[20px]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* New Section Below */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-32">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-[#7B5B4C] mb-10">
            Our Services At StaySpace
          </h2>
          {/* Grid container for 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* First Card */}
            <div className="w-full opacity-80 p-8 text-[#7B5B4C] sm:h-[450px] md:h-[484px] shadow-sm">
              <h1 className="text-xl md:text-2xl font-bold leading-tight text-left">
                StaySpace
              </h1>
              <p className="text-md md:text-lg mb-6 text-justify">
                specializes in providing corporate accommodation, making it easy
                for you to find the right accommodation for your employees.
              </p>
              <p className="text-md md:text-lg mb-6 text-justify">
                we offer tailor-made solutions for both short and long-term
                needs, with a wide range of attractive and fully equipped
                apartments. Let us handle the accommodation process so you can
                focus on your business.
              </p>
            </div>

            {/* Second Card */}
            <div className="w-full opacity-80 p-8 text-[#7B5B4C] sm:h-[450px] md:h-[484px] shadow-sm">
              <h1 className="text-xl sm:text-2xl font-bold leading-tight text-left">
                At StaySpace
              </h1>
              <p className="text-md md:text-lg mb-6 text-justify">
                We tailor our solutions to suit the different needs and budgets
                of companies. We offer a wide range of accommodation options,
                from high-comfort apartments and houses to more economical
                options such as hostels.
              </p>
              <p className="text-md md:text-lg mb-6 text-justify">
                Whether you are looking for accommodation for a longer project
                or a shorter stay, we strive to deliver tailor-made solutions
                that combine quality and cost-effectiveness.
              </p>
            </div>

            {/* Third Card */}
            <div className="w-full opacity-80 p-8 text-[#7B5B4C] sm:h-[450px] md:h-[484px] shadow-sm">
              <h1 className="text-xl sm:text-2xl font-bold leading-tight mb-2 text-left">
                To make it easier for our guests, we offer 24/7 support
              </h1>
              <p className="text-md md:text-lg mb-6 text-justify">
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
