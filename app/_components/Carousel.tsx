"use client";

import { useState } from "react";
import useRenderQueue from "../_hooks/useRenderQueue";
import arrow from "@assets/icons/arrow.png";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function Carousel({ images }: { images: StaticImport[] }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [left, setLeft] = useState(images[0]);
  const [right, setRight] = useState(images[1]);
  const [animate, setAnimate] = useState(0);

  const setRenderQueue = useRenderQueue();

  const move = (step: number) => {
    moveTo((currentPage + step + images.length) % images.length, step);
  };

  const moveTo = (index: number, dir?: number) => {
    if (index === currentPage) {
      return;
    }
    if (dir == undefined) {
      dir = index - currentPage;
    }
    transition(currentPage, index, dir);
  };

  const transition = async (from: number, to: number, move: number) => {
    move = Math.sign(move);
    if (move === 1) {
      setLeft(images[from]);
      setRight(images[to]);
    }
    if (move === animate) {
      setAnimate(0);
    }

    setCurrentPage(to);

    //trigger after next render
    setRenderQueue([
      () => {
        if (move === -1) {
          setLeft(images[to]);
          setRight(images[from]);
        }
        setAnimate(move);
      },
    ]);
  };

  return (
    <>
      <div className="relative flex items-center aspect-video overflow-hidden rounded">
        <div
          className={`
          absolute flex w-[200%] h-full
          ${
            animate === 0
              ? ""
              : animate === 1
                ? "animate-[swipe-right_300ms_ease-in-out_1_forwards]"
                : "animate-[swipe-left_300ms_ease-in-out_1_forwards]"
          }
        `}
        >
          <Image alt="slide" className="object-cover w-1/2 h-full" src={left} />
          <Image
            alt="slide"
            className="object-cover w-1/2 h-full"
            src={right}
          />
        </div>
        <button
          className="absolute left-2 -scale-x-100 w-8 p-2 rounded-full bg-gray-500/50 hover:bg-gray-400/50 transition-all bg-opacity-50 hover:bg-opacity-50"
          onClick={() => move(-1)}
        >
          <Image alt="left" src={arrow} />
        </button>
        <button
          className="absolute right-2 w-8 p-2 rounded-full bg-gray-500/50 hover:bg-gray-400/50 transition-all bg-opacity-50 hover:bg-opacity-50"
          onClick={() => move(1)}
        >
          <Image alt="right" src={arrow} />
        </button>
        <div className="absolute w-full bottom-0 p-2 flex justify-center gap-2">
          {images.map((e, i) => (
            <div
              className={`cursor-pointer rounded-full h-4 bg-gray-500/50 transition-all hover:bg-gray-400/50 ${currentPage === i ? "w-12" : "w-4"}`}
              key={i}
              onClick={() => moveTo(i)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
