"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState } from "react";

export default function PortraitCarousel(props: { images: StaticImport[] }) {
  const [selected, setSelected] = useState(-1);

  return (
    <div className="flex aspect-16/14 sm:aspect-video">
      {props.images?.map((e, i) => (
        <div
          key={i}
          onClick={() => setSelected((selected) => selected == i ? -1 : i)}
          className={
            "rounded-lg overflow-hidden transition-all duration-300 max-w-fit cursor-pointer ease-in-out not-first:pl-1 not-last:pr-1 " +
            (selected === i
              ? "flex-[5_1_0%] sm:flex-[2.5_1_0%]"
              : "flex-1 hover:flex-[1.5_1_0%]")
          }
        >
          <Image
            alt={"slide " + (i + 1)}
            src={e}
            className={"object-cover h-full transition-all duration-300 "}
          />
        </div>
      ))}
    </div>
  );
}
