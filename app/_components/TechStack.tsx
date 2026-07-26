import Image from "next/image";

export default async function TechStack({
  techStack,
}: {
  techStack: {
    fileName: string;
    desc: string;
  }[];
}) {
  return (
    <div className="inline-flex flex-row-reverse h-[1em] gap-1 align-middle origin-left transition-all [--custom-scale:0.6] scale-x-(--custom-scale) hover:[--custom-scale:1]">
      {await Promise.all(
        techStack.toReversed().map(async (tech) => (
          <div
            key={tech.fileName}
            className="aspect-square h-full group relative flex justify-center items-center origin-left transition-all scale-x-[calc(1/var(--custom-scale))]"
          >
            <div className="absolute h-full flex items-center">
              <Image
                src={(await import(`@assets/logos/${tech.fileName}`)).default}
                alt={tech.desc}
              />
            </div>
            <div className="absolute top-5/4 p-1 py-0.5 text-xs text-nowrap bg-gray-600 rounded-sm transition-all opacity-0 group-hover:opacity-100 invisible group-hover:visible">
              {tech.desc}
            </div>
          </div>
        )),
      )}
    </div>
  );
}
