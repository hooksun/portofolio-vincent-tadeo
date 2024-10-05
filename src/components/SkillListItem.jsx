
export default function SkillListItem(props){


    return <div className=" flex items-center flex-col gap-4">
        {props.children ?? <img src={props.logo} className="h-20" />}
        <p className="text-center">{props.desc}</p>
    </div>
}