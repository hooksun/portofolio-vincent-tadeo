import background from '.././assets/pixelart/back.png'
import foreground from '.././assets/pixelart/header-foreground-start.png'
import path from '.././assets/pixelart/header-foreground-middle.png'
import midground from '.././assets/pixelart/middle.png'
import foxIdle from '.././assets/pixelart/fox-idle.gif'
import foxRun from '.././assets/pixelart/fox-run.gif'
import './PixelartHeader.css'
import { useState } from 'react'

export default function PixelartHeader(){
    const [paused, setPaused] = useState(true)

    return <div className="w-full min-w-[576px] aspect-[24/10] relative contain-paint flex preserve-3d items-start -z-10">
        <img className='w-full disable-anti-aliasing' id='header-background' src={background} inert='true'/>
        <div className={'w-[1000%] left-[-35%] flex animate-[midground-pan_36s_linear_infinite]' + (paused ? ' pause':'')} id='header-midground' inert='true'>
            <img className='flex-1 disable-anti-aliasing' src={midground}/>
            <img className='flex-1 disable-anti-aliasing' src={midground}/>
        </div>
        <div className={'absolute bottom-0 w-[600%] flex left-0 items-end animate-[foreground-pan_18s_linear_infinite]' + (paused ? ' pause':'')} inert='true'>
            <img className='disable-anti-aliasing w-1/6' src={foreground} />
            <img className='disable-anti-aliasing w-4/6' src={path} />
            <img className='disable-anti-aliasing w-1/6' src={foreground} />
        </div>
        <img className='w-1/12 disable-anti-aliasing absolute bottom-[10%] left-[25vw] cursor-pointer' src={paused ? foxIdle : foxRun} onClick={() => setPaused(i => !i)} />
    </div>
}