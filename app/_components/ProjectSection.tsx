import TechStack from "./TechStack";

export default function ProjectSection(props: {
  carousel: React.ReactNode;
  title: string;
  time?: string;
  techStack?: {
    fileName: string,
    desc: string
  }[];
  desc: React.ReactNode;
  reverse?: boolean;
  smallCarousel?: boolean;
}) {
  return (
    <div className="w-full flex py-12 justify-center">
      <div
        className={
          "flex flex-wrap items-start gap-12 w-5/6 max-w-280" +
          (props.reverse ? " flex-row-reverse" : "")
        }
      >
        <div className={`${props.smallCarousel ? "flex-1" : "flex-2"} min-w-[min(20rem,100%)]`}>{props.carousel}</div>
        <div className="flex-2 min-w-[min(20rem,100%)] text-justify">
          <div className="font-bold text-xl *:align-middle *:mr-4 text-left">
            <span className="w-fit">{props.title}</span>
            <span className="text-sm text-gray-400">{props.time}</span>
            {props?.techStack && <TechStack techStack={props.techStack}/>}
          </div>
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
}
