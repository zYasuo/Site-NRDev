"use client";
import { Card } from "@/components/ui/card";
import { CanaisAtendimento } from "@/components/home/cards/assine-ja/constants";
import { TextAnimate } from "@/components/effects/textAnimate";
import { ScrollReveal } from "@/components/effects/scrollReveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";
import { Badge } from "@/components/ui/badge";

export const SectionCardCanaisAtendimento = () => {
  return (
    <div className="dark:bg-primary/15 bg-muted md:h-screen lg:h-screen h-full relative">
      <ScrollReveal>
        <div className="z-10">
          <GridPattern
               squares={[
                [4, 4],
                [5, 1],
                [8, 2],
                [5, 3],
                [5, 5],
                [10, 10],
                [12, 15],
                [15, 10],
                [9, 14], 
                [14, 9], 
                [11, 16],
                [16, 11], 
              ]}
            className={cn(
              "md:[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] [mask-image:radial-gradient(250px_circle_at_center,white,transparent)]"
            )}
          />
        </div>
      </ScrollReveal>
      <div className="py-16 lg:py-32 container relative flex flex-col h-full justify-center ">
        <ScrollReveal className="space-y-4">
          <Badge className="text-white">
            Agora é só escolher!
          </Badge>
          <div>
            <TextAnimate
              text="Assine Já!"
              className="text-3xl md:text-4xl lg:text-7xl font-regular font-semibold font-sans text-primary dark:text-foreground tracking-[-0.04em]"
              type="popIn"
            />
          </div>
          <div>
            <TextAnimate
              text="Agora ficou fácil contratar nossos serviços"
              delay={2}
              className="text-muted-foreground text-sm md:text-md lg:text-3xl font-regular font-sans"
              type="fadeInUp"
            />
          </div>
        </ScrollReveal>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-2 mt-4 z-20">
          {CanaisAtendimento().map((item, index) => (
            <ScrollReveal key={index} className="space-y-4">
              <Card className="p-6 space-y-4 transition-all duration-300 hover:scale-105 cursor-pointer hover:border-primary/50">
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="w-20 h-20  flex items-center justify-center border-primary/10 rounded-xl"
                >
                  <item.icon className="text-primary w-8 h-8" />
                </Button>
                <div className="space-y-4">
                  <h4 className="text-md md:text-lxl lg:text-3xl font-semibold font-regular font-sans">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm md:text-md lg:text-lxl font-regular font-sans">
                    {item.description}
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};
