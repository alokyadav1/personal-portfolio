/* eslint-disable no-unused-vars */
import { Player } from "@lottiefiles/react-lottie-player"
import SkillCard from "./SkillCard";
import { BiLogoHtml5,BiLogoCss3,BiLogoJavascript } from 'react-icons/bi';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiTailwindcss, SiThealgorithms, SiDebian } from 'react-icons/si';
function Skills() {
    const skills = [
        {
            title: "frontend",
            items: [
                {
                    logo: <BiLogoHtml5 className="text-2xl" />,
                    name: "HTML"
                },
                {
                    logo: <BiLogoCss3 className="text-2xl" />,
                    name: "CSS"
                },
                {
                    logo: <BiLogoJavascript className="text-2xl" />,
                    name: "JavaScript"
                },
                {
                    logo: <FaReact className="text-2xl" />,
                    name: "React"
                },
                {
                    logo: <SiTailwindcss className="text-2xl" />,
                    name: "TailwindCSS"
                }
            ]
        },
        {
            title: "backend",
            items: [
                {
                    logo: <FaNodeJs className="text-2xl" />,
                    name: "NodeJS"
                }
            ]
        },
        {
            title: "database",
            items: [
                {
                    logo: <SiMongodb className="text-2xl" />,
                    name: "MongoDB"
                },
                {
                    logo: <SiMysql className="text-2xl" />,
                    name: "MySQL"
                }
            ]
        },
        {
            title: "computer fundamentals",
            items: [
                {
                    logo: <SiThealgorithms className="text-2xl" />,
                    name: "DSA"
                },
                {
                    logo: <SiDebian className="text-2xl" />,
                    name: "Debian based linux"
                }
            ]
        },
    ]
    return (
        <div>
            <div className="flex flex-col gap-y-3 items-center justify-center mb-10 md:mb-20 w-fit mx-auto">
                <h1 className="text-center font-bold text-4xl">Skills</h1>
                <div className="bg-blue-700 rounded-2xl w-3/5 h-2 md:w-6/12"></div>
            </div>
            <div className="skills flex flex-wrap flex-col-reverse md:flex-row items-start justify-center">
                <div className="skills-left-content w-full md:w-1/2">
                    <div className="w-fit mx-auto flex flex-wrap items-normal gap-5 justify-center">
                        {
                            skills.map((skill,index) => {
                                return(
                                    <SkillCard skill={skill} key={index}/>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="skills-right-content w-full md:w-1/2 mb-5 md:mb-0">
                    <div className="w-fit">
                        <Player
                            autoplay
                            loop
                            src="https://assets10.lottiefiles.com/private_files/lf30_obidsi0t.json"
                            className="w-2/3 h-2/3 mx-auto"
                        >
                        </Player>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;