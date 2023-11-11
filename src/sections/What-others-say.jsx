import React from 'react';
import anurag from '../assets/anurag.png'
import ayush from '../assets/ayush.png'
import bhagat from '../assets/bhagat.png'

function WhatOthersSay(props) {
    return (
        <div
            className="justify-center items-start dark:border-b-[#3D3D3D] border-b-[color:var(--light-mode-stroke,#D7DDE4)] bg-white  dark:bg-[#161616]  flex w-full flex-col  border-b border-solid  "
        >
            <div
                className="items-start  w-[358px] min-w-[358px]  lg:w-[1200px] dark:border-x-[#3D3D3D]  border-r-[color:var(--light-mode-stroke,#D7DDE4)] border-l-[color:var(--light-mode-stroke,#D7DDE4)] dark:bg-[linear-gradient(102deg,#2A2A2A_0%,#242424_17.19%,#161616_100%)] bg-[linear-gradient(135deg,#EDF0F4_0%,#FFF_50%,#FFF_100%)] self-center flex  max-w-[1200px] p-10 gap-10 grow flex-col  border-r border-solid border-l max-lg:max-w-full  max-lg:px-5 "
            >
                <div className="items-start flex  max-w-full gap-2 self-start">
                    <div
                        className="text-black dark:text-white text-sm font-bold tracking-wider uppercase my-auto"
                    >
                        What others say
                    </div>
                    <div
                        className="text-black text-2xl font-bold uppercase  whitespace-nowrap"
                    >
                        👽
                    </div>
                </div>
                <div className="self-center w-full max-w-[1120px]  max-lg:max-w-full">
                    <div
                        className="gap-6 flex max-lg:flex-col max-lg:items-stretch max-lg:gap-0"
                    >
                        <div
                            className="flex flex-col items-stretch w-[33%] max-lg:w-full max-lg:ml-0"
                        >
                            <div
                                className="items-start self-stretch gap-12 dark:border-[#3D3D3D] border border-[color:var(--light-mode-stroke,#D7DDE4)] shadow-sm bg-[#F5F6F8] dark:bg-[#2B2B2B] flex w-full max-w-[360px] grow flex-col mx-auto p-6 rounded-3xl border-solid max-lg:mt-5 max-lg:px-5"
                            >
                                <div className="self-stretch text-[#575E68] dark:text-white text-[15px] leading-[23px]">
                                    Extremely hard working and a quick learner. Working with Surya
                                    has always been a good experience. If you are looking for a
                                    designer, he is the one.
                                </div>
                                <div
                                    className="items-start  flex justify-start gap-3  max-lg:pr-5"
                                >
                                    <img
                                        loading="lazy"
                                        srcSet={anurag}
                                        className="aspect-square object-contain object-center w-9 overflow-hidden self-center max-w-full my-auto"
                                    />
                                    <div className="items-start  flex flex-col">
                                        <div
                                            className="text-black dark:text-white text-base font-medium leading-6  "
                                        >
                                            Anurag Kumar
                                        </div>
                                        <div
                                            className="text-black text-sm leading-5 "
                                        >
                    <span className="text-gray-600 dark:text-[#999]">
                      Senior Product Designer at
                    </span>
                                            <span className="text-black dark:text-white"> CoinDCX</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex flex-col items-stretch w-[33%]  max-lg:w-full max-lg:ml-0"
                        >
                            <div
                                className="items-start self-stretch gap-12 border dark:border-[#3D3D3D] border-[color:var(--light-mode-stroke,#D7DDE4)] shadow-sm bg-[#F5F6F8] dark:bg-[#2B2B2B] flex w-full max-w-[360px] grow flex-col mx-auto p-6 rounded-3xl border-solid max-lg:mt-5 max-lg:px-5"
                            >
                                <div className="self-stretch text-[#575E68] dark:text-white text-[15px] leading-[23px]">
                                    It has been a pleasure working with you. Your creative thinking
                                    and way of breaking down complex user pain points into simple
                                    flows is really impressive.
                                </div>
                                <div
                                    className="items-start self-stretch flex justify-between gap-3 pr-16 max-lg:pr-5"
                                >
                                    <img
                                        loading="lazy"
                                        srcSet={ayush}
                                        className="aspect-square object-contain object-center w-9 overflow-hidden self-center max-w-full my-auto"
                                    />
                                    <div className="items-start self-stretch flex flex-col">
                                        <div
                                            className="text-black  dark:text-white text-base font-medium leading-6 self-stretch whitespace-nowrap"
                                        >
                                            Ayush Srivastava
                                        </div>
                                        <div
                                            className="text-black text-sm leading-5 self-stretch whitespace-nowrap"
                                        >
                                            <span className="text-gray-600 dark:text-[#999]">Product Designer at </span>
                                            <span className="text-black dark:text-white">Classplus</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex flex-col items-stretch w-[33%]  max-lg:w-full max-lg:ml-0"
                        >
                            <div
                                className="items-start border dark:border-[#3D3D3D] border-[color:var(--light-mode-stroke,#D7DDE4)] shadow-sm bg-[#F5F6F8] dark:bg-[#2B2B2B] flex w-full max-w-[360px] grow flex-col mx-auto p-6 rounded-3xl border-solid max-lg:mt-5 max-lg:px-5"
                            >
                                <div className="self-stretch text-[#575E68] dark:text-white text-[15px] leading-[23px]">
                                    It has been great working with Surya. He is very particular
                                    about the designs he makes, he ensures they are pixel perfect.
                                    It has been a wonderful experience working with him.
                                </div>
                                <div
                                    className="items-start self-stretch flex justify-start gap-3 mt-6 pr-20 max-lg:pr-5"
                                >
                                    <img
                                        loading="lazy"
                                        srcSet={bhagat}
                                        className="aspect-square object-contain object-center w-9 overflow-hidden self-center max-w-full my-auto"
                                    />
                                    <div className="items-start self-stretch flex flex-col">
                                        <div
                                            className="text-black dark:text-white text-base font-medium leading-6 self-stretch whitespace-nowrap"
                                        >
                                            Bhagat Singh
                                        </div>
                                        <div
                                            className="text-black  text-sm leading-5 self-stretch whitespace-nowrap"
                                        >
                                            <span className="text-gray-600 dark:text-[#999]">Full Stack Engineer at </span>
                                            <span className="text-black dark:text-white">Wify</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatOthersSay;