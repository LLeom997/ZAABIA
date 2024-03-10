"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Courousal() {
  return (
    <Carousel className="container h-50 w-full flex flex-col mt-2">
      <CarouselContent className="flex">
        <CarouselItem className="flex items-start justify-center overflow-hidden h-full">
          <img
            src="/image/bra2.jpg"
            style={{ width: "100%", objectFit: "cover", height: "50vh" }}
          />
        </CarouselItem>
        <CarouselItem className="flex items-start justify-center overflow-hidden h-full">
          <img
            src="/image/bra1.jpg"
            style={{ width: "100%", objectFit: "cover", height: "50vh" }}
          />
        </CarouselItem>
        <CarouselItem className="flex items-start justify-center overflow-hidden h-full">
          <img
            src="/image/Ruta.svg"
            style={{ width: "100%", objectFit: "contain", height: "50vh" }}
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Courousal;
