/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FiArrowRightCircle } from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'
import './projects.css'
import Projects from './Projects'
function Project({ project, no }) {
    const style1 = "bg-white p-5 flex flex-wrap md:bg-transparent rounded-xl shadow-2xl md:shadow-none"
    const style2 = "bg-white p-5 flex flex-wrap flex-row-reverse md:bg-transparent rounded-xl shadow-2xl md:shadow-none"
    return (
        <div className={no%2==0 ? style1 : style2}>
            <div className=' md:w-1/2'>
                <div className="project-img relative mx-auto md:w-fit">
                    <img src={project.image} alt="resume" />
                    <div className='project-no absolute top-1 left-2 text-2xl bg-blue-700 font-bold md:font-extrabold px-3 py-2 rounded-full text-white shadow-2xl'>{no + 1}.</div>
                </div>
            </div>
            {/* <hr className='border-solid my-1' /> */}
            <div className=' md:w-1/2'>
                <div className="img-title">
                    <h1 className='text-2xl font-semibold text-center py-2'>{project.title}</h1>
                </div>
                <div className="project-desc">
                    <p>{project.desc}</p>
                </div>
                <div className="project-features p-2">
                    <h1 className='text-xl font-semibold'>Features</h1>
                    <ul className='list-disc list-inside'>
                        {
                            project.features.map((feature, index) => {
                                return (
                                    <li key={index}>{feature}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="project-links flex flex-wrap gap-4 items-center justify-center">
                    <a href={project.links.website} target='_blank' rel='noopener noreferrer' className='flex items-center gap-x-2 justify-center bg-blue-700 text-white p-2 rounded-lg font-bold md:w-1/3 md:mx-auto w-full'>
                        <span>View Live</span>
                        <FiArrowRightCircle className='animate' />
                    </a>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className='flex items-center gap-x-2 justify-center bg-blue-700 text-white p-2 rounded-lg font-bold md:w-1/3 md:mx-auto w-full'>
                        <BsGithub className='text-2xl text-white' />
                        <span>Github</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project;