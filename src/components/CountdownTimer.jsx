import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
    const [countdown, setCountdown] = useState(null);

    useEffect(() => {
        const targetDate = new Date('2023-09-08T02:20:00Z');
        const userTimezone = new Date().getTimezoneOffset() / 60; // Get user's timezone offset in hours
        targetDate.setHours(targetDate.getHours() + userTimezone); // Adjust target time to user's timezone

        const intervalId = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                clearInterval(intervalId);
                setCountdown(null);
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setCountdown({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    if (!countdown) {
        return null;
    }

    return (
        <div className="d-flex text-info-emphasis">
            <div className="fs-4"><span className="me-2 fs-5 text-info">Kickoff 2023 en: </span>{countdown.days} <span className="fs-6 fw-light">Días</span></div>
            <div className="ms-2 fs-4 ">{countdown.hours} <span className="fs-6 fw-light">Horas</span> </div>
            <div className="ms-2 fs-4 ">{countdown.minutes} <span className="fs-6 fw-light">Min</span> </div>
            <div className="ms-2 fs-4 text-opac-sec-timer">{countdown.seconds} <span className="fs-6 fw-light">Seg</span></div>
        </div>
    );
};

export default CountdownTimer;
