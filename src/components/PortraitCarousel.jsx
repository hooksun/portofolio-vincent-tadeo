import { useState } from "react"

export default function PortraitCarousel(props){
    const [selected, setSelected] = useState(0)

    return <div className="flex aspect-[16/14] sm:aspect-video gap-2">
        {props.images?.map((e, i) => <div key={i} onClick={() => setSelected(i)} className={
            "rounded-lg overflow-hidden transition-all duration-300 max-w-fit cursor-pointer ease-in-out " + (
                selected === i ? 'flex-[5_1_0%] sm:flex-[2.5_1_0%]' //cringe magic number
                : 'flex-1 hover:flex-[1.5_1_0%]'
            )
        }>
            <img src={e} className={
                "object-cover h-full transition-all duration-300 " 
            }/>
        </div>)}
    </div>
}