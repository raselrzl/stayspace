"use client";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react"; // Import useState hook
import { useTranslations } from 'next-intl'; // Import useTranslations

export function PopLegalInfo() {
  const [isPopoverVisible, setPopoverVisible] = useState(true); // State to control visibility
  const t = useTranslations(); // Use translations

  const handleClose = () => {
    setPopoverVisible(false); // Close the popover when the close button is clicked
  };

  return (
    <div>
      {/* Trigger */}
      <Popover open={isPopoverVisible} onOpenChange={setPopoverVisible}>
        <PopoverTrigger asChild>
          <p className="underline cursor-pointer">{t('legal_info.title')}</p>
        </PopoverTrigger>

        {/* Popover content */}
        <PopoverContent className="w-[300px] h-[400px] bg-[#f8f3f2] text-[#7B5B4C] text-justify p-4 relative">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-[#7B5B4C] cursor-pointer text-xl p-1"
          >
            X
          </button>

          <div className="w-full text-xs">
            <h2 className="text-xl font-bold mb-4 text-center">{t('legal_info.title')}</h2>

            {/* Company Name */}
            <div className="mb-4">
              <h3 className="font-semibold">{t('legal_info.company_name_title')}</h3>
              <p>{t('legal_info.company_name')}</p>
            </div>

            {/* Registered Office */}
            <div className="mb-4">
              <h3 className="font-semibold">{t('legal_info.registered_office_title')}</h3>
              <p>{t('legal_info.registered_office')}</p>
            </div>

            {/* Contact Details */}
            <div className="mb-4">
              <h3 className="font-semibold">{t('legal_info.contact_title')}</h3>
              <p>
                {t('legal_info.email_label')}:{" "}
                <a
                  href={`mailto:${t('legal_info.email_value')}`}
                  className="text-gray-600 underline"
                >
                  {t('legal_info.email_value')}
                </a>
              </p>
              <p>
                {t('legal_info.phone_label')}:{" "}
                <a href={`tel:${t('legal_info.phone_value')}`} className="text-gray-600 underline">
                  {t('legal_info.phone_value')}
                </a>
              </p>
            </div>

            {/* Organization Number */}
            <div className="mb-4">
              <h3 className="font-semibold">{t('legal_info.org_number_title')}</h3>
              <p>{t('legal_info.org_number_value')}</p>
            </div>

            {/* VAT Registration Number */}
            <div className="mb-4">
              <h3 className="font-semibold">{t('legal_info.vat_number_title')}</h3>
              <p>{t('legal_info.vat_number_value')}</p>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
