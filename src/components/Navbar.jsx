import { useNavigate } from "react-router-dom";
import NavbarButton from "./NavbarButton";
import { useRef } from "react";


export default function Navbar(){
    const navigate = useNavigate()
    const navbarRef = useRef()

    const clickAndNavigate = (path) => {
        navbarRef.current.scrollIntoView()
        navigate(path)
    }

    return <div ref={navbarRef} className="flex bg-secondary mt-[-1px]">
        <NavbarButton text='about me' onClick={() => clickAndNavigate('/')}/>
        <NavbarButton text='skills' onClick={() => clickAndNavigate('/skills')} />
        <NavbarButton text='experience' onClick={() => clickAndNavigate('/experience')} />
    </div>
}