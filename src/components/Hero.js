import React from "react";
import me2 from './../images/me2.jpg'

const Hero = () => {
    return (
        <div className="container py-6 h-screen w-screen ">
            <div className="h-full w-full flex flex-col justify-center items-center p-4 ">
                <img className="w-[200px] h-[200px] rounded-full mx-auto mb-6" src={me2} alt="" />
                <h1 className="text-[24px] sm:text-[32px] mb-4 inline-flex ">
                    <div className="static-txt">Hi, I am </div>
                    <ul className="dynamic-txts m-0 p-0">
                        <li><span>Web Developer</span></li>
                        <li className=""><span>Aung Zaw Phyo</span></li>
                    </ul>
                </h1>
                <div className="text-[24px] sm:text-[26px] text-center mb-3">I love to create websites and learn programming.</div>
            </div>
        </div>
    );
};

export default Hero;
