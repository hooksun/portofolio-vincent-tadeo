"use client";

import style from "./PixelartHeader.module.css";

import background from "@assets/pixelart/back.png";
import foreground from "@assets/pixelart/header-foreground-start.png";
import path from "@assets/pixelart/header-foreground-middle.png";
import midground from "@assets/pixelart/middle.png";
import foxIdle from "@assets/pixelart/fox-idle.gif";
import foxRun from "@assets/pixelart/fox-run.gif";
import Image from "next/image";
import { useState } from "react";

export default function PixelartHeader() {
  const [paused, setPaused] = useState(true);

  return (
    <div className="w-full min-w-xl aspect-24/10 relative contain-paint flex preserve-3d items-start -z-10">
      <Image
        alt=""
        className="w-full disable-anti-aliasing transform-[translateZ(-10px)_scale(2)] origin-top-left -z-10 absolute"
        src={background}
        inert={true}
      />
      <div
        className={
          `w-[1000%] left-[-35%] flex transform-[translateZ(-5px)_scale(1.5)] origin-top-left -z-5 absolute
          ${style["midground-animation"]} ${paused ? style.pause : ""}`
        }
        inert={true}
      >
        <Image
          alt=""
          className="flex-1 disable-anti-aliasing"
          src={midground}
        />
        <Image
          alt=""
          className="flex-1 disable-anti-aliasing"
          src={midground}
        />
      </div>
      <div
        className={
          `absolute bottom-0 w-[600%] flex left-0 items-end ${style["foreground-animation"]} ${paused ? style.pause : ""}`
        }
        inert={true}
      >
        <Image
          alt=""
          className="disable-anti-aliasing w-1/6"
          src={foreground}
        />
        <Image alt="" className="disable-anti-aliasing w-4/6" src={path} />
        <Image
          alt=""
          className="disable-anti-aliasing w-1/6"
          src={foreground}
        />
      </div>
      <Image
        alt=""
        className={"w-1/12 disable-anti-aliasing absolute bottom-[10%] left-[25vw] cursor-pointer " + style["fox"] }
        src={paused ? foxIdle : foxRun}
        onClick={() => setPaused((i) => !i)}
      />
    </div>
  );
}
