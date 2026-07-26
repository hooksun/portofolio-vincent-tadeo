import Image from "next/image";
import borderBottom from "@assets/pixelart/header-bottom.png";
import TechStack from "./TechStack";

export default function Footer() {
  return (
    <>
      <Image
        alt=""
        className="w-full disable-anti-aliasing min-w-xl -scale-y-100"
        src={borderBottom}
        inert={true}
      />
      <div className="bottom-0 min-h-32 bg-secondary w-full py-4 px-8 ring ring-secondary">
        Source code:{" "}
        <a
          href="https://github.com/hooksun/portofolio-vincent-tadeo"
          target="_blank"
        >
          https://github.com/hooksun/portofolio-vincent-tadeo
        </a>
        <br />
        Made With: <TechStack techStack={[
          {
            fileName: "react.svg",
            desc: "React",
          },
          {
            fileName: "nextjs.webp",
            desc: "Next.js",
          },
          {
            fileName: "typescript.png",
            desc: "Typescript",
          },
          {
            fileName: "tailwind.png",
            desc: "Tailwind",
          },
        ]}/>
        <br />
        Credits:
        <br />
        Pixelart assets:{" "}
        <a
          href="https://assetstore.unity.com/packages/2d/characters/sunny-land-103349"
          target="_blank"
        >
          https://assetstore.unity.com/packages/2d/characters/sunny-land-103349
        </a>
      </div>
    </>
  );
}
