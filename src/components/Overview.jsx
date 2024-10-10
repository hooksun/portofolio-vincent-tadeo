

export default function Overview(){


    return <div className="w-full flex items-center flex-col gap-8 py-8 text-justify">
        <div className="w-full text-center text-lg">Hi, my name is Vincent Tadeo</div>
        <div className="w-4/5 max-w-[80ch]">
            I'm a student at BINUS University majoring in Computer Science. I specialize in <span className="highlight">web development</span>.
            However, I have a lot of skills and experience in other aspects of programming
            such as <span className="highlight">game programming</span>, <span className="highlight">mobile development</span>, <span className="highlight">competitive programming</span>, and more.
        </div>
        <div className="w-4/5 max-w-[80ch]">
            My programming journey began in highschool, when I tried using the unity game engine to make my first game. From there, I learned a lot about unity and C# by experimenting with projects such as procedural generation, multiplayer networking, and more.
        </div>
        <div className="w-4/5 max-w-[80ch]">
            At BINUS, I learned a lot of other programming languages such as C, Javascript, Python, Java, and more, which greatly expanded my knowledge and skills. I also learned some valuable lessons, one of which is that good code comes from a balance between performance, readibility, and maintainability.
        </div>
        <div className="w-4/5 max-w-[80ch]">
            During my studies, I've also gotten a few <span className="highlight">freelancing</span> opportunities. These gigs gave me valuable experience to communicate and work with clients on their needs. It also greatly enhances my skills in web development using frameworks such as React.
        </div>

        <div className="grid grid-cols-3 gap-[10%] w-4/5 max-w-[80ch]">
            <a href="https://github.com/hooksun" target="_blank"><img src="logos/github.png"/></a>
            <a href="mailto:vincent.tadeo1206@gmail.com" target="_blank"><img src="logos/gmail.png"/></a>
            <a href="https://www.linkedin.com/in/vincent-tadeo-07312332a" target="_blank"><img src="logos/linkedin.png"/></a>
        </div>
    </div>
}