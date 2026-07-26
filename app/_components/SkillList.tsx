import ladder from "@assets/pixelart/ladder.png";
import foxClimb from "@assets/pixelart/fox-climb.gif";
import Image from "next/image";
import SkillGroup from "./SkillGroup";

export default function SkillList() {
  return (
    <div className="relative w-full py-8 grid grid-cols-[1fr_min(80%,80ch)_1fr]">
      <div className="w-full col-start-2 flex flex-col items-center gap-6">
        <div className="text-lg font-bold">Frontend</div>
        <SkillGroup skills={[
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
          // {
          //   fileName: "mui.png",
          //   desc: "Material UI",
          // },
          // {
          //   fileName: "flutter.webp",
          //   desc: "Flutter",
          // },
        ]}/>

        <div className="text-lg font-bold">Backend</div>
        <SkillGroup skills={[
          {
            fileName: "dotnet.webp",
            desc: ".Net",
          },
          {
            fileName: "springboot.png",
            desc: "Spring Boot",
          },
        ]}/>

        <div className="text-lg font-bold">Database</div>
        <SkillGroup skills={[
          {
            fileName: "sql.webp",
            desc: "SQL Server",
          },
          {
            fileName: "postgres.png",
            desc: "Postgres",
          },
          {
            fileName: "supabase.png",
            desc: "Supabase",
          },
        ]}/>

        <div className="text-lg font-bold">Game Development</div>
        <SkillGroup skills={[
          {
            fileName: "unity.png",
            desc: "Unity",
          },
          {
            fileName: "godot.svg",
            desc: "Godot",
          },
        ]}/>
      </div>
      <div className="sticky h-[80vh] w-full hidden justify-center top-[10vh] my-[10vh] md:flex">
        <Image
          alt=""
          className="h-full w-auto disable-anti-aliasing"
          src={ladder}
          inert
        />
        <div className="absolute h-full climbing-fox">
          <Image
            alt=""
            className="h-1/5 w-auto disable-anti-aliasing"
            src={foxClimb}
            inert
          />
        </div>
      </div>
    </div>
  );
}
