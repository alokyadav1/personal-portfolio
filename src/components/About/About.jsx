/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import AboutImage from "../../assets/images/about-us.svg";
import brushImg from "../../assets/images/golden-brush.png";
import "./about.css";

import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
function About() {
    return (
        <div>
            <div className="about-text flex flex-col gap-y-3 items-center justify-center mb-10 md:mb-20 w-fit mx-auto">
                <h1 className="text-center font-bold text-4xl">About me</h1>
                <div className="bg-blue-700 rounded-2xl w-3/5 h-2 md:w-6/12"></div>
            </div>
            <div className="about flex flex-wrap">
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <div className="image md:w-3/4 md:h-3/4">
                        <img src={AboutImage} alt="about-me"
                            className="w-full h-full mx-auto md:w-full md:h-full" />
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="about-content">
                        <div className="about-content-title text-center">
                            <h1 className="text-3xl font-bold py-5">Who am I?</h1>
                        </div>
                        <div className="about-content-text">
                            <p>I'm Alok Yadav, a web developer based in Dombivli, Maharashtra, India. I hold a <span>BSc.IT</span> degree from <span>KJ Somaiya College of Science and Commerce</span> and pursued my postgraduation in <span>MCA</span> from <span>Veermata Jijabai Technological Institute</span>. With a passion for web development, I'm dedicated to creating engaging and functional websites. Let's collaborate and make your online presence remarkable!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="connect">
                <div className="connect-title text-center">
                    <h1 className="text-xl font-bold py-5">Let's Connect!</h1>
                </div>
                <div className="connect-icons-container">
                    <div className="connect-icons flex justify-center gap-x-5 shadow-inner">
                        <div className="linkedin">
                            <a href="https://www.linkedin.com/in/alok-yadav-509ba8187/" target="_blank" rel="noreferrer">
                                <BsLinkedin className="text-3xl md:text-4xl transition-all hover:text-4xl hover:md:text-5xl text-blue-700" />
                            </a>
                        </div>
                        <div className="github">
                            <a href="https://github.com/alokyadav1" target="_blank" rel="noreferrer">
                                <BsGithub className="text-3xl md:text-4xl transition-all hover:text-4xl hover:md:text-5xl text-blue-700" />
                            </a>
                        </div>
                        <div className="instagram">
                        <a href="https://www.instagram.com/alok_yadav88/" target="_blank" rel="noreferrer">
                            <BsInstagram className="text-3xl md:text-4xl transition-all hover:text-4xl hover:md:text-5xl text-blue-700" />
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;