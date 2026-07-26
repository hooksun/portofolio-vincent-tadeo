import FoxRunMinigame from "./FoxRunMinigame";
import ProjectSection from "./ProjectSection";
import Carousel from "./Carousel";
import PortraitCarousel from "./PortraitCarousel";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import astra from "@assets/logos/astra.png"
import Image from "next/image";

export default async function Experience() {
  const imagesFromFolder = async (folder: string, length: number) =>
    await Promise.all(Array.from({ length: length }).map(
      async (_, i) => (await import("@assets/images/" + folder + "/" + (i + 1) + ".png")).default as StaticImport
    ));

  return (
    <div>
      <ProjectSection
        carousel={<Image className="h-full" src={astra} alt="Asuransi Astra"/>}
        smallCarousel
        title="Internship at Asuransi Astra Buana"
        time="2025"
        techStack={[
          {
            fileName: "react.svg",
            desc: "React",
          },
          {
            fileName: "typescript.png",
            desc: "Typescript",
          },
          {
            fileName: "tailwind.png",
            desc: "Tailwind",
          },
          {
            fileName: "dotnet.webp",
            desc: ".Net Framework",
          },
          {
            fileName: "sql.webp",
            desc: "SQL Server",
          },
        ]}
        desc={
          <>
            During my year as an IT Development Intern at Asuransi Astra Buana in Jakarta,
            I worked across 4 full-stack projects building 5+ frontend pages, 15+ React components,
            10+ backend APIs, and 10+ database tables.
            I rotated through 3 different development teams following Agile workflows,
            which meant adapting quickly to new codebases and processes each time.
            Along the way I picked up Power BI, TypeScript, and MUI to build
            analytical dashboards and reusable components, and worked closely with the
            QC team to resolve 20+ bugs ahead of a tight production deadline.
          </>
        }
      />
      <ProjectSection
        carousel={<Carousel images={await imagesFromFolder("freelance-1", 3)} />}
        title="Database System for HOPE Counseling Center"
        time="2023"
        techStack={[
          {
            fileName: "react.svg",
            desc: "React",
          },
          {
            fileName: "supabase.png",
            desc: "Supabase",
          },
        ]}
        desc={`My first freelancing project is working for "HOPE Counseling Center". I was tasked with making a database for storing customer data and schedules for various activities. I also made a website for interfacing with the database. The website has features such as different user roles with different levels of authorization, pages for viewing, inserting, updating, and deleting data, a salary calculator, a page for displaying statistics, and many more. The database is made with supabase and the website is made with react. To respect the users' privacy, details on this project cannot be shared.`}
      />
      <ProjectSection
        reverse={true}
        carousel={<Carousel images={await imagesFromFolder("freelance-2", 4)} />}
        title="Youth Camp Personality Test"
        time="2024"
        techStack={[
          {
            fileName: "react.svg",
            desc: "React",
          },
          {
            fileName: "vite.webp",
            desc: "Vite",
          },
          {
            fileName: "supabase.png",
            desc: "Supabase",
          },
        ]}
        desc={`For my second freelancing project, I was tasked with adding automation for a personality test used in a youth camp. There are a few steps that are automated. The first step is emailing each participant a link to the form that the participants will fill out. the participants' responses are then processed and sent to experts that will analyze and create a summary. After all the responses are analyzed, a pdf report containing the processed data and summary is generated and sent back to the participant's email`}
      />
      <FoxRunMinigame />
      <ProjectSection
        carousel={<Carousel images={await imagesFromFolder("highway-core", 4)} />}
        title="Highway Core"
        time="2023"
        techStack={[
          {
            fileName: "unity.png",
            desc: "Unity",
          },
          {
            fileName: "cs.png",
            desc: "C#",
          },
        ]}
        desc={
          <>
            A First-person-shooter game where the player battle endless hordes
            of enemies in an infinite highway. This game was made in unity
            by a group of 7 people. I was the main contributor in this project in charge of game mechanics and
            features such as physics based player movement, procedurally generated environment, enemy AI, etc.
            This game was made for a game jam held by Binus Game
            Development Club, and it ended up winning third place up against
            professional game studios. Here are the{" "}
            <a href="https://github.com/hooksun/HighwayCore" target="_blank">
              source code
            </a>{" "}
            and{" "}
            <a href="https://bgdc.itch.io/highway-core" target="_blank">
              store page
            </a>
            .
          </>
        }
      />
    </div>
  );
}
