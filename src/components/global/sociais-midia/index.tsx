"use client";
import { ScrollReveal } from "@/components/effects/scrollReveal";
import { ClipPathLinks } from "@/components/effects/sociaisMidia";
import { TextAnimate } from "@/components/effects/textAnimate";
import { Badge } from "@/components/ui/badge";

export const SociaisMidias = () => {
  return (
    <div className="bg-gradient-to-b from-background via-background to-muted dark:from-background dark:via-background dark:to-primary/15 md:h-screen lg:h-screen h-full">
    <div className="py-16 lg:py-32 container relative flex flex-col h-full justify-center">
        <div className="">
          <ScrollReveal className="space-y-4">
            <Badge className="dark:text-foreground">
               Fique por dentro!
            </Badge>
            <div>
              <TextAnimate
                text="Siga nossas"
                className="text-3xl md:text-4xl lg:text-7xl font-regular font-semibold font-sans text-primary dark:text-foreground tracking-[-0.04em]"
                type="popIn"
              />
            </div>
            <div>
              <TextAnimate
                text="Redes Sociais"
                className="text-3xl md:text-4xl lg:text-7xl font-regular font-semibold font-sans -mt-6 text-primary dark:text-foreground tracking-[-0.04em]"
                type="popIn"
                delay={2}
              />
            </div>
            <ClipPathLinks />
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};
