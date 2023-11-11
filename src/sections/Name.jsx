import React from 'react';
import available from '../assets/available.svg'

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

                            <span
                                className="justify-start border-b-[color:var(--light-mode-stroke,#D7DDE4)] lg:border-0 border-b border-solid dark:border-b-[#3D3D3D] dark:bg-[#161616]  h-[180px]  text-[#1265BF] text-[96px] font-extrabold whitespace-nowrap self-start dark:text-white w-full max-w-[400px]  mx-auto pl-10 py-[37px] font-InterDisplay  max-lg:text-4xl  max-lg:pl-5"
                            >
                                <span className='relative z-30 bottom-4'>Surya Narayanan.</span>
                            </span>

                            {/*<span className="  dark:bg-[#161616] relative z-30 bottom-3   lg:right-[-700px] lg:bottom-[40px] max-lg:pl-5" >*/}
                            {/*    <div>*/}
                            {/*        <span className='w-2 h-2'></span>*/}
                            {/*        <span>AVAILABLE FOR WORK</span>*/}
                            {/*    </div>*/}
                            {/*</span>*/}




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