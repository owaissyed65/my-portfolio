import React, { useState } from "react";

import { projects, filters } from "../projectData";

const Portfolio = () => {
    const [selectedTag, setSelectedTag] = useState("all");
    const [projectData, setProjectData] = useState(projects);

    const filterHandler = (tag) => {
        setSelectedTag(tag);
        let filteredProjects = [];
        if (tag === "all") {
            filteredProjects = projects;
        } else {
            filteredProjects = projects.filter((p) => p.tags.includes(tag));
        }
        setProjectData(filteredProjects);
    };

    return (
        <div className="mt-10">
            {/* SECTION HEADING START */}
            <div className="mb-10">
                <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-2">
                    Latest Projects
                </div>
                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-[#CCCCCC] text-center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                </div>
            </div>
            {/* SECTION HEADING END */}

            <div className="flex justify-center gap-[10px] mb-[50px]">
                {filters.map((item, index) => (
                    <div
                        key={index}
                        className={`bg-[#252525] rounded-lg py-[10px] px-[17px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] cursor-pointer ${
                            selectedTag === item.id
                                ? "bg-[#EFB946] text-black"
                                : ""
                        }`}
                        onClick={() => filterHandler(item.id)}
                    >
                        {item.name}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-3 gap-5">
                {projectData.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col gap-4">
                            <div className="bg-black rounded-[20px] aspect-video overflow-hidden">
                                <img
                                    src={item.image}
                                    className="transition-transform hover:-translate-y-[69%] duration-5000 ease-linear"
                                />
                            </div>
                            <div className="text-[20px] 2xl:text-[34px] text-[#CCCCCC]">
                                {item.name}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Portfolio;