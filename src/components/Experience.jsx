import FoxRunMinigame from "./FoxRunMinigame";
import ProjectSection from "./ProjectSection";
import Carousel from "./Carousel";
import PortraitCarousel from "./PortraitCarousel";

export default function Experience(){

    const imagesFromFolder = (folder, length) => 
        Array.from({length: length}).map((_, i) => 'images/' + folder + '/' + (i+1) + '.png')

    return <div>
        <ProjectSection
            carousel={<Carousel images={imagesFromFolder('highway-core', 4)}/>}
            title="Highway Core"
            desc={<>A First-person-shooter game where the player battle endless hordes of enemies in an infinite highway. This game was made in the unity game engine by a group of 7 people. I was in charge of most of the programming in this project and made most of the game mechanics and feautures. This game was made for a game jam held by Binus Game Development Club, and it ended up winning third place up against professional game studios. Here are the <a href="https://github.com/hooksun/HighwayCore" target="_blank">source code</a> and <a href="https://bgdc.itch.io/highway-core" target="_blank">store page</a>.</>}
        />
        <ProjectSection
            reverse={true}
            carousel={<PortraitCarousel images={imagesFromFolder('resQfood', 6)}/>}
            title="resQfood"
            desc={<>A mobile application for ordering food online filled with features such as a recommendation system, search page, map page, favorite system, and more. This app was made with Flutter and Supabase for a group assignment and I was in charge of coding the entire app based on a design by another group member. View the source code <a href="https://github.com/hooksun/resqfood" target="_blank">here</a>.</>}
        />
        <ProjectSection
            carousel={<Carousel images={imagesFromFolder('freelance-1', 4)}/>}
            title="First freelance"
            desc='My first freelancing gig is working for the company "HOPE Counseling". I was tasked with making a database for storing customer data and schedules for various activities. I also made a website for interfacing with the database with features such as different roles with different levels of authorization, pages for viewing, inserting, updating, and deleting data, a salary calculator, a page for displaying statistics, and many more. The database is made with supabase and the website is made with react. Unfortunately, details on this project cannot be shared as the database is storing private data.'
        />
        <FoxRunMinigame/>
        <ProjectSection
            carousel={<Carousel images={imagesFromFolder('freelance-2', 4)}/>}
            title="Second freelance"
            desc={`For my second freelancing gig, I was tasked with adding automation for a personality test used in a youth camp. ... . The first step is emailing each participant a link to the form that the participants will fill out. the participants' responses are then processed and sent to experts that will analyze and create a summary. After ..., a pdf report containing the processed data and summary is generated and sent back to the participant's email`}
        />
        {/* proc gen, A unity project where I experimented with procedural dungeon generation. The dungeon includes rooms with multiple floors, pathways connecting each room, enemy AI with custom made pathfinding in each room, and many more */}
    </div>
}