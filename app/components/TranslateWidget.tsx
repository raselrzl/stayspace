"use client";

import { useState } from "react";
import setLanguageValue from "../actions/set-language-action";
import { ChevronDown } from "lucide-react";

const language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
    setLanguageValue(e.target.value);
  };

  return (
    <div className="container mx-auto flex items-center">
      <div className="relative inline-block ml-auto">
        <select
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className="text-sx cursor-pointer appearance-none rounded-md border border-gray-500 py-1 px-8 outline-none sm:py-2 sm:text-base"
        >
          <option value="en">English</option>
          <option value="sv">Swedish</option>
        </select>
        <ChevronDown
          size={18}
          className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-600"
        />
      </div>
    </div>
  );
};

export default language;
