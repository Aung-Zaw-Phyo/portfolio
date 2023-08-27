import React, { useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import { AiFillHome } from "react-icons/ai";
import { BiSolidUserAccount } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { MdOutlineWork } from "react-icons/md";
import Contact from "./components/Contact";

const App = () => {
    const heroRef = useRef()
    const aboutRef = useRef()
    const skillRef = useRef()
    const projectRef = useRef()
    const contactRef = useRef()

    const navigate = (type) => {
        if(type === 'home') {
            heroRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        if(type === 'about') {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        if(type === 'skill') {
            skillRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        if(type === 'project') {
            projectRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        if(type === 'contact') {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <>
            <div className=" fixed top-[10%] right-[10px] md:right-[20px] z-50">
                <div className="bg-white rounded-lg text-[#333]">
                    <div className="group relative p-2 mb-2 cursor-pointer hover:text-[#6159CB] duration-100"
                        onClick={navigate.bind(null, 'home')}
                    >
                        <div className="absolute top-0 left-[-230%] w-[85px] text-center text-white font-semibold bg-[#ffffff27] p-1 px-3 rounded-lg hidden group-hover:block duration-300">Home</div>
                        <AiFillHome size={25}/>
                    </div>
                    <div className="group relative p-2 mb-2 cursor-pointer hover:text-[#6159CB] duration-100"
                        onClick={navigate.bind(null, 'about')}
                    >
                        <div className="absolute top-0 left-[-230%] w-[85px] text-center text-white font-semibold bg-[#ffffff27] p-1 px-3 rounded-lg hidden group-hover:block duration-300">About</div>
                        <BiSolidUserAccount size={25}/>
                    </div>
                    <div className="group relative p-2 mb-2 cursor-pointer hover:text-[#6159CB] duration-100"
                        onClick={navigate.bind(null, 'skill')}
                    >
                        <div className="absolute top-0 left-[-230%] w-[85px] text-center text-white font-semibold bg-[#ffffff27] p-1 px-3 rounded-lg hidden group-hover:block duration-300">Skill</div>
                        <BsCodeSlash size={25}/>
                    </div>
                    <div className="group relative p-2 mb-2 cursor-pointer hover:text-[#6159CB] duration-100"
                        onClick={navigate.bind(null, 'project')}
                    >
                        <div className="absolute top-0 left-[-230%] w-[85px] text-center text-white font-semibold bg-[#ffffff27] p-1 px-3 rounded-lg hidden group-hover:block duration-300">Project</div>
                        <MdOutlineWork size={25}/>
                    </div>
                    <div className="group relative p-2 mb-2 cursor-pointer hover:text-[#6159CB] duration-100"
                        onClick={navigate.bind(null, 'contact')}
                    >
                        <div className="absolute top-0 left-[-230%] w-[85px] text-center text-white font-semibold bg-[#ffffff27] p-1 px-3 rounded-lg hidden group-hover:block duration-300">Contact</div>
                        <SiMinutemailer size={25}/>
                    </div>
                </div>
            </div>

            <div ref={heroRef}>
                <Hero/>
            </div>
            <div ref={aboutRef}>
                <About/>
            </div>
            <div ref={skillRef}>
                <Skill/>
            </div>
            <div ref={projectRef}>
                <Project/>
            </div>
            <div ref={contactRef}>
                <Contact/>
            </div>
        </>
    );
};

export default App;
