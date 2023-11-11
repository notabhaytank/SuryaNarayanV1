// CustomPopup.js
import React, { useState } from 'react';

const CustomPopup = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    return (
        <div>
            <button onClick={openPopup} className="bg-blue-500 text-white py-2 px-4 rounded">
                Open Popup
            </button>

            {isPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded">
                        <span onClick={closePopup} className="absolute top-2 right-2 cursor-pointer text-xl">&times;</span>
                        <p>This is your custom popup content.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomPopup;
