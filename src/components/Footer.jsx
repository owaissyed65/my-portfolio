import React from "react";

import Wrapper from "./Wrapper";
import gmailIcon from "../assets/email-icon.png";
import { scrollTo } from "../helper";
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'
const Footer = () => {
    return (
        <div className="bg-[#F2F2F2] md:h-[250px] h-[300px]">
            <Wrapper>
                {/* NAVBAR START */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-5 2xl:mt-[63px] relative text-[#111111] border-t border-[#CCCCCC] py-10">
                    <div className="flex items-center gap-[6px]">
                        <div className="w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center">
                            <img src={gmailIcon} alt="" className="w-[18px]" />
                        </div>
                        <div>owaissyed65@gmail.com</div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <ul className="flex 2xl:text-[20px] gap-5 md:gap-8">
                            <li
                                className="cursor-pointer transition active:scale-90"
                                onClick={() => scrollTo("about")}
                            >
                                About me
                            </li>
                            <li
                                className="cursor-pointer transition active:scale-90"
                                onClick={() => scrollTo("skills")}
                            >
                                Skills
                            </li>
                            <li
                                className="cursor-pointer transition active:scale-90"
                                onClick={() => scrollTo("work")}
                            >
                                Work
                            </li>
                            <li
                                className="cursor-pointer transition active:scale-90"
                                onClick={() => scrollTo("contact")}
                            >
                                Contact
                            </li>
                        </ul>
                        <div className="flex gap-1 items-center">
                            <div className="text[20px]">Connect Me Through:</div>
                            <a href="https://www.linkedin.com/in/muhammad-owais-029a32244" target="_blank"><AiFillLinkedin className="flex justify-center items-center text-blue-800 cursor-pointer hover:text-blue-900" size={24} /></a>
                            <a href="https://github.com/owaissyed65" target="_blank"><AiOutlineGithub className="flex justify-center items-center text-black cursor-pointer hover:text-blue-900" size={24} /></a>
                        </div>
                    </div>
                </div>
                {/* NAVBAR END */}
            </Wrapper>
        </div>
    );
};

export default Footer;
