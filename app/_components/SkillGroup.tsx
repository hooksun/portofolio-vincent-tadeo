import SkillGroupClient from "./SkillGroupClient";

export default async function SkillGroup({
  skills,
}: {
  skills: {
    desc: string;
    fileName: string;
  }[];
}) {
  const images = await Promise.all(
    skills.map(async (skill) => {
      return (await import(`@assets/logos/${skill.fileName}`)).default;
    }),
  );

  return (
    <SkillGroupClient
      skills={skills.map((skill, i) => ({
        desc: skill.desc,
        image: images[i],
      }))}
    />
  );
}
