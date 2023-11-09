import React from 'react';

function Work(props) {
    return (
        <div
                className="justify-center items-start self-stretch border-b-[color:var(--light-mode-stroke,#D7DDE4)] bg-white flex w-full flex-col px-20 border-b border-solid max-lg:max-w-full max-lg:px-5"
            >
                <div
                    className="items-start w-[358px]  lg:w-[1200px] border-r-[color:var(--light-mode-stroke,#D7DDE4)] border-l-[color:var(--light-mode-stroke,#D7DDE4)] bg-white self-center flex  max-w-[1200px] grow flex-col pl-10 pr-20 py-10 border-r border-solid border-l max-lg:max-w-full max-lg:px-5"
                >
                    <div className="items-start flex  gap-2 self-start">
                        <div
                            className="text-black text-sm font-bold tracking-wider uppercase self-center my-auto"
                        >
                            Work
                        </div>
                        <div
                            className="text-black text-2xl font-bold uppercase self-stretch whitespace-nowrap"
                        >
                            📦
                        </div>
                    </div>
                </div>
            </div>


    );
}

export default Work;