"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/core/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import BannerContent from "./BannerContent";
import { cn } from "@/core/lib/utils";

const BannersImages = [
  { url: "business.webp", controlClass: "" },
  { url: "help-mom.webp", controlClass: "" },
  { url: "sp-dragon.webp", controlClass: "" },
  { url: "streamer.webp", controlClass: "" },
  { url: "sumi.webp", controlClass: "" },
  { url: "xiannoy.webp", controlClass: "" },
  { url: "zhaoni.webp", controlClass: "" },
];

const Banner = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[Autoplay({ delay: 3500 })]}
      className="bg-transparent mt-2"
    >
      <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10" />
      <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10" />
      <CarouselContent className="ml-2">
        {BannersImages.map(({ controlClass, url }) => (
          <BannerContent url={`/banners/${url}`} key={url} />
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Banner;
