/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { BiLogoHtml5,BiLogoCss3,BiLogoJavascript } from 'react-icons/bi';
function SkillCard({skill}) {
    return (
        <div>
            <div className="skills-card bg-white p-5 rounded-lg shadow-2xl w-full">
                <div className="skills-card-title py-1">
                    <h1 className="text-2xl font-bold uppercase">{skill.title}</h1>
                </div>
                <hr className="border-blue-700" />
                <div className="skills-card-content py-1">
                    <div className="skills-items">
                        {
                            skill.items.map((item, index) => {
                                return (
                                    <div className='flex items-center justify-start bg-gray-300 rounded-md my-2 '>
                                        <div className="skill-icon bg-blue-700 font-bold text-white p-1 rounded-md">
                                            {item.logo}
                                        </div>
                                        <div className="skill-name p-1">
                                            <p>{item.name}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillCard;