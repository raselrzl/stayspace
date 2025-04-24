"use client";
import {
  ArrowDownAZ,
  BookCheck,
  Cog,
  Component,
  MapPin,
  MapPinPlusInside,
  MessageCircleQuestion,
  Phone,
  RedoDot,
  Search,
  Smile,
  Building2,
  Users,
  User,
} from "lucide-react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Link from "next/link";
import { useEffect } from "react";
import ContactForm from "./components/Form";
import { CarouselCompany } from "./components/carosuel";
import { useTranslations } from 'next-intl';

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".animate-on-scroll");
      sections.forEach((section) => {
        const position = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight * 0.8 && position > -windowHeight * 0.2) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const t = useTranslations();  // Using next-intl's translation hook

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-12">
          {/* Card 1 */}
          <div className="p-6 rounded-lg shadow-md animate-on-scroll">
            <h3 className="text-xl font-bold text-[#7B5B4C] mb-4 text-center">
              {t('home.choose_path_title')}
            </h3>
            <img src="/bed1.jpg" alt="Choose Your Path" className="w-full h-48 object-cover rounded-md mb-4" />
            <Link href="/contact#contactus">
              <p className="text-[#7B5B4C] text-sm font-semibold">
                {t('home.choose_path_description')}
              </p>
            </Link>
            <Link href="/contact#contactus">
              <p className="text-[#7B5B4C] text-sm font-bold underline mt-2">
                {t('home.get_in_touch')}
              </p>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-lg shadow-md animate-on-scroll">
            <h3 className="text-2xl font-bold text-[#7B5B4C] mb-4 text-center">
              {t('home.share_needs_title')}
            </h3>
            <img src="/contactimage.jpg" alt="Share Your Needs" className="w-full h-48 object-cover rounded-md mb-4" />
            <Link href="/contact#contactus">
              <p className="text-[#7B5B4C] text-sm font-semibold">
                {t('home.share_needs_description')}
              </p>
            </Link>
            <Link href="/contact#contactus">
              <p className="text-[#7B5B4C] text-sm font-bold underline mt-2">
                {t('home.get_in_touch')}
              </p>
            </Link>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-lg shadow-md animate-on-scroll">
            <h3 className="text-2xl font-bold text-[#7B5B4C] mb-4 text-center">
              {t('home.personal_services_title')}
            </h3>
            <img src="/ser1.jpg" alt="Personal Services" className="w-full h-48 object-cover rounded-md mb-4" />
            <Link href="/personal-services">
              <p className="text-[#7B5B4C] text-sm font-semibold">
                {t('home.personal_services_description')}
              </p>
            </Link>
            <Link href="/personal-services">
              <p className="text-[#7B5B4C] text-sm font-bold underline mt-2">
                {t('home.get_in_touch')}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Rest of the page with same structure */}
      <section className=" py-16 px-4 sm:px-12">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row gap-8">
          <div className="w-full sm:w-1/2 flex flex-col justify-between">
            <div className="h-full flex flex-col justify-between">
              {/* Companies */}
              <div className="mb-8">
                <p className="text-[#7B5B4C] uppercase text-md sm:text-2xl font-bold flex">
                  <Component className="mr-4 pt-1" /> {t('home.companies_title')}
                </p>
                <p className="text-md sm:text-xl text-[#7B5B4C] animate-on-scroll pl-10">
                  {t('home.companies_description')}
                </p>
              </div>
              {/* Location */}
              <div className="mb-8">
                <p className="text-[#7B5B4C] uppercase text-md sm:text-2xl font-bold flex animate-on-scroll">
                  <MapPinPlusInside className="mr-4 pt-1" />
                  {t('home.location_title')}
                </p>
                <p className="text-sm sm:text-xl text-[#7B5B4C] animate-on-scroll pl-10">
                  {t('home.location_description')}
                </p>
              </div>
              {/* Trusted */}
              <div className="mb-8">
                <p className="text-[#7B5B4C] uppercase text-md sm:text-2xl font-bold flex animate-on-scroll">
                  <BookCheck className="mr-4 pt-1" /> {t('home.trusted_title')}
                </p>
                <p className="text-md sm:text-xl text-[#7B5B4C] animate-on-scroll pl-10">
                  {t('home.trusted_description')}
                </p>
              </div>
              {/* All in One */}
              <div className="mb-8">
                <p className="text-[#7B5B4C] uppercase text-md sm:text-2xl font-bold flex animate-on-scroll">
                  <ArrowDownAZ className="mr-4 pt-1" /> {t('home.all_in_one_title')}
                </p>
                <p className="text-md sm:text-xl text-[#7B5B4C] animate-on-scroll pl-10">
                  {t('home.all_in_one_description')}
                </p>
              </div>
              {/* Guarantee */}
              <div>
                <p className="text-[#7B5B4C] uppercase text-md sm:text-2xl font-bold flex animate-on-scroll">
                  <Cog className="mr-4 pt-1" /> {t('home.guarantee_title')}
                </p>
                <p className="text-md sm:text-xl text-[#7B5B4C] animate-on-scroll pl-10">
                  {t('home.guarantee_description')}
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="w-full sm:w-1/2 flex flex-col justify-start mb-8 sm:mb-0">
            <div className="flex flex-col space-y-6 w-full">
              <div className="w-full border border-gray-200 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <MapPin size={32} className="text-[#7B5B4C] mb-4" />
                <p className="font-semibold text-lg">{t('home.map_stat')}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1 border border-gray-200 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                  <Building2 size={32} className="text-[#7B5B4C] mb-4" />
                  <p className="font-semibold text-lg">{t('home.building_stat')}</p>
                  <a href="/partner#partnerform" className="text-[#7B5B4C] underline mt-2 cursor-pointer">
                    {t('home.building_cta')}
                  </a>
                </div>
                <div className="flex-1 border border-gray-200 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                  <Users size={32} className="text-[#7B5B4C] mb-4" />
                  <p className="font-semibold text-lg">{t('home.users_stat')}</p>
                  <a href="contact#contactus" className="text-[#7B5B4C] underline mt-2 cursor-pointer">
                    {t('home.users_cta')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-gray-100 py-10">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 flex flex-col justify-between mb-8 sm:mb-0 py-16 px-4 sm:px-12">
            <div className="mb-8 self-center animate-on-scroll">
              <Link href="/">
                <img src="/stayspace.png" alt="StaySpace Logo" className="w-[150px] h-auto md:w-[200px] md:h-10" />
              </Link>
            </div>
            <div className="animate-on-scroll">
              <img src="/bed1.jpg" alt="Bed Image" className="w-full h-auto rounded-sm" />
            </div>
          </div>
          <div className="w-full sm:w-1/2 flex flex-col justify-between lg:py-16 px-4 sm:px-12">
            <div className="h-full flex flex-col justify-between">
              <div className="mb-4">
                <p className="text-[#7B5B4C] uppercase text-md font-bold flex flex-row animate-on-scroll">
                  <MessageCircleQuestion className="mr-4 pt-1" />
                  {t('home.why_choose_title')}
                </p>
              </div>
              <div>
                <p className="text-[#7B5B4C] text-sm md:text-lg font-semibold flex flex-row animate-on-scroll">
                  <RedoDot className="mr-4" /> {t('home.why_choose_points_1')}
                </p>
              </div>
              <div>
                <p className="text-[#7B5B4C] text-sm md:text-lg font-semibold flex flex-row animate-on-scroll">
                  <RedoDot className="mr-4" /> {t('home.why_choose_points_2')}
                </p>
              </div>
              <div>
                <p className="text-[#7B5B4C] text-sm md:text-lg font-semibold flex flex-row animate-on-scroll">
                  <RedoDot className="mr-4" /> {t('home.why_choose_points_3')}
                </p>
              </div>
              <div>
                <p className="text-[#7B5B4C] text-sm md:text-lg font-semibold flex flex-row animate-on-scroll">
                  <RedoDot className="mr-4" /> {t('home.why_choose_points_4')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
