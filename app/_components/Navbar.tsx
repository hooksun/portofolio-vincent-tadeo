"use client";

import NavbarButton from "./NavbarButton";
import { useRef } from "react";
// import { useRouter } from "next/navigation";
import Image from "next/image";
import borderBottom from "@assets/pixelart/header-bottom.png";

export default function Navbar() {
  //   const router = useRouter();
  const navbarRef = useRef<HTMLDivElement>(null);

  const clickAndNavigate = (path: string) => {
    navbarRef.current?.scrollIntoView();
    // router.push(path);
  };

  return (
    <>
      <div ref={navbarRef}></div>
      <div className="sticky -top-px z-50">
        <div className="flex bg-secondary -mt-px items-center">
          <NavbarButton
            text="about me"
            path="/"
            onClick={() => clickAndNavigate("/")}
          />
          <NavbarButton
            text="skills"
            path="/skills"
            onClick={() => clickAndNavigate("/skills")}
          />
          <NavbarButton
            text="experience"
            path="/experience"
            onClick={() => clickAndNavigate("/experience")}
          />
        </div>
        <Image
          className="w-full disable-anti-aliasing min-w-xl"
          src={borderBottom}
          inert={true}
          alt=""
        />
      </div>
    </>
  );
}
