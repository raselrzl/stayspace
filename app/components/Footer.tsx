import { Facebook, Linkedin, Mail } from 'lucide-react';
import { PopPrivacyPolicy } from './PopPrivacy';
import { PopLegalInfo } from './PopLegalInfo';
import Link from 'next/link';

export default function Footer() { 
  return (
    <footer className="bg-[#f8f3f2] text-[#7B5B4C] py-8">
      <div className="container mx-auto px-6 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* First Div: Links */}
          <div className="flex flex-col space-y-4 mt-12">
            <PopLegalInfo />
            <PopPrivacyPolicy />
            <a href="/contactus" className="underline hover:text-gray-400">Contact</a>
            <a href="/partner" className="underline hover:text-gray-400">Become a partner</a>
          </div>

          {/* Middle Div: Company Information */}
          <div className="flex flex-col items-center space-y-4 md:mt-16">
            <div className="flex flex-col items-center">
              <Link href="/">
              <img
                src="/stayspace.png" // Replace with actual logo URL
                alt="Company Logo"
                className="w-[150px] h-auto object-contain"
              />
              </Link>
            {/*   <h3 className="text-xl font-bold mt-2">Company Name</h3> */}
            </div>
            <div className="text-center">
              <p>Operated By <br/>CENTRALIS GROUP INVEST AB</p>
              <p>Org No. 5591389597</p>
            </div>
          </div>

          {/* Third Div: Social Media Icons */}
          <div className="flex justify-center space-x-6 items-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 cursor-pointer text-[#7B5B4C] hover:text-[#7B5B4C]" />
            </a>
            <a href="https://www.linkedin.com/in/stay-space-034978358/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 cursor-pointer text-[#7B5B4C] hover:text-[#7B5B4C]" />
            </a>
            <a href="mailto:kontakt@stayspace.se">
              <Mail className="w-6 h-6 cursor-pointer text-[#7B5B4C] hover:text-[#7B5B4C]" />
            </a>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="text-xs text-center mt-8 border-t-1">
          <p>©Copyright. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
