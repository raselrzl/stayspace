"use client";
import { useState } from "react"; // Import useState hook
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useTranslations } from "next-intl"; // Import useTranslations hook for multi-language support
import Link from "next/link";

export function PopPrivacyPolicy() {
  const [isPopoverVisible, setPopoverVisible] = useState(true); // State to control visibility
  const t = useTranslations(); // Access translations

  const handleClose = () => {
    setPopoverVisible(false); // Close the popover when the cross button is clicked
  };

  return (
    <div>
      <Popover open={isPopoverVisible} onOpenChange={setPopoverVisible}>
        <PopoverTrigger asChild>
          <p className="underline cursor-pointer">{t("privacy_policy.title")}</p>
        </PopoverTrigger>

        <PopoverContent className="w-[300px] h-[500px] bg-white overflow-scroll text-justify relative">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-black text-xl cursor-pointer p-1"
          >
            X
          </button>

          <div className="w-full text-xs">
            <h2 className="text-xl font-bold mb-4 text-center">
              {t("privacy_policy.title")}
            </h2>

            <p className="mb-4">{t("privacy_policy.intro")}</p>

            <h3 className="font-semibold mt-6">{t("privacy_policy.section_1.title")}</h3>
            <p className="mb-4">{t("privacy_policy.section_1.content")}</p>

            <h3 className="font-semibold">{t("privacy_policy.section_2.title")}</h3>
            <ul className="list-inside list-disc mb-4">
              <li>{t("privacy_policy.section_2.point_1")}</li>
              <li>{t("privacy_policy.section_2.point_2")}</li>
              <li>{t("privacy_policy.section_2.point_3")}</li>
              <li>{t("privacy_policy.section_2.point_4")}</li>
            </ul>

            <h3 className="font-semibold">{t("privacy_policy.section_3.title")}</h3>
            <p className="mb-4">{t("privacy_policy.section_3.content")}</p>

            <h3 className="font-semibold">{t("privacy_policy.section_4.title")}</h3>
            <p className="mb-4">{t("privacy_policy.section_4.content")}</p>

            <h3 className="font-semibold">{t("privacy_policy.section_5.title")}</h3>
            <p className="mb-4">{t("privacy_policy.section_5.content")}</p>

            <h3 className="font-semibold">{t("privacy_policy.section_6.title")}</h3>
            <p className="mb-4">{t("privacy_policy.section_6.content")}</p>

            <h3 className="font-semibold">{t("privacy_policy.section_7.title")}</h3>
            <p className="mb-4">{t("privacy_policy.section_7.content")}</p>

            <h3 className="font-semibold">{t("privacy_policy.contact.title")}</h3>
            <p>
              {t("privacy_policy.contact.content")}
              <a
                href={`mailto:${t("privacy_policy.contact.email")}`}
                className="text-amber-500 underline"
              >
                {t("privacy_policy.contact.email")}
              </a>
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
