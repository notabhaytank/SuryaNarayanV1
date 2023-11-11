import React from 'react';
import available from '../assets/availablel.svg'

function Name(props) {
    return (
            <section
                className="justify-center items-start self-stretch dark:border-b-[#3D3D3D]  border-b-[color:var(--light-mode-stroke,#D7DDE4)] pt-12 dark:bg-[#161616] bg-white flex w-full flex-col  px-20 border-b border-solid max-lg:max-w-full  max-lg:px-5"
            >
                <div className="self-center w-[358px] h-[180px]  dark:bg-[#161616] lg:w-[1200px]  ">
                    <div className=" flex max-lg:flex-col dark:bg-[#161616] max-lg:items-stretch whitespace-nowrap max-lg:gap-0">
                        <div
                              className={' flex lg:flex-row    border-l dark:border-x-[#3D3D3D] h-[180px]  dark:bg-[#161616] border-r-[color:var(--light-mode-stroke,#D7DDE4)] border-r   border-solid border-l-[color:var(--light-mode-stroke,#D7DDE4)]  bg-[linear-gradient(135deg,#EDF0F4_0%,#FFF_50%,#FFF_100%)] flex-col items-stretch w-4/12 max-lg:w-full max-lg:ml-0'}
                        >

                            <span className="flex flex-col lg:flex-row  gap-5 border-b dark:border-b-[#3D3D3D] justify-start border-b-[color:var(--light-mode-stroke,#D7DDE4)]  align-bottom my relative z-30 dark:bg-[#161616] overflow-visible h-[180px] text-[#1265BF] text-[96px] font-extrabold whitespace-nowrap self-start dark:text-white w-full max-w-[400px] mx-auto pl-10 py-[37px] font-InterDisplay max-lg:text-4xl max-lg:pl-5">
                                <span className='relative z-30 font-InterDisplay lg:bottom-4'>Surya Narayanan.</span>
                                <span className="rounded-[240px] my-auto ">
                                    <div className="available rounded-[240px] items-center text-black dark:text-white">
                                        <div className="bg-[#06CD2F] my-auto justify-center self-center align-middle flex h-2 w-2 flex-col  p-1.5 rounded-[50%]">
                                            {/* Your content inside the green circle */}
                                        </div>
                                        AVAILABLE FOR WORK
                                    </div>
                                </span>
                            </span>








                        </div>
                        <div
                            className=" justify-end   h-[180px] self-stretch dark:bg-[#161616]  bg-white flex   flex-col mx-auto  border-solid  items-stretch w-3/12  max-lg:w-full max-lg:ml-0"
                        >

                        </div>
                        <div
                            className=" self-stretch h-[180px] dark:border-l-[#3D3D3D]   border-l-[color:var(--light-mode-stroke,#D7DDE4)] dark:bg-[#161616] bg-white flex   mx-auto border-l border-solid flex-col items-stretch w-1/12  max-lg:w-full max-lg:ml-0"
                        >

                        </div>
                        <div
                            className="self-stretch h-[180px]  dark:bg-[linear-gradient(102deg,#2A2A2A_0%,#242424_17.19%,#161616_100%)] dark:border-x-[#3D3D3D] border-r-[color:var(--light-mode-stroke,#D7DDE4)] border-l-[color:var(--light-mode-stroke,#D7DDE4)] bg-[linear-gradient(135deg,#EDF0F4_0%,#FFF_50%,#FFF_100%)] flex  flex-col mx-auto border-r border-solid border-l items-stretch w-4/12 max-lg:w-full max-lg:ml-0"
                        >

                        </div>
                    </div>
                </div>
            </section>


    );
}

export default Name;