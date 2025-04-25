import { Facebook, Linkedin, Mail } from 'lucide-react';
import { PopPrivacyPolicy } from './PopPrivacy';
import { PopLegalInfo } from './PopLegalInfo';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-red-950 text-white py-8">
      <div className="container mx-auto px-6 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* First Div: Links */}
          <div className="flex flex-col space-y-4 mt-12">
            <PopLegalInfo />
            <PopPrivacyPolicy />
            <a href="/contact" className="underline hover:text-gray-400">{t('footer.footer_contact')}</a>
            <a href="/partner" className="underline hover:text-gray-400">{t('footer.footer_partner')}</a>
          </div>

          {/* Middle Div: Company Information */}
          <div className="flex flex-col items-center space-y-4 md:mt-16">
            <div className="flex flex-col items-center">
              <Link href="/">
                <img
                  src="/stayspace.png"
                  alt="Company Logo"
                  className="w-[150px] h-auto object-contain"
                />
              </Link>
            </div>
            <div className="text-center">
              <p>{t('footer.footer_operated_by')} <br />{t('footer.footer_company_name')}</p>
              <p>{t('footer.footer_org_no')}</p>
            </div>
          </div>

          {/* Third Div: Social Media Icons */}
          <div className="flex justify-center md:justify-end space-x-6 items-center md:items-end text-white">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="">
              <Facebook className="w-6 h-6 cursor-pointer text-white hover:text-[#7B5B4C]" />
            </a>
            <a href="https://www.linkedin.com/in/stay-space-034978358/" target="_blank" rel="noopener noreferrer" className="">
              <Linkedin className="w-6 h-6 cursor-pointer text-white hover:text-[#7B5B4C]" />
            </a>
            <a href="mailto:kontakt@stayspace.se" className="">
              <Mail className="w-6 h-6 cursor-pointer text-white hover:text-[#7B5B4C]" />
            </a>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="text-xs text-center mt-8 border-t-1">
          <p>{t('footer.footer_rights_reserved')}</p>
        </div>
      </div>
    </footer>
  );
}
