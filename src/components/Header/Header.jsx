/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaBarsStaggered } from 'react-icons/fa6';
import './header.css'
function Header() {
    const navElement = useRef(null)
    const handleBar = () => {
        navElement.current.classList.toggle('hidden')
    }
    return (
        <header>
            <nav className='header flex flex-wrap items-center justify-between w-full p-2 z-10 md:flex-row md:h-auto md:justify-center md:items-center md:gap-x-10 border-b-2 border-white border-dashed'>
                <div className="logo md:hidden text-3xl text-blue-700 uppercase">
                    Alok
                </div>
                <div className="hamburger md:hidden" onClick={handleBar}>
                    <FaBarsStaggered className='text-2xl' />
                </div>
                <div id="nav-contents" className="nav-contents w-full hidden md:block mt-2 shadow-2xl md:w-auto md:m-auto z-10 " ref={navElement}>
                    <div>
                        <ul className=' md:flex md:gap-3 font-bold'>
                            <li onClick={handleBar}>
                                <HashLink smooth to="/" className="text-center block rounded text-blue-700 hover:text-white hover:bg-blue-700 py-2 px-4">Home</HashLink>
                            </li>
                            <li onClick={handleBar}>
                                <HashLink smooth to="/#about" className="text-center block rounded text-blue-700 hover:text-white hover:bg-blue-700 py-2 px-4">About</HashLink>
                            </li>
                            <li onClick={handleBar}>
                                <HashLink smooth to="/#skills" className="text-center block rounded text-blue-700 hover:text-white hover:bg-blue-700 py-2 px-4">Skills</HashLink>
                            </li>
                            <li onClick={handleBar}>
                                <HashLink smooth to="/#projects" className="text-center block rounded text-blue-700 hover:text-white hover:bg-blue-700 py-2 px-4">Projects</HashLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;