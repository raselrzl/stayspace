"use client";
import * as React from "react";
import { useTranslations } from "next-intl"; // Import useTranslations hook for multi-language support
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselCompany() {
  const t = useTranslations(); // Access translations

  const images = [
    "/partner/peab.jpg",
    "/partner/eks.webp",
    "/partner/peab.jpg",
    "/partner/hyres.jpg",
    "/partner/peab.jpg",
    "/partner/hyres.jpg",
    "/partner/peab.jpg",
  ];

  return (
    <div className="max-w-screen-xl mx-auto text-center py-16 border-t-2 border-t-red-50 px-4 sm:px-8">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-[#7B5B4C] mb-4">
        {t("carousel_company.heading")}
      </h2>

      {/* Description */}
      <p className="text-md text-[#7B5B4C] mb-10 max-w-3xl mx-auto">
        {t("carousel_company.description")}
      </p>

      {/* Carousel */}
      <Carousel opts={{ align: "start" }} className="w-full max-w-6xl mx-auto relative px-6">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 flex justify-center"
            >
              <Card className="rounded-none border-none shadow-none bg-transparent">
                <CardContent className="flex items-center justify-center p-2">
                  <img
                    src={src}
                    alt={`Logo ${index + 1}`}
                    className="h-24 w-[160px] object-contain"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controls */}
        <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 text-white bg-black rounded-full opacity-80 hover:opacity-100 transition-all" />
        <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 text-white bg-black rounded-full opacity-80 hover:opacity-100 transition-all" />
      </Carousel>
    </div>
  );
}
