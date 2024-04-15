import React, { useState, useEffect } from "react";


function isMobileCode(props) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            {isMobile ? (
                <div className="h-screen flex text-center items-center justify-center bg-red-200 ">Content for mobile screens</div>
            ) : (
                <div className="h-screen flex text-center items-center justify-center bg-blue-200 ">Content for larger screens</div>
            )}
        </div>
    );
};

export default isMobileCode;