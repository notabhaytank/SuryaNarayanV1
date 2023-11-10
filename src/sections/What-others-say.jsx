import React from 'react';
import anurag from '../assets/anurag.png'
import ayush from '../assets/ayush.png'
import bhagat from '../assets/bhagat.png'

function WhatOthersSay(props) {
    return (
        <div
            className="justify-center items-start  border-b-[color:var(--light-mode-stroke,#D7DDE4)] bg-white flex w-full flex-col  border-b border-solid  "
        >
            <div
                className="items-start  w-[358px] min-w-[358px]  lg:w-[1200px]  border-r-[color:var(--light-mode-stroke,#D7DDE4)] border-l-[color:var(--light-mode-stroke,#D7DDE4)] bg-[linear-gradient(135deg,#EDF0F4_0%,#FFF_50%,#FFF_100%)] self-center flex  max-w-[1200px] p-10 grow flex-col  border-r border-solid border-l max-lg:max-w-full "
            >
                <div className="items-start flex w-[177px] max-w-full gap-2 self-start">
                    <div
                        className="text-black text-sm font-bold tracking-wider uppercase my-auto"
                    >
                        What others say
                    </div>
                    <div
                        className="text-black text-2xl font-bold uppercase  whitespace-nowrap"
                    >
                        👽
                    </div>
                </div>
                <div className="self-center w-full max-w-[1120px] mt-5 max-lg:max-w-full">
                    <div
                        className="gap-5 flex max-lg:flex-col max-lg:items-stretch max-lg:gap-0"
                    >
                        <div
                            className="flex flex-col items-stretch w-[33%] max-lg:w-full max-lg:ml-0"
                        >
                            <div
                                className="items-start self-stretch border border-[color:var(--light-mode-stroke,#D7DDE4)] shadow-sm bg-neutral-100 flex w-full max-w-[360px] grow flex-col mx-auto p-6 rounded-3xl border-solid max-lg:mt-5 max-lg:px-5"
                            >
                                <div className="self-stretch text-gray-600 text-base leading-6">
                                    Extremely hard working and a quick learner. Working with Surya
                                    has always been a good experience. If you are looking for a
                                    designer, he is the one.
                                </div>
                                <div
                                    className="items-start self-stretch flex justify-between gap-3 mt-6 pr-6 max-lg:pr-5"
                                >
                                    <img
                                        loading="lazy"
                                        srcSet={anurag}
                                        className="aspect-square object-contain object-center w-9 overflow-hidden self-center max-w-full my-auto"
                                    />
                                    <div className="items-start self-stretch flex flex-col">
                                        <div
                                            className="text-black text-base font-medium leading-6  "
                                        >
                                            Anurag Kumar
                                        </div>
                                        <div
                                            className="text-black text-sm leading-5 "
                                        >
                    <span className="text-gray-600">
                      Senior Product Designer at
                    </span>
                                            <span className="text-black">CoinDCX</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex flex-col items-stretch w-[33%] ml-5 max-lg:w-full max-lg:ml-0"
                        >
                            <div
                                className="items-start self-stretch border border-[color:var(--light-mode-stroke,#D7DDE4)] shadow-sm bg-neutral-100 flex w-full max-w-[360px] grow flex-col mx-auto p-6 rounded-3xl border-solid max-lg:mt-5 max-lg:px-5"
                            >
                                <div className="self-stretch text-gray-600 text-base leading-6">
                                    It has been a pleasure working with you. Your creative thinking
                                    and way of breaking down complex user pain points into simple
                                    flows is really impressive.
                                </div>
                                <div
                                    className="items-start self-stretch flex justify-between gap-3 mt-6 pr-16 max-lg:pr-5"
                                >
                                    <img
                                        loading="lazy"
                                        srcSet={ayush}
                                        className="aspect-square object-contain object-center w-9 overflow-hidden self-center max-w-full my-auto"
                                    />
                                    <div className="items-start self-stretch flex flex-col">
                                        <div
                                            className="text-black text-base font-medium leading-6 self-stretch whitespace-nowrap"
                                        >
                                            Ayush Srivastava
                                        </div>
                                        <div
                                            className="text-black text-sm leading-5 self-stretch whitespace-nowrap"
                                        >
                                            <span className="text-gray-600">Product Designer at</span>
                                            <span className="text-black">Classplus</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex flex-col items-stretch w-[33%] ml-5 max-lg:w-full max-lg:ml-0"
                        >
                            <div
                                className="items-start border border-[color:var(--light-mode-stroke,#D7DDE4)] shadow-sm bg-neutral-100 flex w-full max-w-[360px] grow flex-col mx-auto p-6 rounded-3xl border-solid max-lg:mt-5 max-lg:px-5"
                            >
                                <div className="self-stretch text-gray-600 text-base leading-6">
                                    It has been great working with Surya. He is very particular
                                    about the designs he makes, he ensures they are pixel perfect.
                                    It has been a wonderful experience working with him.
                                </div>
                                <div
                                    className="items-start self-stretch flex justify-between gap-3 mt-6 pr-20 max-lg:pr-5"
                                >
                                    <img
                                        loading="lazy"
                                        srcSet={bhagat}
                                        className="aspect-square object-contain object-center w-9 overflow-hidden self-center max-w-full my-auto"
                                    />
                                    <div className="items-start self-stretch flex flex-col">
                                        <div
                                            className="text-black text-base font-medium leading-6 self-stretch whitespace-nowrap"
                                        >
                                            Bhagat Singh
                                        </div>
                                        <div
                                            className="text-black text-sm leading-5 self-stretch whitespace-nowrap"
                                        >
                                            <span className="text-gray-600">Full Stack Engineer at</span>
                                            <span class="text-black">Wify</span>
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