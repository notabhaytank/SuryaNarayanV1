import React, { useEffect } from 'react';

const CopyTextOnKeyPress = () => {


    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.code === 'KeyC' || event.key === 'c') {
                const selection = window.getSelection();
                let textToCopy = '';
                if (selection && selection.toString().length > 0) {
                    textToCopy = selection.toString();
                } else {
                    textToCopy = 'Your Email Address';
                }
                navigator.clipboard.writeText(textToCopy).then(
                    () => {
                        console.log('Email Copied:', textToCopy);
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
            <div
                className="items-start self-center hidden lg:flex gap-2 my-auto max-lg:justify-center"
            >
                <div className="text-gray-600 text-base leading-6 self-stretch">
                    Press
                </div>
                <div
                    className="text-black text-base font-medium leading-6 self-stretch whitespace-nowrap justify-center items-center bg-gray-300 w-6 max-w-full px-1.5 py-px rounded-lg"
                >
                    C
                </div>
                <div
                    className="text-gray-600 text-base leading-6 self-stretch whitespace-nowrap"
                >
                    to copy my email
                </div>
            </div>
        </>
    );
};

export default CopyTextOnKeyPress;


