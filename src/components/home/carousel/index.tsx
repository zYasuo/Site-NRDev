"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  useResponsiveImageSize,
  useImageSizeStore,
} from "@/hooks/images/home/carousel/useResponsiveImage";
import React from "react";

export const CarouselArts: React.FC = () => {
  useResponsiveImageSize();
  const imageSize = useImageSizeStore((state) => state.imageSize);

  const images = [
    `/imgs/home/carousel/${imageSize}/1.svg`,
    `/imgs/home/carousel/${imageSize}/2.svg`,
    `/imgs/home/carousel/${imageSize}/3.svg`,
  ];

  return (
    <div className="bg-muted dark:bg-primary/15">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showThumbs={false}
        showStatus={false}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center"
          >
            <picture className="w-full h-full">
              <source srcSet={img} type="image/svg+xml" />
              <img
                src={img}
                alt={`Carousel Image ${index + 1}`}
                className="object-contain w-full h-full"
              />
            </picture>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
