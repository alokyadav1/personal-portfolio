/* eslint-disable no-unused-vars */
import BG from "../../assets/images/bg.png";
import profile from "../../assets/images/profile.jpg";
import profileImg from "../../assets/images/profile.png";
import { Player } from "@lottiefiles/react-lottie-player"
import About from "../About/About";
import Skills from "../skills/Skills";
import Projects from "../Projects/Projects";
import "./home.css"
function Home() {
    return (
        <div>
            <div className="home flex flex-wrap flex-col-reverse sm:flex-row p-2 py-5 h-fit sm:h-fit relative max-h-fit" id="home">
                <div className="left sm:w-1/2 flex items-center  justify-center">
                    <div className="left-content text-center">
                        <div className="left-content-title sm:text-5xl p-2 mb-5 text-3xl">
                            <p className=" break-normal stroke-black">Hello and welcome to my portfolio!</p>
                        </div>
                        <div className="left-content-text sm:w-1/2 mx-auto">
                            <p className="break-normal">I am a web developer passionate about creating dynamic and engaging online experiences. With a commitment to continuous learning and a keen eye for detail, I strive to bring innovative ideas to life through clean and efficient code. Explore my work and join me on this exciting web development journey.</p>
                        </div>
                    </div>
                </div>
                <div className="right sm:w-1/2  sm:flex sm:justify-center sm:items-center my-10 ">
                    <div className="right-content">
                        {/* <div className="profile border-5 border-blue-800 p-2 w-auto">
                            <img src={profile} alt="profile" className="rounded-2xl w-3/5 h-3/5 mx-auto bg-blue-500 border-8 border-white shadow-2xl" />
                        </div> */}
                        <div className="relative">
                            <div className="wave bg-blue-800 rounded-full p-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
                                <div className="p-10">
                                    <div className=" p-10">
                                    </div>
                                </div>
                            </div>
                            <div className="z-10 relative">
                                <img src={profileImg} alt="" className="w-3/5 h-3/5 rounded-full shadow-2xl mx-auto bg-blue-400" />
                            </div>

                        </div>
                    </div>
                </div>
                {/* <div className="mx-auto absolute bottom-0 left-1/2 -translate-x-1/2 shadow-2xl bg-slate-50 rounded-2xl">
                    <Player
                        autoplay
                        loop
                        src="https://assets10.lottiefiles.com/packages/lf20_P4RBQZ.json"
                        style={{ height: '100px', width: '100px' }}
                    >
                    </Player>
                </div> */}
            </div>
            <hr />
            <div id="about" className="p-2 py-5 min-h-screen max-h-fit">
                <About />
            </div>
            <hr />
            <div id="skills" className="p-2 py-5 min-h-screen max-h-fit">
                <Skills />
            </div>
            <hr />
            <div id="projects" className="p-2 py-5 min-h-screen max-h-fit">
                <Projects />
            </div>
        </div>
    );
}

export default Home;