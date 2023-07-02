import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { HashLink } from 'react-router-hash-link';
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import "./footer.css"
function Footer() {
    return (
        <footer className="footer border-t-2 border-black">
            <div className="footer-content p-5">
                <div className="footer-head flex flex-wrap items-center justify-center gap-10">
                    <p className="text-2xl font-extrabold">Lets Connect!</p>
                    <div className="social-icons">
                        <div className="connect-icons flex justify-center gap-x-5 shadow-inner">
                            <div className="linkedin">
                                <a href="https://www.linkedin.com/in/alok-yadav-509ba8187/" target="_blank" rel="noreferrer">
                                    <BsLinkedin className="text-3xl md:text-4xl transition-all  text-black" />
                                </a>
                            </div>
                            <div className="github">
                                <a href="https://github.com/alokyadav1" target="_blank" rel="noreferrer">
                                    <BsGithub className="text-3xl md:text-4xl transition-all  text-black" />
                                </a>
                            </div>
                            <div className="instagram">
                                <a href="https://www.instagram.com/alok_yadav88/" target="_blank" rel="noreferrer">
                                    <BsInstagram className="text-3xl md:text-4xl transition-all  text-black" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-main-content flex flex-wrap items-start justify-around my-5">
                    <div>
                        <ul className='font-bold'>
                            <li>
                                <HashLink smooth to="/#home" className="text-center block rounded text-blue-700 hover:text-white hover:bg-blue-700 py-2 px-4">Home</HashLink>
                            </li>
                            <li>
                                <HashLink smooth to="/#about" className="text-center block rounded text-blue-700 hover:text-white hover:bg-blue-700 py-2 px-4">About</HashLink>
                            </li>
                            <li>
                                <HashLink smooth to="/#skills" className="text-center block rounded text-blue-700 hover:text-white hover:bg-blue-700 py-2 px-4">Skills</HashLink>
                            </li>
                            <li>
                                <HashLink smooth to="/#projects" className="text-center block rounded text-blue-700 hover:text-white hover:bg-blue-700 py-2 px-4">Projects</HashLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="w-full flex flex-wrap items-center gap-x-5 justify-start my-2">
                            <FaLocationDot className="w-8 inline-block text-3xl text-white bg-blue-700 p-2 rounded-full shadow-lg" />
                            <address className="w-2/4 break-words">Dombivli, Thane, Maharashtra, India</address>
                        </div>
                        <div className="w-full flex flex-wrap items-center gap-x-5 justify-start">
                            <MdEmail className="w-8 inline-block text-3xl text-white bg-blue-700 p-2 rounded-full shadow-lg" />
                            <a href="mailto:alok.yadav8879@gmail.com" className="w-2/4">alok.yadav8879@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="text-center font-bold ">
                    <p>Made with ❤️ by Alok Yadav.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;