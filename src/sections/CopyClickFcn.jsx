import React, { useEffect, useState } from 'react';

const CopyTextOnClick = () => {
    const [isCopied, setIsCopied] = useState(false);

    const handleMobileClick = () => {
        const textToCopy = 'Your Email Address';
        navigator.clipboard.writeText(textToCopy).then(
            () => {
                console.log('Email Copied:', textToCopy);
                setIsCopied(true);

                // Reset the "copied" state after a certain time
                setTimeout(() => {
                    setIsCopied(false);
                }, 2000);
            },
            (err) => {
                console.error('Unable to Copy. Error:', err);
            }
        );
    };

    useEffect(() => {
        const divElement = document.getElementById('divToClickOnMobile');
        divElement.addEventListener('click', handleMobileClick);

        return () => {
            divElement.removeEventListener('click', handleMobileClick);
        };
    }, []);

    return (
        <div
            id="divToClickOnMobile"
            className={`border  border-[color:var(--light-mode-stroke,#D7DDE4)] shadow-sm flex lg:hidden gap-2 px-4 rounded-lg border-solid relative ${isCopied ? 'bg-green-500 text-white' : 'bg-neutral-100  text-gray-600'}`}
        >
            <div className=" text-sm font-semibold leading-5 my-3">
                {isCopied ? 'Copied!' : 'Tap to copy my email'}
            </div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/aecd3539-d3a9-42e5-b6fe-06b1fc5446b5?"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-3"
            />
        </div>
    );
};

export default CopyTextOnClick;
