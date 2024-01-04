"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/core/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import BannerContent from "./BannerContent";

const bannersImages = [
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
      className="bg-transparent"
    >
      <CarouselPrevious className="absolute left-4 top-1/2 z-10 -translate-y-1/2" />
      <CarouselNext className="absolute right-4 top-1/2 z-10 -translate-y-1/2" />
      <CarouselContent className="ml-2">
        {bannersImages.map(({ controlClass, url }) => (
          <BannerContent url={`/banners/${url}`} key={url} />
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Banner;
