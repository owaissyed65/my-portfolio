import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import flag from "../assets/paklogo.png";
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import Div from "./Div";
import { scrollTo } from "../helper";

const AboutMe = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [200, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 500], [500, 0], { clamp: false });
    return (
        <div
            id="about"
            className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <span className="sec-2-bg-gradient" />
            <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
            {/* BACKGROUND ELEMENTS END */}

            <Wrapper>
                {/* HEADING START */}
                <Div className="text-[40px] md:text-[90px] 2xl:text-[120px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
                    <span>A Web Developer</span>
                    <span className="flex items-center gap-2">
                        <span>Based</span>
                        <img
                            src={flag}
                            alt=""
                            className="w-[70px] md:w-[150px] 2xl:w-[190px] block mt-1 md:mt-2  md:mr-0 opacity-[5] border-l-2 border-solid border-[#979797] relative"
                        />
                        <span>In Pakistan</span>
                    </span>
                </Div>
                {/* HEADING END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                    Hello, everyone! My name is M. Owais, and I am a passionate developer based in Pakistan. With over 1 year of experience, I have honed my skills and become proficient in various frameworks, including MERN stack and more. My journey as a developer has been fueled by my unwavering passion and determination to turn my dreams into reality.
                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                    Speaking of dreams, I have a vision that I strive to achieve in every situation. Regardless of the challenges I face, I am committed to reaching my goals and surpassing expectations. I believe in continuous growth, which is why I'm always seeking new opportunities to expand my knowledge and expertise.
                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
                    If you are looking for a dedicated developer who can meet your requirements with precision and excellence, then look no further! I would be thrilled to collaborate with you. Let's bring your vision to life together.
                </Div>
                {/* PARAGRAPH END */}
                {/* PARAGRAPH START */}
                <br />
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
                    Please feel free to reach out to me. I eagerly await your contact and the chance to discuss how I can contribute to your projects. Thank you!" <span className="underline text-blue-700 cursor-pointer font-medium" onClick={()=>scrollTo('contact')}>Contact me now</span>
                </Div>
                {/* PARAGRAPH END */}
            </Wrapper>
        </div>
    );
};

export default AboutMe;
