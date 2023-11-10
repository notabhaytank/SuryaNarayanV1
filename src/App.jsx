import React from 'react'

import './App.css'
import Header from "./sections/Header.jsx";
import Name from "./sections/Name.jsx";
import Intro from "./sections/Intro.jsx";
import Work from "./sections/Work.jsx";
import Contact from "./sections/Contact.jsx";
import Footers from "./sections/Footers.jsx";
import WhatOthersSay from "./sections/What-others-say.jsx";



function App() {

    return (
        <>
            <div className="items-start bg-white flex flex-col  dark:bg-[#161616]  ">



                <Header/>
                <Name/>
                <Intro/>
                <Work/>
                <WhatOthersSay/>
                <Contact/>
                <Footers/>

            </div>
        </>
    );
}

export default App;
