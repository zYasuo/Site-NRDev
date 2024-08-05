/* eslint-disable */
"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  BarChart,
  HardHat,
  Globe,
  HeartHandshake,
  Rss,
  Shield,
} from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { ScrollReveal } from "@/components/effects/scrollReveal";

const tiles = [
  {
    icon: <HeartHandshake className="size-full text-primary" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full  opacity-70 blur-[20px]"></div>
    ),
  },
  {
    icon: <Globe className="size-full text-primary" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full  opacity-70 blur-[20px]"></div>
    ),
  },
  {
    icon: <HardHat className="size-full text-primary" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px]"></div>
    ),
  },
  {
    icon: <Shield className="size-full text-primary" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full  opacity-70 blur-[20px]"></div>
    ),
  },
  {
    icon: <Rss className="size-full text-primary" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full  opacity-70 blur-[20px]"></div>
    ),
  },
  {
    icon: <BarChart className="size-full text-primary" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full  opacity-70 blur-[20px]"></div>
    ),
  },
];

function shuffleArray(array: any[]) {
  let currentIndex = array.length;
  let randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

function Card(card: { icon: JSX.Element; bg: JSX.Element }) {
  const id = useId();
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { delay: Math.random() * 2, ease: "easeOut", duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      key={id}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className={cn(
        "relative size-16 cursor-pointer overflow-hidden rounded-2xl  p-4",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      {card.icon}
      {card.bg}
    </motion.div>
  );
}

export default function OqueNosFortalece() {
  const [randomTiles1, setRandomTiles1] = useState<typeof tiles>([]);
  const [randomTiles2, setRandomTiles2] = useState<typeof tiles>([]);
  const [randomTiles3, setRandomTiles3] = useState<typeof tiles>([]);
  const [randomTiles4, setRandomTiles4] = useState<typeof tiles>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensures this runs client-side
      setRandomTiles1(shuffleArray([...tiles]));
      setRandomTiles2(shuffleArray([...tiles]));
      setRandomTiles3(shuffleArray([...tiles]));
      setRandomTiles4(shuffleArray([...tiles]));
    }
  }, []);

  return (
    <section id="cta" className="md:h-screen lg:h-screen h-full bg-gradient-to-t from-background via-background to-muted dark:from-background dark:via-background dark:to-primary/15">
      <ScrollReveal>
      <div className="pt-16 lg:pt-32">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee
              reverse
              className="-delay-[200ms] [--duration:10s]"
              repeat={5}
            >
              {randomTiles1.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            <Marquee reverse className="[--duration:25s]" repeat={5}>
              {randomTiles2.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            <Marquee
              reverse
              className="-delay-[200ms] [--duration:20s]"
              repeat={5}
            >
              {randomTiles1.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            <Marquee reverse className="[--duration:30s]" repeat={5}>
              {randomTiles2.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            <Marquee
              reverse
              className="-delay-[200ms] [--duration:20s]"
              repeat={5}
            >
              {randomTiles3.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            <Marquee reverse className="[--duration:30s]" repeat={5}>
              {randomTiles4.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            <div className="absolute z-10">
              <div className="mx-auto  flex items-center rounded-[2rem] border bg-white/10 p-3 shadow-2xl backdrop-blur-md lg:size-40 dark:bg-black/10">
                <img src="/logos/logo-azul.png" alt="Logo NR Conexões" />
              </div>
              <div className=" z-10 mt-4 flex flex-col items-center text-center space-y-2">
                <h1 className="text-3xl md:text-4xl lg:text-6xl tracking-tighter text-center font-regular font-semibold font-sans">
                  A velocidade da fibra.
                </h1>
                <h1 className="text-3xl md:text-4xl lg:text-6xl tracking-tighter text-center font-regular font-semibold font-sans">
                 A força da conexão.
                </h1>
                <p className="text-muted-foreground text-sm md:text-md lg:text-2xl leading-relaxed tracking-tight text-center">
                  Com 16 anos de história, a NR Conexões que Fortalecem se
                  orgulha de seu crescimento e da capacidade de manter conexões
                  fortes e duradouras.
                </p>
              </div>
              <div className="bg-background dark:bg-background absolute inset-0  -z-10 rounded-full opacity-40 blur-xl" />
            </div>
            <div className="to-background dark:to-background absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-70%" />
          </div>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
