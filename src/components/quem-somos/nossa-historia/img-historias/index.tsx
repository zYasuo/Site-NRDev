"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { ScrollReveal } from "@/components/effects/scrollReveal";

export const DragCards = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden dark:bg-primary/15 bg-muted">
      <ScrollReveal>
        <h2 className="relative z-0 text-[10vw] font-bold  md:text-[100px] text-center font-sans font-regular">
          Conexões que Fortalecem<span className="text-primary">.</span>
        </h2>
        <Cards />
      </ScrollReveal>
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="/imgs/conheca-a-nr/fotos-filiais/Ajapi.jpg"
        alt="Filial Ajapi - NR Conexões"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-36 md:w-56"
      />
      <Card
        containerRef={containerRef}
        src="/imgs/conheca-a-nr/fotos-filiais/Leme.jpg"
        alt="Filial Leme - NR Conexões"
        rotate="12deg"
        top="45%"
        left="60%"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src="/imgs/conheca-a-nr/fotos-filiais/Santa Gertrudes.jpg"
        alt="Filial Santa Gertrudes - NR Conexões"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="/imgs/conheca-a-nr/fotos-filiais/Mogi Guaçu.png"
        alt="Filial Mogi Guaçu - NR Conexões"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-48 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src="/imgs/conheca-a-nr/fotos-filiais/Limeira do Oeste.jpg"
        alt="Filial Limeira do Oeste - NR Conexões"
        rotate="18deg"
        top="20%"
        left="65%"
        className="w-40 md:w-64"
      />
      <Card
        containerRef={containerRef}
        src="/imgs/conheca-a-nr/fotos-filiais/Carneirinho.jpg"
        alt="Filial Carneirinho - NR Conexões"
        rotate="-3deg"
        top="60%"
        left="55%"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src="/imgs/conheca-a-nr/fotos-filiais/Alexandrita.jpg"
        alt="Filial Alexandrita - NR Conexões"
        rotate="18deg"
        top="10%"
        left="15%"
        className="w-40 md:w-64"
      />
      <Card
        containerRef={containerRef}
        src="/imgs/conheca-a-nr/fotos-filiais/Iturama.jpg"
        alt="Filial Iturama - NR Conexões"
        rotate="18deg"
        top="18%"
        left="45%"
        className="w-40 md:w-64"
      />
    </div>
  );
};

const Card = ({
  containerRef,
  src,
  alt,
  top,
  left,
  rotate,
  className,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className: string;
}) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
      //   dragMomentum={false}
      dragElastic={0.65}
    />
  );
};
