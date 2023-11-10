import React from 'react';

function Footers(props) {
    return (
        <div
            className="justify-center items-start self-stretch bg-[linear-gradient(135deg,#EDF0F4_0%,#FFF_50%,#FFF_100%)] flex w-full flex-col   "
        >
            <div
                className="items-start  w-[358px]  lg:w-[1200px] self-center border-r-[color:var(--light-mode-stroke,#D7DDE4)] border-l-[color:var(--light-mode-stroke,#D7DDE4)] bg-white flex  h-12 flex-col border-r border-solid border-l max-lg:max-w-full"
            ></div>
        </div>
    );
}

export default Footers;