/* eslint-disable no-unused-vars */
import resumeImage from '../../assets/images/projects/resume.png'
import todoImage from '../../assets/images/projects/todo.png'
import weatherImage from '../../assets/images/projects/weather.png'
import Project from "./Project";
function Projects() {
    const projects = [
        {
            title: "Resume Maker",
            desc: "Resume Maker is a simple resume maker web application made using the React framework. The app allows users to create a resume by filling out a form. The app also allows users to download the resume as a PDF file.",
            features: [
                "User login and registration",
                "Editing form data",
                "currently contains only one template",
                "Downloading the resume as a PDF file"

            ],
            image: resumeImage,
            links: {
                website: "https://resume-maker88.web.app/",
                github: "https://github.com/alokyadav1/resume-builder-backup"
            },
        },
        {
            title: "Todo App",
            desc: "Todo App is a simple todo app made using the MERN stack. The MERN stack is a popular JavaScript stack that consists of MongoDB, Express, React, and Node.js.",
            features: [
                "User login and registration",
                "Saving tasks to a MongoDB database",
                "Sending an email to the user once a task is added successfully",
                "Forgot password functionality"
            ],
            image: todoImage,
            links: {
                website: "https://todo-app-b96a5.web.app/",
                github: "https://github.com/alokyadav1/mern-todo-app"
            },

        },
        {
            title: "Weather App",
            desc: "Weather App is a simple weather app made using the React framework. The app uses the weatherapi API to fetch weather data for a given city.",
            features: [
                "Displays the current weather conditions for a given city",
                "Displays the forecast for the remaining hours of the day",
                "Allows users to search for cities by name",
                "Displays the current date and time",
                "Proper loading and error handling"
            ],
            image: weatherImage,
            links: {
                website: "https://weather-app-b29a2.web.app/",
                github: "https://github.com/alokyadav1/weather-app-react"
            },
        }
    ]
    return (
        <div>
            <div className="flex flex-col gap-y-3 items-center justify-center mb-10 md:mb-20 w-fit mx-auto">
                <h1 className="text-center font-bold text-4xl">Projects</h1>
                <div className="bg-blue-700 rounded-2xl w-3/5 h-2 md:w-6/12"></div>
            </div>
            <div className="mx-auto flex flex-wrap items-center justify-center gap-y-4 md:gap-y-32">
                {
                    projects.map((project, index) => {
                        return (
                            <Project project={project} no={index} key={index} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Projects;