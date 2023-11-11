// Header.jsx
import React, { useEffect, useState } from 'react';
import Toggle from '../assets/tooglewhite.svg';
import DarkToggle from "../assets/dardtoogke.svg"; // Add your toggle icon import here

const Header = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <>
            <header className="justify-center fixed  z-50 items-center dark:bg-[linear-gradient(102deg,#2A2A2A_0%,#242424_17.19%,#161616_100%)] bg-[linear-gradient(135deg,#EDF0F4_0%,#FFF_50%,#FFF_100%)] self-stretch border-b-[color:#D7DDE4] dark:border-b-[#3D3D3D] flex w-full flex-col h-12 px-5 border-b  border-solid max-lg:max-w-full  max-lg:px-[16px]">

                <div className="self-center dark:bg-[#161616]  h-12  w-[358px]  lg:w-[1200px]   ">
                    <div className="flex dark:bg-[#161616]   max-lg:gap-0">
                        <div
                            className={`flex ${theme === 'dark' ? 'bg-black' : 'bg-white'} justify-center items-start px-4 lg:px-10 border-l h-12 border-solid border-r-[color:var(--light-mode-stroke,#D7DDE4)] dark:border-x-[#3D3D3D] border-l-[color:var(--light-mode-stroke,#D7DDE4)] border-r border-b dark:border-b-[#3D3D3D] border-b-[color:var(--light-mode-stroke,#D7DDE4)] dark:bg-[#161616] flex-col w-[358px] lg:w-4/12 max-lg:w-full max-lg:ml-0`}
                        >
                                        <span onClick={handleThemeSwitch}>
                                          {theme === 'dark' ? <img src={DarkToggle} className="h-[24px] w-10 align-middle" alt="Dark Mode" /> : <img src={Toggle} className="h-[24px] w-10 align-middle" alt="Light Mode" />}

                                        </span>
                        </div>
                        <div className="hidden dark:bg-[#161616] lg:flex justify-end border-b dark:border-b-[#3D3D3D] border-b-[color:var(--light-mode-stroke,#D7DDE4)] self-stretch  bg-white  h-12 flex-col mx-auto  border-solid items-stretch w-3/12 max-lg:w-full max-lg:ml-0"></div>
                        <div className="hidden dark:bg-[#161616] lg:flex self-stretch border-b dark:border-b-[#3D3D3D] dark:bg-[linear-gradient(102deg,#2A2A2A_0%,#242424_17.19%,#161616_100%)] border-b-[color:var(--light-mode-stroke,#D7DDE4)] border-l-[color:var(--light-mode-stroke,#D7DDE4)] dark:border-l-[#3D3D3D] bg-[linear-gradient(135deg,#EDF0F4_0%,#FFF_50%,#FFF_100%)]  h-12 mx-auto border-l border-solid flex-col items-stretch w-1/12 max-lg:w-full max-lg:ml-0"></div>
                        <div className="hidden dark:bg-[#161616] lg:flex self-stretch border-b dark:border-b-[#3D3D3D] border-b-[color:var(--light-mode-stroke,#D7DDE4)] dark:border-x-[#3D3D3D] border-r-[color:var(--light-mode-stroke,#D7DDE4)] border-l-[color:var(--light-mode-stroke,#D7DDE4)]  h-12 flex-col mx-auto bg-white border-r border-solid border-l items-stretch w-4/12 "></div>
                    </div>
                </div>
                {/* Rest of your header content */}
            </header>



            {/*<header className="justify-center fixed dark:bg-black z-50 items-center  self-stretch border-b-[color:var(--light-mode-stroke,#D7DDE4)] bg-white flex w-full flex-col h-12 px-5 border-b  border-solid max-lg:max-w-full  max-lg:px-[16px]">*/}

            {/*    <div className="self-center dark:bg-black  h-12  w-[358px]  lg:w-[1200px]   ">*/}
            {/*        <div className="flex dark:bg-black   max-lg:gap-0">*/}
            {/*            <div*/}
            {/*                className={`flex ${theme === 'dark' ? 'bg-black' : 'bg-white'} justify-center items-start px-4 lg:px-10 border-l h-12 border-solid border-r-[color:var(--light-mode-stroke,#D7DDE4)] border-l-[color:var(--light-mode-stroke,#D7DDE4)] border-r border-b border-b-[color:var(--light-mode-stroke,#D7DDE4)] flex-col w-[358px] lg:w-4/12 max-lg:w-full max-lg:ml-0`}*/}
            {/*            >*/}
            {/*                            <span onClick={handleThemeSwitch}>*/}
            {/*                              {theme === 'dark' ? <img src={DarkToggle} className="h-7 align-middle" alt="Dark Mode" /> : <img src={Toggle} className="h-7 align-middle" alt="Light Mode" />}*/}

            {/*                            </span>*/}
            {/*            </div>*/}
            {/*            <div className="hidden dark:bg-black lg:flex justify-end border-b border-b-[color:var(--light-mode-stroke,#D7DDE4)] self-stretch  bg-white  h-12 flex-col mx-auto  border-solid items-stretch w-3/12 max-lg:w-full max-lg:ml-0"></div>*/}
            {/*            <div className="hidden dark:bg-black lg:flex self-stretch border-b border-b-[color:var(--light-mode-stroke,#D7DDE4)] border-l-[color:var(--light-mode-stroke,#D7DDE4)] bg-white  h-12 mx-auto border-l border-solid flex-col items-stretch w-1/12 max-lg:w-full max-lg:ml-0"></div>*/}
            {/*            <div className="hidden dark:bg-black lg:flex self-stretch border-b border-b-[color:var(--light-mode-stroke,#D7DDE4)] border-r-[color:var(--light-mode-stroke,#D7DDE4)] border-l-[color:var(--light-mode-stroke,#D7DDE4)]  h-12 flex-col mx-auto border-r border-solid border-l items-stretch w-4/12 "></div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    /!* Rest of your header content *!/*/}
            {/*</header>*/}

        </>
    );
};

export default Header;
