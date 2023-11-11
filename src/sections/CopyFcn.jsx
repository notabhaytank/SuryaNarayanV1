import React, { useEffect, useState } from 'react';

const CopyTextOnKeyPress = () => {
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if ((event.code === 'KeyC' || event.key === 'c') && !event.ctrlKey && !event.metaKey) {
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
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <>
            <div className="items-start self-center hidden lg:flex gap-2 my-auto max-lg:justify-center">
                <div className="text-[#575E68] dark:text-[#999] text-base leading-6 self-stretch">
                    {isCopied ? 'Email Copied!' : 'Press'}
                </div>
                <div className={`text-black text-base font-medium leading-6 self-stretch whitespace-nowrap justify-center items-center ${isCopied ? 'hidden' : 'bg-gray-300'} w-6 max-w-full px-1.5 py-px rounded-lg`}>
                    C
                </div>
                <div className="text-[#575E68] dark:text-[#999] text-base leading-6 self-stretch whitespace-nowrap">
                    {isCopied ? '' : 'to copy my email'}
                </div>
            </div>
        </>
    );
};

export default CopyTextOnKeyPress;
