import Carousel from "./Carousel";


export default function ProjectSection(props){


    return <div className="w-full flex py-12 justify-center">
        <div className={"flex flex-wrap items-start gap-12 w-5/6 max-w-[70rem]" + (props.reverse?' flex-row-reverse':'')}>
            <div className="flex-1 min-w-[min(20rem,100%)]">
                {props.carousel}
            </div>
            <div className="flex-1 min-w-[min(20rem,100%)] text-justify">
                <div className="font-bold text-xl">{props.title}</div>
                <p>{props.desc}</p>
            </div>
        </div>
    </div>
}