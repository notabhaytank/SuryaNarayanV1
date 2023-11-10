import React from 'react';
import toogle from '../assets/tooglewhite.svg'

const Header = (props) => (
    <header className="justify-center fixed z-50 items-center self-stretch border-b-[color:var(--light-mode-stroke,#D7DDE4)] bg-white flex w-full flex-col h-12 px-5 border-b  border-solid max-lg:max-w-full  max-lg:px-[16px]">
        <div className="self-center  h-12  w-[358px]  lg:w-[1200px]   ">
            <div className="flex  max-lg:gap-0">

                <div className="flex justify-center items-start px-4 lg:px-10 border-l  h-12 border-solid  border-r-[color:var(--light-mode-stroke,#D7DDE4)]  border-l-[color:var(--light-mode-stroke,#D7DDE4)] border-r border-b border-b-[color:var(--light-mode-stroke,#D7DDE4)] bg-[linear-gradient(135deg,#EDF0F4_0%,#FFF_50%,#FFF_100%)] flex-col  w-[358px] lg:w-4/12 max-lg:w-full max-lg:ml-0">

                    <img src={toogle} className="h-7 align-middle " />

                </div>
                <div className="hidden lg:flex justify-end border-b border-b-[color:var(--light-mode-stroke,#D7DDE4)] self-stretch  bg-white  h-12 flex-col mx-auto  border-solid items-stretch w-3/12 max-lg:w-full max-lg:ml-0"></div>
                <div className="hidden lg:flex self-stretch border-b border-b-[color:var(--light-mode-stroke,#D7DDE4)] border-l-[color:var(--light-mode-stroke,#D7DDE4)] bg-white  h-12 mx-auto border-l border-solid flex-col items-stretch w-1/12 max-lg:w-full max-lg:ml-0"></div>
                <div className="hidden lg:flex self-stretch border-b border-b-[color:var(--light-mode-stroke,#D7DDE4)] border-r-[color:var(--light-mode-stroke,#D7DDE4)] border-l-[color:var(--light-mode-stroke,#D7DDE4)] bg-[linear-gradient(135deg,#EDF0F4_0%,#FFF_50%,#FFF_100%)]  h-12 flex-col mx-auto border-r border-solid border-l items-stretch w-4/12 max-lg:w-full max-lg:ml-0"></div>
            </div>
        </div>
    </header>
);

export default Header;