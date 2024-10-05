

export default function NavbarButton(props){


    return <button className="p-4 uppercase font-bold text-lg relative flex-1" onClick={props.onClick} >
        {props.text}
    </button>
}