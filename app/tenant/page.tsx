import Link from "next/link";

const Tenant = () => {
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
              Write to Us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#fdfaf5] py-16 px-4 sm:px-12">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-xl font-bold text-[#7B5B4C] mb-8">
            Always Included in Your Stay
          </h2>
          <p className="text-md text-[#7B5B4C] mb-8">
            Enjoy the full range of modern amenities and services that make your stay comfortable, with everything you need, included.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
            {/* Fully Furnished */}
            <div className="text-center">
              <img
                src="/stayspace.png" // Replaced with StaySpace image
                alt="Fully Furnished"
                className="w-20 h-20 mx-auto mb-4"
              />
              <p className="text-[#7B5B4C] font-semibold">Fully Furnished</p>
            </div>

            {/* Fully Equipped Kitchen */}
            <div className="text-center">
              <img
                src="/stayspace.png" // Replaced with StaySpace image
                alt="Fully Equipped Kitchen"
                className="w-20 h-20 mx-auto mb-4"
              />
              <p className="text-[#7B5B4C] font-semibold">Fully Equipped Kitchen</p>
            </div>

            {/* WiFi */}
            <div className="text-center">
              <img
                src="/stayspace.png" // Replaced with StaySpace image
                alt="WiFi"
                className="w-20 h-20 mx-auto mb-4"
              />
              <p className="text-[#7B5B4C] font-semibold">WiFi</p>
            </div>

            {/* 24/7 Service */}
            <div className="text-center">
              <img
                src="/stayspace.png" // Replaced with StaySpace image
                alt="24/7 Service"
                className="w-20 h-20 mx-auto mb-4"
              />
              <p className="text-[#7B5B4C] font-semibold">24/7 Service</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fdfaf5] py-16 px-4 sm:px-12">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-xl font-bold text-[#7B5B4C] mb-8">
            Up Your Stay with Our Extra Services
          </h2>
          <p className="text-md text-[#7B5B4C] mb-8">
            Take your stay to the next level with our additional services, designed for your comfort and convenience.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
            {/* Cleaning */}
            <div className="text-center">
              <img
                src="/stayspace.png" // Replaced with StaySpace image
                alt="Cleaning"
                className="w-20 h-20 mx-auto mb-4"
              />
              <p className="text-[#7B5B4C] font-semibold">Cleaning</p>
            </div>

            {/* Flexible Cancellation */}
            <div className="text-center">
              <img
                src="/stayspace.png" // Replaced with StaySpace image
                alt="Flexible Cancellation"
                className="w-20 h-20 mx-auto mb-4"
              />
              <p className="text-[#7B5B4C] font-semibold">Flexible Cancellation</p>
            </div>

            {/* Damage Protection */}
            <div className="text-center">
              <img
                src="/stayspace.png" // Replaced with StaySpace image
                alt="Damage Protection"
                className="w-20 h-20 mx-auto mb-4"
              />
              <p className="text-[#7B5B4C] font-semibold">Damage Protection</p>
            </div>

            {/* Early Check-in */}
            <div className="text-center">
              <img
                src="/stayspace.png" // Replaced with StaySpace image
                alt="Early Check-in"
                className="w-20 h-20 mx-auto mb-4"
              />
              <p className="text-[#7B5B4C] font-semibold">Early Check-in</p>
            </div>

            {/* Late Checkout */}
            <div className="text-center">
              <img
                src="/stayspace.png" // Replaced with StaySpace image
                alt="Late Checkout"
                className="w-20 h-20 mx-auto mb-4"
              />
              <p className="text-[#7B5B4C] font-semibold">Late Checkout</p>
            </div>

            {/* Extra Linen & Towels */}
            <div className="text-center">
              <img
                src="/stayspace.png" // Replaced with StaySpace image
                alt="Extra Linen & Towels"
                className="w-20 h-20 mx-auto mb-4"
              />
              <p className="text-[#7B5B4C] font-semibold">Extra Linen & Towels</p>
            </div>

            {/* Extra Bed */}
            <div className="text-center">
              <img
                src="/stayspace.png" // Replaced with StaySpace image
                alt="Extra Bed"
                className="w-20 h-20 mx-auto mb-4"
              />
              <p className="text-[#7B5B4C] font-semibold">Extra Bed</p>
            </div>

            {/* Baby Crib */}
            <div className="text-center">
              <img
                src="/stayspace.png" // Replaced with StaySpace image
                alt="Baby Crib"
                className="w-20 h-20 mx-auto mb-4"
              />
              <p className="text-[#7B5B4C] font-semibold">Baby Crib</p>
            </div>
          </div>
        </div>
      </section>


      
    </>
  );
};

export default Tenant;
