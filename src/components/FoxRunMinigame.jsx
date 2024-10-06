import track from './../assets/pixelart/track.png'
import foxRun from './../assets/pixelart/fox-run.gif'
import foxHurt from './../assets/pixelart/fox-hurt.gif'
import { useEffect, useState } from 'react'
import useRenderQueue from '../hooks/useRenderQueue'

export default function FoxRunMinigame(){
    const [animating, setAnimating] = useState(false)
    const [dead, setDead] = useState(false)
    const setRenderQueue = useRenderQueue()

    useEffect(() => {
        const interval = setInterval(startRun, 15000)

        return () => clearInterval(interval)
    }, [])

    const startRun = () => {
        setAnimating(false)
        setDead(false)
        setRenderQueue([() => setAnimating(true)])
    }

    return <div className="w-full relative mt-24 min-w-[576px]">
        <img className='w-full disable-anti-aliasing' src={track} inert='true'/>
        {animating &&
            <div className='w-1/12 absolute bottom-full animate-[run-across_5s_linear_forwards] cursor-pointer z-40' onClick={() => setDead(true)}>
                {!dead ? 
                    <img src={foxRun} className='w-full disable-anti-aliasing -scale-x-100' inert='true' />
                    :
                    <img src={foxHurt} className='w-full disable-anti-aliasing animate-[fall_1s_cubic-bezier(.49,-0.35,1,.58)_forwards]' inert='true' />
                }
                
            </div>
        }
    </div>
}