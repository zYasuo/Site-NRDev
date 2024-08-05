"use client";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ScrollReveal } from "@/components/effects/scrollReveal";
import { TextAnimate } from "@/components/effects/textAnimate";

export const CarouselVantagensPlano = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1000);
  }, [api, current]);

  return (
    <div className="md:h-screen lg:h-screen h-full">
    <div className="py-16 lg:py-32 container relative flex flex-col h-full justify-center">
        <div className=" mx-auto">
          <ScrollReveal className="space-y-4">
            <div className="flex flex-col gap-10">
              <div className="flex justify-center items-center">
                <TextAnimate
                  text="As Melhores Vantagens"
                  className="text-3xl md:text-4xl lg:text-7xl font-regular font-semibold font-sans text-zinc-800 dark:text-foreground tracking-[-0.04em]"
                  type="fadeIn"
                />
              </div>
              <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                  {Array.from({ length: 15 }).map((_, index) => (
                    <CarouselItem
                      className="basis-1/4 lg:basis-1/6"
                      key={index}
                    >
                      <div className="flex rounded-md aspect-square bg-muted items-center justify-center p-6">
                        <span className="text-sm">Logo {index + 1}</span>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};
