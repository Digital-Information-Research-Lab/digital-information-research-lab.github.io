import React, { useRef, useEffect } from 'react';

// Custom component for auto-playing videos on intersection
const AutoPlayVideo = ({ src, width, height, ...props }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoEl = videoRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Play video when at least 50% is visible
                    videoEl.play();
                } else {
                    videoEl.pause();
                }
            },
            { threshold: 0.5 }
        );

        if (videoEl) {
            observer.observe(videoEl);
        }

        return () => {
            if (videoEl) {
                observer.unobserve(videoEl);
            }
        };
    }, []);

    return (
        <video
            ref={videoRef}
            width={width}
            height={height}
            controls
            muted
            {...props}
        >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default AutoPlayVideo;
