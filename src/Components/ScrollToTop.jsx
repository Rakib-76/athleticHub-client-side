import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 250) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        }

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);

    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }


    return (
        <div>
            {
                visible && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-6 right-6 btn btn-primary text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-[#321db5] transition-colors"
                    >

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                        </svg>

                    </button>
                )
            }
        </div>
    );
};

export default ScrollToTop;