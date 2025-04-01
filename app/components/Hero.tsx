import { House } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[85vh] lg:h-[70vh] md:h-[80vh] sm:h-[90vh] flex items-center justify-center text-white overflow-hidden"
      style={{ backgroundImage: "url('/her3.jpg')" }}
    >
        <div className="lg:mr-[200px] max-w-md mx-auto bg-white opacity-72 p-8 text-[#7B5B4C] h-[470px]">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-6 text-left">
         {/*  <House className="text-[#fd6d15] font-extrabold" style={{ fontSize: '300px' }} /> */}


            Where
            <br />
            Business
            <br />
            Meets Comfort
          </h1>
          <p className="text-lg sm:text-md mb-6 text-left">
            Specialist in customized<br /> accommodation solutions <br />for companies
            throughout Sweden
          </p>
          <p className="text-lg sm:text-md mb-8 text-left">
            Is your company looking for accommodation<br /> for a longer construction
            project <br />or<br /> a shorter assignment?
          </p>
          <div className="text-center mt-6">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#fd6d15] hover:bg-red-400 text-white font-semibold transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>

    </section>
  );
};

export default Hero;
