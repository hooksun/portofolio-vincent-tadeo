import { useEffect, useState } from "react"
import useRenderQueue from "../hooks/useRenderQueue"

export default function Carousel(props){
    const [currentPage, setCurrentPage] = useState(0)
    const [left, setLeft] = useState(props.images[0])
    const [right, setRight] = useState(props.images[1])
    const [animate, setAnimate] = useState(0)

    const setRenderQueue = useRenderQueue()

    const move = (step) => {
        moveTo((currentPage + step + props.images.length) % props.images.length, step)
    }

    const moveTo = (index, dir) => {
        if(index === currentPage){
            return
        }
        if(dir == undefined){
            dir = index - currentPage
        }
        transition(currentPage, index, dir)
    }

    const transition = (from, to, move) => {
        move = Math.sign(move)
        if(move === 1){
            setLeft(move === 1 ? props.images[from] : props.images[to])
            setRight(move !== 1 ? props.images[from] : props.images[to])
        }
        if(move === animate){
            setAnimate(0)
        }

        setRenderQueue([
            () => {
                if(move === -1){
                    setLeft(move === 1 ? props.images[from] : props.images[to])
                    setRight(move !== 1 ? props.images[from] : props.images[to])
                }
                setAnimate(move)
            }
        ])

        setCurrentPage(to)
    }

    return <div className="relative flex aspect-video overflow-hidden">
        <div className={"absolute flex w-[200%] h-full" + (animate === 0?"":" animate-[swipe-"+(animate===1?"right":"left")+"_300ms_ease-in-out_1_forwards]")}>
            <img className="object-cover w-1/2 h-full" src={left}/>
            <img className="object-cover w-1/2 h-full" src={right}/>
        </div>
        {/* <img className="object-cover w-full h-full" src={props.images[currentPage]} /> */}
        <button className="absolute h-full items-center left-2 -scale-x-100" onClick={() => move(-1)} >
            {'>'}
        </button>
        <button className="absolute h-full items-center right-2" onClick={() => move(1)}>
            {'>'}
        </button>
        <div className="absolute w-full bottom-0 p-2 flex justify-center gap-2">
            {props.images.map((e, i) => <input className="cursor-pointer" key={i} type="radio" checked={currentPage === i} onChange={() => moveTo(i)} />)}
        </div>
    </div>
}