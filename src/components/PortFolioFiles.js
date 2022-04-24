import React, { useState } from "react";
import { Link } from 'react-scroll'
import { HiArrowNarrowRight } from 'react-icons/hi';
import skills from "../skills";
import projects from "../project";




export function Home() {
    return (
        <div name='home' className='w-full h-screen bg-[#111b29]'>

            {/* container */}
            <div className='max-w[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className="text-green-500">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-white">Richard Calipay</h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-gray-500">I`m a Full Stack Developer.</h2>
                <p className="text-gray-400 py-4 max-w-[700px]">I`m a full-stact developer specialing in building (and occasionally designing) exceptional digital experience. Currently, I`m focused on building responsive full-stack web application.</p>
                <div>
                    <button className="text-white group border-2 px-6 py-3 my2 flex items-center hover:bg-green-500 hover:border-green-500">
                        <Link to="viewproject" smooth={true} duration={500}>
                            View Project
                        </Link>
                        <span className="group-hover:rotate-90 duration:300">
                            <HiArrowNarrowRight className="ml-4" />
                        </span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export function About() {
    return (
        <div name='about' className='h-screen bg-[#111b29] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-x-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='pb-8 pl-10'>
                        <p className='text-4xl font-bold inline border-b-4 border-green-500'>About</p>
                    </div>
                    <div></div>
                    <div className='max-w-[1000] w-full sm:grid grid-cols-2 gap-8 px-4 pl-5'>
                        <div>
                            <p className='sm:text-right text-4xl font-bold'>
                                Hi. I'm Richard, nice to meet you, Pleace take a look around.
                            </p>
                        </div>
                        <div>
                            <p>I am passionate about building excellent software that improves the lives of those around me. I specialize in createing software for clients ranging from individuals and small-business all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}



// skills
export function Skills() {
    const [viewskills] = useState(skills)
    return (
        <div name='viewskill' className='bg-[#111b29] text-white'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-green-600'>Experience</p>
                    <p classname='py-6'>// These are technology I`ve worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 gap-4 text-center py-8'>
                    {viewskills.map((skill) => {
                        const { id, path, desc } = skill
                        return (
                            <div className='shadow-md shadow[#040c161] hover:scale-110 duration-500' key={id}>
                                <img className='w-20 mx-auto' src={path} alt="{desc}" />
                                <p className='my-4'>{desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

// project
export function Projects() {
    const [viewprojects] = useState(projects)
    return (
        <div name='viewproject' className='lg:h-screen bg-[#111b29] text-white'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className="pb-8">
                    <p className='text-4xl font-bold inline border-b-4 border-green-600'>Projects</p>
                    <p classname='py-6'>// Check out some of my recent work</p>
                </div>
                <div className='grid sm:grid-col-2 md:grid-cols-3 gap-4'>
                    {viewprojects.map((project) => {
                        const { id, path, desc } = project
                        return (
                            <div key={id}>
                                <div >
                                    <img src={path} alt="{desc}" />
                                </div>
                                <div className>
                                    <span className="text-2xl font-bold text-white tracking-wider">
                                        {desc}
                                    </span>
                                    <div className='pt-8 text-center'>
                                        <a href="/">
                                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Demo</button>
                                        </a>
                                        <a href="/">
                                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}