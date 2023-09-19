import React, { useEffect, useState } from 'react'
import './Progressbar.css' 


const ProgressBar = ({ index, activeIndex, duration }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let interval;
        if (index === activeIndex) {
            interval = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress < 100) {
                        return prevProgress + 1;
                    }
                    clearInterval(interval);
                    return prevProgress;
                });
            }, duration / 100);
        }

        return () => {
            clearInterval(interval);
        };
    }, [duration, activeIndex, index]);

    useEffect(() => {
        setProgress(0);
    }, [activeIndex, index]);

    const isActive = index === activeIndex;

    return (
        <div className={`progress-bar-container ${isActive ? 'active' : ''}`}>
            <div className={`progress-bar ${isActive ? 'active' : ''}`} style={{ width: `${progress}%` }}></div>
        </div>
    );
};




export default ProgressBar