import React, {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./sections/Header.jsx";
import Name from "./sections/Name.jsx";
import Intro from "./sections/Intro.jsx";
import Work from "./sections/Work.jsx";
import Contact from "./sections/Contact.jsx";
import Footers from "./sections/Footers.jsx";
import WhatOthersSay from "./sections/What-others-say.jsx";
import toogle from './assets/tooglewhite.svg'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState("Light")

  useEffect(( ) => {
        if (theme === "dark"){
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark")
        }
  }, [theme]);


    const handleThemeSwitch = () => {
    setTheme(theme=== "dark" ? "light" : "dark");
  };



  return (
    < >
        <div className="items-start bg-white flex flex-col   ">




            <Header/>

            <header className="justify-center fixed dark:bg-black z-50 items-center  self-stretch border-b-[color:var(--light-mode-stroke,#D7DDE4)] bg-white flex w-full flex-col h-12 px-5 border-b  border-solid max-lg:max-w-full  max-lg:px-[16px]">
                <div className="self-center dark:bg-black  h-12  w-[358px]  lg:w-[1200px]   ">
                    <div className="flex dark:bg-black   max-lg:gap-0">

                        <div  className="flex dark:bg-black justify-center items-start px-4 lg:px-10 border-l  h-12 border-solid  border-r-[color:var(--light-mode-stroke,#D7DDE4)]  border-l-[color:var(--light-mode-stroke,#D7DDE4)] border-r border-b border-b-[color:var(--light-mode-stroke,#D7DDE4)] bg-white flex-col  w-[358px] lg:w-4/12 max-lg:w-full max-lg:ml-0">

                            <img onClick={handleThemeSwitch} src={toogle} className="h-7 align-middle " />

                        </div>
                        <div className="hidden dark:bg-black lg:flex justify-end border-b border-b-[color:var(--light-mode-stroke,#D7DDE4)] self-stretch  bg-white  h-12 flex-col mx-auto  border-solid items-stretch w-3/12 max-lg:w-full max-lg:ml-0"></div>
                        <div className="hidden dark:bg-black lg:flex self-stretch border-b border-b-[color:var(--light-mode-stroke,#D7DDE4)] border-l-[color:var(--light-mode-stroke,#D7DDE4)] bg-white  h-12 mx-auto border-l border-solid flex-col items-stretch w-1/12 max-lg:w-full max-lg:ml-0"></div>
                        <div className="hidden dark:bg-black lg:flex self-stretch border-b border-b-[color:var(--light-mode-stroke,#D7DDE4)] border-r-[color:var(--light-mode-stroke,#D7DDE4)] border-l-[color:var(--light-mode-stroke,#D7DDE4)]  h-12 flex-col mx-auto border-r border-solid border-l items-stretch w-4/12 "></div>
                    </div>
                </div>
            </header>
            <Name/>
            <Intro/>
            <Work/>
            <WhatOthersSay/>
            <Contact/>
            <Footers/>

        </div>




    </>
  )
}

export default App
