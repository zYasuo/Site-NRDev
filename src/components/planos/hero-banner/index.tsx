/* eslint-disable @next/next/no-img-element */
"use client";
import { ScrollReveal } from "@/components/effects/scrollReveal";
import { TextAnimate } from "@/components/effects/textAnimate";

export function HeroBannerPlanos() {
  return (
    <div className=" md:h-screen lg:h-screen h-full">
      <div className="py-16 lg:py-32 container relative flex flex-col h-full justify-center">
        <ScrollReveal className="space-y-4">
          <div className="flex items-center justify-center">
            <TextAnimate
              text="Escolha o Plano ideal"
              className="text-3xl md:text-4xl lg:text-7xl font-regular font-semibold font-sans text-zinc-800 dark:text-foreground tracking-[-0.04em]"
              type="fadeIn"
            />
          </div>
          <div className=" relative max-w-5xl mx-auto">
            <ScrollReveal>
              <img
                src="https://placehold.co/1024x480"
                className="rounded-xl"
                alt="Image Description"
              />
            </ScrollReveal>
            <div className="absolute md:block hidden bottom-12 -start-20 -z-[1] w-48 h-48 bg-gradient-to-b from-primary-foreground via-primary-foreground to-background p-px rounded-lg">
              <div className="w-48 h-48 rounded-lg bg-background/10" />
            </div>
            <div className="absolute md:block hidden -top-12 -end-20 -z-[1] w-48 h-48 bg-gradient-to-t from-primary-foreground via-primary-foreground to-background p-px rounded-full">
              <div className="w-48 h-48 rounded-full bg-background/10" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
