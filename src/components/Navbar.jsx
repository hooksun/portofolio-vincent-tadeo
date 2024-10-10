import { useNavigate } from "react-router-dom";
import NavbarButton from "./NavbarButton";
import { useRef } from "react";
import borderBottom from '/src/assets/pixelart/header-bottom.png'

export default function Navbar(){
    const navigate = useNavigate()
    const navbarRef = useRef()

    const clickAndNavigate = (path) => {
        navbarRef.current.scrollIntoView()
        navigate(path)
    }

    return <>
        <div ref={navbarRef}></div>
        <div className='sticky top-[-1px] z-50'>
            <div className="flex bg-secondary mt-[-1px]">
                <NavbarButton text='about me' onClick={() => clickAndNavigate('/')}/>
                <NavbarButton text='skills' onClick={() => clickAndNavigate('/skills')} />
                <NavbarButton text='experience' onClick={() => clickAndNavigate('/experience')} />
            </div>
            <img className='w-full disable-anti-aliasing min-w-[576px]' src={borderBottom} inert='true' />
        </div>
    </>
}