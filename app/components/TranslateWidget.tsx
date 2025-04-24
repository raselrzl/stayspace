"use client";

import { useState } from "react";
import setLanguageValue from "../actions/set-language-action";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator"

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("sv");

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
    setLanguageValue(value);
  };

  const flagSrc = selectedLanguage === "en" ? "/english.png" : "/swedish.png";

  return (
    <div className="container mx-auto flex items-center">
      <div className="ml-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2 px-2 border-none ">
              <Image src={flagSrc} alt="flag" width={20} height={15} />
              <ChevronDown size={14} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-gray-600 border-none">
            <DropdownMenuItem onClick={() => handleLanguageChange("en")} className="cursor-pointer gap-2 text-white">
              <Image src="/english.png" alt="English" width={20} height={15} />
              English
            </DropdownMenuItem>
            <Separator className="bg-white" />
            <DropdownMenuItem onClick={() => handleLanguageChange("sv")} className="cursor-pointer gap-2 text-white">
              <Image src="/swedish.png" alt="Swedish" width={20} height={15} />
              Swedish
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default LanguageSelector;
