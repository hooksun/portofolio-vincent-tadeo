import { useState } from "react"
import useRenderQueue from "../hooks/useRenderQueue"
import arrow from '/src/assets/icons/arrow.png'

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

    return <div className="relative flex items-center aspect-video overflow-hidden">
        <div className={"absolute flex w-[200%] h-full" + (animate === 0?"":" animate-[swipe-"+(animate===1?"right":"left")+"_300ms_ease-in-out_1_forwards]")}>
            <img className="object-cover w-1/2 h-full" src={left}/>
            <img className="object-cover w-1/2 h-full" src={right}/>
        </div>
        <button className="absolute left-2 -scale-x-100 w-8 p-2 rounded-full bg-gray-500 hover:bg-gray-400 transition-all bg-opacity-50 hover:bg-opacity-50" onClick={() => move(-1)} >
            <img src={arrow}/>
        </button>
        <button className="absolute right-2 w-8 p-2 rounded-full bg-gray-500 hover:bg-gray-400 transition-all bg-opacity-50 hover:bg-opacity-50" onClick={() => move(1)}>
            <img src={arrow}/>
        </button>
        <div className="absolute w-full bottom-0 p-2 flex justify-center gap-2">
            {props.images.map((e, i) => <input className="cursor-pointer" key={i} type="radio" checked={currentPage === i} onChange={() => moveTo(i)} />)}
        </div>
        <div className="hidden">
            {props.images.map(e => <img src={e}/>)}
        </div>
    </div>
}