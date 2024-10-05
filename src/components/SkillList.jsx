import SkillListItem from "./SkillListItem";
import ladder from '/src/assets/pixelart/ladder.png'
import foxClimb from '/src/assets/pixelart/fox-climb.gif'

export default function SkillList(){

    const logoFolderPath = 'logos/'


    return <div className="relative w-full py-8 grid grid-cols-[1fr,min(80%,80ch),1fr]">
        <div className="w-full col-start-2 flex flex-col items-center gap-8">
            <SkillListItem logo={logoFolderPath + 'unity.png'} desc="Unity, a game engine for making your bad game ideas a reality" />
            <SkillListItem logo={logoFolderPath + 'cs.png'} desc="C#, the programming language used by the unity engine and many other stuff" />
            <SkillListItem desc="html, css, javascript, the 3 main ingredients of web development">
                <div className="grid grid-cols-[repeat(3,5rem)] h-20">
                    <img className="h-20" src={logoFolderPath + 'html.png'}/>
                    <img className="h-20" src={logoFolderPath + 'css.svg'}/>
                    <img className="h-20" src={logoFolderPath + 'js.png'}/>
                </div>
            </SkillListItem>
            <SkillListItem logo={logoFolderPath + 'react.svg'} desc="React, a component based frontend development framework" />
            <SkillListItem logo={logoFolderPath + 'flutter.webp'} desc="Flutter, a framework for developing mobile apps" />
            <SkillListItem logo={logoFolderPath + 'supabase.png'} desc="Supabase, a free and open source cloud service for creating databases and backends" />
            <SkillListItem logo={logoFolderPath + 'postgres.png'} desc="Postgres, a free and open source version of MySQL"/>
            <SkillListItem logo={logoFolderPath + 'tailwind.png'} desc="Tailwind, a css framework for when you don't know what to name your classes"/>
            {/* <SkillListItem logo={logoFolderPath + 'brevo.png'} desc="Brevo, a cloud service for sending automated emails"/> */}
            Honorable Mentions
            <div className="flex h-20 gap-8">
                <img className="h-20" src={logoFolderPath + 'java.webp'}/>
                <img className="h-20" src={logoFolderPath + 'cpp.png'}/>
                <img className="h-20" src={logoFolderPath + 'python.webp'}/>
            </div>
        </div>
        <div className="sticky h-[80vh] w-full hidden justify-center top-[10vh] my-[10vh] md:flex">
            <img className="h-full disable-anti-aliasing" src={ladder} />
            <div className="absolute h-full climbing-fox">
                <img className="h-1/5 disable-anti-aliasing" src={foxClimb} />
            </div>
        </div>
    </div>
}