import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselCompany() {
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
    <Carousel
      opts={{ align: "start" }}
      className="w-full max-w-5xl mx-auto relative px-8"
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 md:basis-1/3 flex justify-center" // Adjusted basis here
          >
            <div className="px-0">
              {" "}
              {/* Removed the padding */}
              <Card className="rounded-none border-none shadow-none">
                <CardContent className="flex items-center justify-center p-2">
                  <img
                    src={src}
                    alt={`Logo ${index + 1}`}
                    className="h-24 w-[180px] object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Previous Button */}
      <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 text-white bg-black rounded-full opacity-80 hover:opacity-100 transition-all" />
      {/* Next Button */}
      <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 text-white bg-black rounded-full opacity-80 hover:opacity-100 transition-all" />
    </Carousel>
  );
}
