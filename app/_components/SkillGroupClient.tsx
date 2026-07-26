"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode, useState } from "react";
import SkillImage from "./SkillImage";

export default function SkillGroupClient({
  skills,
}: {
  skills: {
    desc: string;
    image: StaticImport;
  }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`w-full flex flex-row-reverse justify-center group transition-all ${open ? "gap-15" : "gap-5 hover:gap-15"}`}
      onClick={() => setOpen((o) => !o)}
    >
      {skills.toReversed().map((skill, i) => (
        <div key={i} className="h-30 aspect-1/4 relative flex justify-center">
          <div className="absolute h-full aspect-1/2 grid grid-rows-[2fr_1fr] place-items-center">
            <SkillImage image={skill.image} alt={skill.desc} />
            <div className="relative w-full h-full flex justify-center">
              <div
                className={`absolute text-nowrap ${open ? "text-white" : "gap-5 text-transparent group-hover:text-white"} text-center transition`}
              >
                {skill.desc}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
