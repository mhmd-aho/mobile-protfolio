import Header from "/src/components/header";
import { NavLink } from "react-router"
export default function About() {
    return (
        <section className="min-h-screen w-screen flex flex-col justify-start items-center gap-4 p-2">
            <Header />
            <div className="flex flex-col gap-2 justify-start items-start h-fit w-full">
                <h1 className="text-2xl font-bold">About me</h1>
                <p className="text-black">I’m a self-taught front-end web developer, dedicated to turning ideas into creative and impactful digital experiences.
          I specialize in building seamless, responsive, and intuitive user interfaces using modern technologies like React and Tailwind CSS.</p>
            </div>
            <div className="flex flex-col gap-2 justify-start items-start h-fit w-full">
                <h1 className="text-2xl font-bold">My stack</h1>
                <div className="flex flex-col gap-1 justify-start items-start pl-2">
                    <h2 className="text-xl font-semibold">Front-end</h2>
                    <div className="flex justify-start items-center gap-2 flex-wrap">
                        <div className="flex justify-between items-center gap-2 p-2 h-12 border border-black/20 bg-black/10 rounded-lg shadow-lg">
                            <img className="h-full" src="/src/assets/img/icons8-html5-48.png" alt="html5" />
                            <p>HTML5</p>
                        </div>
                        <div className="flex justify-between items-center gap-2 p-2 h-12 border border-black/20 bg-black/10 rounded-lg shadow-lg">
                            <img className="h-full" src="/src/assets/img/icons8-css-48.png" alt="css3" />
                            <p>CSS3</p>
                        </div>
                        <div className="flex justify-between items-center gap-2 p-2 h-12 border border-black/20 bg-black/10 rounded-lg shadow-lg">
                            <img className="h-full" src="/src/assets/img/icons8-javascript-48.png" alt="javascript" />
                            <p>JavaScript</p>
                        </div>
                        <div className="flex justify-between items-center gap-2 p-2 h-12 border border-black/20 bg-black/10 rounded-lg shadow-lg">
                            <img className="h-full" src="/src/assets/img/icons8-typescript-48.png" alt="typescript" />
                            <p>TypeScript</p>
                        </div>
                        <div className="flex justify-between items-center gap-2 p-2 h-12 border border-black/20 bg-black/10 rounded-lg shadow-lg">
                            <img className="h-full" src="/src/assets/img/icons8-react-48.png" alt="react" />
                            <p>React</p>
                        </div>
                        <div className="flex justify-between items-center gap-2 p-2 h-12 border border-black/20 bg-black/10 rounded-lg shadow-lg">
                            <img className="h-full" src="/src/assets/img/icons8-tailwind-css-48.png" alt="tailwindcss" />
                            <p>Tailwind CSS</p>
                        </div>
                        <div className="flex justify-between items-center gap-2 p-2 h-12 border border-black/20 bg-black/10 rounded-lg shadow-lg">
                            <img className="h-full" src="/src/assets/img/icons8-bootstrap-48.png" alt="bootstrap" />
                            <p>Bootstrap</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1 justify-start items-start pl-2">
                    <h2 className="text-xl font-semibold">Tools</h2>
                    <div className="flex justify-start items-center gap-2 flex-wrap">
                        <div className="flex justify-between items-center gap-2 p-2 h-12 border border-black/20 bg-black/10 rounded-lg shadow-lg">
                            <img className="h-full" src="/src/assets/img/icons8-figma-50.png" alt="figma" />
                            <p>Figma</p>
                        </div>
                        <div className="flex justify-between items-center gap-2 p-2 h-12 border border-black/20 bg-black/10 rounded-lg shadow-lg">
                            <img className="h-full" src="/src/assets/img/icons8-github-50.png" alt="github" />
                            <p>Github</p>
                        </div>
                        <div className="flex justify-between items-center gap-2 p-2 h-12 border border-black/20 bg-black/10 rounded-lg shadow-lg">
                            <img className="h-full" src="/src/assets/img/icons8-git-48.png" alt="git" />
                            <p>Git</p>
                        </div>
                        <div className="flex justify-between items-center gap-2 p-2 h-12 border border-black/20 bg-black/10 rounded-lg shadow-lg">
                            <img className="h-full" src="/src/assets/img/icons8-vs-code-50.png" alt="vscode" />
                            <p>VS Code</p>
                        </div>
                    </div>
                </div>
            </div>
            <NavLink to="/contact" className="border border-blue-600 bg-blue-500 py-2 w-full text-center text-black/50 rounded-lg mt-4">Contact me</NavLink>
        </section>
    )
}