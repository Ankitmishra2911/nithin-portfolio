
import React from "react";
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            {title=='Co People' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src="https://private-user-images.githubusercontent.com/98656735/352583416-c2ac373d-74a5-4797-8c4c-4eb5727c504c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjI1Mzc5ODksIm5iZiI6MTcyMjUzNzY4OSwicGF0aCI6Ii85ODY1NjczNS8zNTI1ODM0MTYtYzJhYzM3M2QtNzRhNS00Nzk3LThjNGMtNGViNTcyN2M1MDRjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODAxVDE4NDEyOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQ1MDEzZDE4MTNmMzJiMGY3NGQ1OGIyYzc1YWNhNThmMTFmMjQ1ZDdkNWE2MTUzNzJhZGUwODQ5YjViMzYxYTcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.5hcXHbFei_3svXsYX5hQPQGSr60bCU9TQkWDRRiXay0" alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'CTZ - A Digital Marketplace for College Students',
        description:'CTZ is a dynamic web application I crafted using ReactJS, Node JS and PostgreSQL. Developed a comprehensive digital marketplace platform tailored for college students, facilitating the buying, selling, and renting of various items.',
        git:'https://github.com/Ankitmishra2911/newapp',
        technologies:['PostgreSQL' ,'ReactJS' , 'NodeJS']
    }
   
]

export default Projects