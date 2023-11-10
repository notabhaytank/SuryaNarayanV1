import React from 'react';

import thumbnail from '../assets/thumbnail.svg'
import classplus from '../assets/classplus.svg'
import mobile from '../assets/mobiles.svg'
import thumbnaild from '../assets/Thumbnaild.svg'

import mobiled from '../assets/mobiled.svg'

function Work(props) {
    return (
        <div
            className="justify-center items-start self-stretch  dark:border-b-[#3D3D3D] border-b-[color:var(--light-mode-stroke,#D7DDE4)]  dark:bg-[#161616] bg-white flex w-full flex-col  px-20 border-b border-solid max-lg:max-w-full  "
        >
            <div className="self-center w-[358px]  lg:w-[1200px] ">
                <div
                    className="items-start self-stretch border-l-[color:var(--light-mode-stroke,#D7DDE4)] border-r-[color:var(--light-mode-stroke,#D7DDE4)] border-r  dark:border-x-[#3D3D3D] dark:bg-[#161616] bg-white flex grow flex-col w-full mx-auto pb-10 px-10 border-l border-solid max-lg:max-w-full max-lg:px-5"
                >
                    <div className="items-center flex w-[78px] pt-5 max-w-full gap-2 self-start">
                        <div
                            className="text-black dark:text-white text-sm font-bold tracking-wider uppercase my-auto"
                        >
                            Work
                        </div>
                        <div
                            className="text-black text-2xl font-bold uppercase self-stretch whitespace-nowrap"
                        >
                            📦
                        </div>
                    </div>
                    <div
                        className="self-stretch  dark:border-[#3D3D3D] border border-[color:var(--light-mode-stroke,#D7DDE4)] shadow-sm bg-[#F5F6F8] dark:bg-[#2B2B2B] flex w-full justify-between gap-5 mt-5 pl-10  pt-10 pb-4 rounded-[18px] border-solid max-md:max-w-full max-md:flex-wrap  max-md:pl-5"
                    >
                        <div className="items-stretch flex gap-0 max-md:max-w-full mr-5 max-md:flex-wrap">
                            <div
                                className="items-stretch flex grow basis-[0%] flex-col max-md:max-w-full"
                            >
                                <div className="items-center flex w-[137px] max-w-full gap-2 self-start">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9b521ea-3c93-44c1-bea0-13901a48ace3?"
                                        className="aspect-[0.94] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                                    />
                                    <div
                                        className="text-pink-500 text-xl font-bold leading-6 self-stretch whitespace-nowrap"
                                    >
                                        <span className="text-neutral-800 dark:text-white">creator</span>
                                        <span className="text-pink-500">folio</span>
                                    </div>
                                </div>
                                <div className="items-stretch flex w-40 max-w-full gap-1 mt-4 self-start">
                                    <div
                                        className="text-[#575E68] dark:text-[#999] text-xs font-semibold leading-5 whitespace-nowrap justify-center items-stretch  dark:border-[#3D3D3D] border border-[color:var(--light-mode-stroke,#D7DDE4)] dark:bg-[#161616] bg-white grow px-3 py-2 rounded-lg border-solid"
                                    >
                                        Freelance
                                    </div>
                                    <div
                                        className="text-[#575E68] dark:text-[#999] text-xs font-semibold leading-5 whitespace-nowrap justify-center items-stretch border  dark:border-[#3D3D3D] border-[color:var(--light-mode-stroke,#D7DDE4)] dark:bg-[#161616] bg-white grow px-3 py-2 rounded-lg border-solid"
                                    >
                                        Sep 2023
                                    </div>
                                </div>
                                <div className="items-stretch flex flex-col mt-4 max-md:max-w-full">
                                    <div
                                        className=" text-xl dark:text-white font-extrabold leading-8 max-md:max-w-full"
                                    >
                                        Designing a media kit platform
                                    </div>
                                    <div
                                        className="text-[#575E68] dark:text-[#999] text-base leading-6 mt-2 max-md:max-w-full"
                                    >
                                        Connect your social media accounts, and generate a stunning media
                                        kit, ready to share with brands.
                                    </div>
                                </div>
                            </div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c922749-758a-4c9a-bd2f-d48c8ddde65b?"
                                className="aspect-square object-contain object-center w-12 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
                            />
                        </div>
                        <div className="bg-gray-300 self-stretch lg:hidden h-px  w-[270px]"></div>
                        <div className="bg-gray-300 self-stretch lg:flex hidden w-px  h-[270px]"></div>

                        <img


                            src={thumbnail}
                            className=" h-[348px] md:hidden  "
                        />

                        <img


                            src={thumbnaild}
                            className=" h-[348px] hidden lg:mr-10 lg: place-self-start lg:flex  "
                        />
                    </div>
                    <div
                        className="self-stretch  dark:border-[#3D3D3D] border border-[color:var(--light-mode-stroke,#D7DDE4)] shadow-sm bg-[#F5F6F8] dark:bg-[#2B2B2B] flex w-full justify-between gap-5 mt-10 pl-10  pt-10 pb-4 rounded-[18px] border-solid max-md:max-w-full max-md:flex-wrap  max-md:pl-5"
                    >
                        <div className="items-stretch flex gap-0 max-md:max-w-full mr-5 max-md:flex-wrap">
                            <div
                                className="items-stretch flex grow basis-[0%] flex-col max-md:max-w-full"
                            >
                                <div className="items-center flex w-[137px] max-w-full gap-2 self-start">
                                    <img
                                        loading="lazy"
                                        src={classplus}
                                        className="aspect-[0.94] object-contain object-center h-6 w-6 w-4 overflow-hidden shrink-0 max-w-full my-auto"
                                    />
                                    <div
                                        className="text-black dark:text-white  black text-xl font-bold leading-6 self-stretch whitespace-nowrap"
                                    >
                                        Classplus
                                    </div>
                                </div>
                                <div className="items-stretch flex w-40 max-w-full gap-1 mt-4 self-start">
                                    <div
                                        className="text-[#575E68] dark:text-[#999] text-xs font-semibold leading-5  dark:border-[#3D3D3D] whitespace-nowrap justify-center items-stretch border border-[color:var(--light-mode-stroke,#D7DDE4)] dark:bg-[#161616] bg-white grow px-3 py-2 rounded-lg border-solid"
                                    >
                                        Full Time
                                    </div>
                                    <div
                                        className="text-[#575E68] dark:text-[#999] text-xs font-semibold leading-5 whitespace-nowrap justify-center items-stretch  dark:border-[#3D3D3D] border border-[color:var(--light-mode-stroke,#D7DDE4)] dark:bg-[#161616] bg-white grow px-3 py-2 rounded-lg border-solid"
                                    >
                                        Nov 2022
                                    </div>
                                </div>
                                <div className="items-stretch flex flex-col mt-4 max-md:max-w-full">
                                    <div
                                        className="text-black dark:text-white text-2xl font-extrabold leading-8 max-md:max-w-full"
                                    >
                                        Redesigning Sales Dashboard
                                    </div>
                                    <div
                                        className="text-[#575E68] dark:text-[#999] text-base leading-6 mt-2 max-md:max-w-full"
                                    >
                                        Improved usability and dated visual look. Resulting in reducing customer tickets
                                    </div>
                                </div>
                            </div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c922749-758a-4c9a-bd2f-d48c8ddde65b?"
                                className="aspect-square object-contain object-center w-12 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
                            />
                        </div>
                        <div className="bg-gray-300 self-stretch lg:hidden h-px  w-[270px]"></div>
                        <div className="bg-gray-300 self-stretch lg:flex hidden w-px  h-[270px]"></div>

                        <img


                            src={thumbnail}
                            className=" h-[348px] md:hidden  "
                        />

                        <img


                            src={thumbnaild}
                            className=" h-[348px] hidden lg:mr-10 lg: place-self-start lg:flex  "
                        />
                    </div>
                    <div
                        className="self-stretch relative z-20  dark:border-[#3D3D3D] border border-[color:var(--light-mode-stroke,#D7DDE4)] shadow-sm bg-[#F5F6F8] dark:bg-[#2B2B2B] flex w-full justify-between gap-5 mt-10 lg:p-10  pt-10  rounded-[18px] border-solid max-md:max-w-full max-md:flex-wrap  "
                    >
                        <div className="items-stretch flex gap-0 max-md:max-w-full mr-5 ml-5 max-md:flex-wrap">
                            <div
                                className="items-stretch flex grow basis-[0%] flex-col max-md:max-w-full"
                            >
                                <div className="items-center flex w-[137px] max-w-full gap-2 self-start">
                                    <img
                                        loading="lazy"
                                        src={classplus}
                                        className="aspect-[0.94] object-contain object-center h-6 w-6 w-4 overflow-hidden shrink-0 max-w-full my-auto"
                                    />
                                    <div
                                        className="text-black dark:text-white black text-xl font-bold leading-6 self-stretch whitespace-nowrap"
                                    >
                                        Classplus
                                    </div>
                                </div>
                                <div className="items-stretch flex w-40 max-w-full gap-1 mt-4 self-start">
                                    <div
                                        className="text-[#575E68] dark:text-[#999] text-xs font-semibold leading-5 whitespace-nowrap justify-center items-stretch border  dark:border-[#3D3D3D] border-[color:var(--light-mode-stroke,#D7DDE4)] dark:bg-[#161616] bg-white grow px-3 py-2 rounded-lg border-solid"
                                    >
                                        Full Time
                                    </div>
                                    <div
                                        className="ttext-[#575E68] dark:text-[#999] text-xs font-semibold leading-5 whitespace-nowrap justify-center items-stretch border  dark:border-[#3D3D3D] border-[color:var(--light-mode-stroke,#D7DDE4)] dark:bg-[#161616] bg-white grow px-3 py-2 rounded-lg border-solid"
                                    >
                                        Dec 2022
                                    </div>
                                </div>
                                <div className="items-stretch flex flex-col mt-4 max-md:max-w-full">
                                    <div
                                        className="text-black dark:text-white text-2xl font-extrabold leading-8 max-md:max-w-full"
                                    >
                                        Year in Review 2022 Campaign
                                    </div>
                                    <div
                                        className="text-[#575E68] dark:text-[#999] text-base leading-6 mt-2 max-md:max-w-full"
                                    >
                                        Designed to build brand awareness and highlight the performance of our top educators.
                                    </div>
                                </div>
                            </div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c922749-758a-4c9a-bd2f-d48c8ddde65b?"
                                className="aspect-square object-contain object-center w-12 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
                            />
                        </div>
                        <div className="bg-gray-300 self-stretch mx-auto lg:hidden h-px  w-[270px]"></div>
                        <div className="bg-gray-300 self-stretch lg:flex hidden w-px  h-[270px]"></div>

                        <img


                            src={mobile}
                            className=" rounded-b-[18px] relative md:hidden z-10 w-[324px] overflow-hidden "
                        />
                        <img


                            src={mobiled}
                            className=" rounded-b-[18px] relative md:flex hidden z-10 w-[324px] overflow-hidden "
                        />


                    </div>
                </div>
            </div>










        </div>


    );
}

export default Work;