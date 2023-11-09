import React from 'react';

function Name(props) {
    return (
            <section
                className="justify-center items-start self-stretch border-b-[color:var(--light-mode-stroke,#D7DDE4)] pt-12 bg-white flex w-full flex-col  px-20 border-b border-solid max-lg:max-w-full  max-lg:px-5"
            >
                <div className="self-center w-[358px]  lg:w-[1200px]  ">
                    <div className=" flex max-lg:flex-col max-lg:items-stretch max-lg:gap-0">
                        <div
                            className="flex border-l self-stretch border-r-[color:var(--light-mode-stroke,#D7DDE4)] border-r  mx-auto border-solid border-l-[color:var(--light-mode-stroke,#D7DDE4)]  bg-[linear-gradient(135deg,#EDF0F4_0%,#FFF_50%,#FFF_100%)] flex-col items-stretch w-4/12 max-lg:w-full max-lg:ml-0"
                        >

                            <div
                                className="justify-end relative z-20 text-sky-700 text-8xl font-extrabold self-stretch whitespace-nowrap items-center  w-full max-w-[400px] grow mx-auto pl-10 pt-12 pb-10  max-lg:text-4xl max-lg:pl-5"
                            >
                                Surya Narayanan.
                            </div>


                        </div>
                        <div
                            className=" justify-end   self-stretch  bg-white flex   flex-col mx-auto  border-solid  items-stretch w-3/12  max-lg:w-full max-lg:ml-0"
                        >

                        </div>
                        <div
                            className=" self-stretch  border-l-[color:var(--light-mode-stroke,#D7DDE4)] bg-white flex   mx-auto border-l border-solid flex-col items-stretch w-1/12  max-lg:w-full max-lg:ml-0"
                        >

                        </div>
                        <div
                            className="self-stretch  border-r-[color:var(--light-mode-stroke,#D7DDE4)] border-l-[color:var(--light-mode-stroke,#D7DDE4)] bg-[linear-gradient(135deg,#EDF0F4_0%,#FFF_50%,#FFF_100%)] flex  flex-col mx-auto border-r border-solid border-l items-stretch w-4/12 max-lg:w-full max-lg:ml-0"
                        >

                        </div>
                    </div>
                </div>
            </section>


    );
}

export default Name;