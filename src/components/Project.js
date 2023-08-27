import React from "react";
import {FaLaptopCode} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import ninja_hr from './../images/projects/ninja_hr.png'
import ninja_hr_bg from './../images/projects/ninja_hr_bg.png'
import magic_pay from './../images/projects/magic_pay.png'
import magic_pay_bg1 from './../images/projects/magic_pay_bg.jpeg'
import chat from './../images/projects/chat.png'
import chat_bg from './../images/projects/chat_bg.png'

const Project = () => {
    return (
        <div className="container py-12 ">
            <h1 className="title mb-4">Projects</h1>
            <div className="grid md:grid-cols-2 gap-0">
                <div className="p-4">
                    <div className="max-h-[350px] relative  overflow-hidden rounded-lg">
                        <div className="p-2 h-auto w-auto sm:h-[600px] sm:w-[360px] -translate-x-8 -rotate-[55deg] -translate-y-28 mx-auto">
                            <img className="h-full w-full" src={ninja_hr_bg} alt="" />
                        </div>
                        <div className="absolute top-0 bottom-0 right-0 left-0 h-full w-full flex items-end bg-[rgba(37,39,52,.95)]">
                            <img className="w-[85%] sm:w-[75%] rounded-t-lg mx-auto" src={ninja_hr} alt="" />
                        </div>
                    </div>
                    <div className="p-3">
                        <h1 className="mb-2 text-[18px]">Ninja HR | Employee Management System Project</h1>
                        <div className="flex items-start mb-3">
                            <FaLaptopCode className="mr-3" size={20}/><span className="text-[15px]">HTML, Css, Bootstrap, Javascript, PHP, MySql, Laravel, Jquery and Ajax </span>
                        </div>
                        <a className="inline-block" href='https://github.com/Aung-Zaw-Phyo/ninja_hr' target="_blank" rel="noopener noreferrer">
                            <button className="flex items-center">
                                <BsGithub className="mr-2"/>
                                <span className="text-[16px]">Ninja HR</span>
                            </button>
                        </a>
                    </div>
                </div>

                <div className="p-4">
                    <div className="max-h-[350px] relative overflow-hidden rounded-lg">
                        <div className="p-2 h-auto w-auto sm:h-[600px] sm:w-[360px] -rotate-[55deg] -translate-y-28 mx-auto">
                            <img className="h-full w-full" src={magic_pay_bg1} alt="" />
                        </div>
                        <div className="absolute top-0 bottom-0 right-0 left-0 h-full w-full flex items-end bg-[rgba(37,39,52,.95)]">
                            <img className="w-[85%] sm:w-[75%] rounded-t-lg mx-auto " src={magic_pay} alt="" />
                        </div>
                    </div>
                    <div className="p-3">
                        <h1 className="mb-2 text-[18px]">Magic Pay | Mini E-Wallet Project</h1>
                        <div className="flex items-start mb-3">
                            <FaLaptopCode className="mr-3" size={20}/><span className="text-[15px]">HTML, Css, Bootstrap, Javascript, PHP, MySql, Laravel, Jquery and Ajax </span>
                        </div>
                        <a className="inline-block" href='https://github.com/Aung-Zaw-Phyo/MagicPay' target="_blank" rel="noopener noreferrer">
                            <button className="flex items-center">
                                <BsGithub className="mr-2"/>
                                <span className="text-[16px]">Magic Pay</span>
                            </button>
                        </a>
                    </div>
                </div>

                <div className="p-4">
                    <div className="max-h-[350px] relative overflow-hidden rounded-lg">
                    <div className="p-2 h-auto w-auto sm:h-[600px] sm:w-[360px] -rotate-[55deg] -translate-y-28 mx-auto">
                            <img className="h-full w-full" src={magic_pay_bg1} alt="" />
                        </div>
                        <div className="absolute top-0 bottom-0 right-0 left-0 h-full w-full flex items-end bg-[rgba(37,39,52,.95)]">
                            <img className="w-[85%] sm:w-[75%] rounded-t-lg mx-auto" src={magic_pay} alt="" />
                        </div>
                    </div>
                    <div className="p-3">
                        <h1 className="mb-2 text-[18px]">Magic Pay | Mini E-Wallet Project</h1>
                        <div className="flex items-start mb-3">
                            <FaLaptopCode className="mr-3" size={20}/><span className="text-[15px]"> Reactjs, TailwindCss and Laravel Api </span>
                        </div>
                        <a className="inline-block" href='https://github.com/Aung-Zaw-Phyo/magic_pay' target="_blank" rel="noopener noreferrer">
                            <button className="flex items-center">
                                <BsGithub className="mr-2"/>
                                <span className="text-[16px]">Magic Pay</span>
                            </button>
                        </a>
                    </div>
                </div>

                <div className="p-4">
                    <div className="max-h-[350px] relative overflow-hidden rounded-lg">
                        <div className="p-2 h-auto w-auto sm:h-[600px] sm:w-[360px] -rotate-[55deg] -translate-y-28 mx-auto">
                            <img className="h-full w-full" src={chat_bg} alt="" />
                        </div>
                        <div className="absolute top-0 bottom-0 right-0 left-0 h-full w-full flex items-end bg-[rgba(37,39,52,.95)]">
                            <img className="h-[90%] rounded-t-lg mx-auto" src={chat} alt="" />
                        </div>
                    </div>
                    <div className="p-3">
                        <h1 className="mb-2 text-[18px]">Chatting App | Private Chat and Group Chat</h1>
                        <div className="flex items-start mb-3">
                            <FaLaptopCode className="mr-3" size={20}/><span className="text-[15px]"> Reactjs, ReduxToolkit, TailwindCss, Nodejs | Express and MongoDB </span>
                        </div>
                        <a className="inline-block" href='https://github.com/Aung-Zaw-Phyo/chat-app-client' target="_blank" rel="noopener noreferrer">
                            <button className="flex items-center">
                                <BsGithub className="mr-2"/>
                                <span className="text-[16px]">Chat App</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
