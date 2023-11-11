import React from 'react';

function Contact(props) {
    return (
        <div
            className="justify-center items-start self-stretch dark:border-b-[#3D3D3D] border-b-[color:var(--light-mode-stroke,#D7DDE4)] dark:bg-[#161616] bg-white flex w-full flex-col  border-b border-solid max-lg:max-w-full "
        >
            <div
                className="justify-center w-[358px]  lg:w-[1200px] items-center self-center dark:border-x-[#3D3D3D] border-r-[color:var(--light-mode-stroke,#D7DDE4)] border-l-[color:var(--light-mode-stroke,#D7DDE4)] dark:bg-[#161616] bg-white flex  max-w-[1200px] grow flex-col px-20 py-14 border-r border-solid border-l max-lg:max-w-full max-lg:px-5"
            >
                <div className="self-center flex  max-w-full flex-col">
                    <div
                        className="text-black justify-center text-center text-base leading-6  self-center max-lg:max-w-full"
                    >
                      <span className="text-[#575E68] dark:text-[#999]">
                        Have an interesting idea you'd like some help building?
                      </span>
                        <span className="text-black justify-center self-center dark:text-white"> Hit me up!</span>
                    </div>
                    <div className="flex justify-center self-end w-[200px] max-w-full grow flex-col ">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c49fb62-2a87-4f25-8dce-d2409097b30b?"
                            className="aspect-[18.75] object-contain object-center w-[75px] stroke-[2px] stroke-gray-300 overflow-hidden max-w-full md:self-end self-center"
                        />





                    </div>
                    <div className="flex justify-center self-center w-[200px] max-w-full grow flex-col ">

                        <div
                            className="items-start flex w-full justify-between gap-5 mt-2.5 self-end max-lg:justify-center"
                        >
                            <div
                                className="justify-center items-center dark:border-[#3D3D3D] border border-[color:var(--light-mode-stroke,#D7DDE4)] dark:bg-[#161616] bg-white flex flex-col flex-1 p-3 rounded-[250px] border-solid"
                            >
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/46ea587b-7d94-4984-b274-0b35cc0b5d48?"
                                    className="aspect-square object-contain object-center w-full overflow-hidden self-stretch"
                                />
                            </div>
                            <div
                                className="justify-center items-center dark:border-[#3D3D3D] border border-[color:var(--light-mode-stroke,#D7DDE4)] dark:bg-[#161616] bg-white flex flex-col flex-1 p-3 rounded-[250px] border-solid"
                            >
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c94121a-69b8-425d-8bfb-d77350d18f1e?"
                                    className="aspect-square object-contain object-center w-full overflow-hidden self-stretch"
                                />
                            </div>
                            <div
                                className="justify-center items-center dark:border-[#3D3D3D] border border-[color:var(--light-mode-stroke,#D7DDE4)] dark:bg-[#161616] bg-white flex flex-col flex-1 p-3 rounded-[250px] border-solid"
                            >
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d6d2b4a-ccb8-4c95-b186-daea656989a0?"
                                    className="aspect-square object-contain object-center w-full overflow-hidden self-stretch"
                                    alt=""/>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            </div>


    );
}

export default Contact;