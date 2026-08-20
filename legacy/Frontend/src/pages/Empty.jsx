import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

const Countdown = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      // Decrease the countdown value every second
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(countdownInterval);
  }, []); // Empty dependency array ensures the effect runs only once

  useEffect(() => {
    // Use setTimeout to reset the countdown after it reaches 0
    if (countdown === 0) {
      setTimeout(() => {
        setCountdown(5); // Reset the countdown to 5 seconds
        navigate("/RedFolderGames/")
      }, 1000); // Delay before resetting (2 seconds)
    }
  }, [countdown]); // Effect re-runs whenever countdown changes

  return (
    <div>
      <h2>{countdown}</h2>
    </div>
  );
};

function Empty () {
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '80vh' }}>
                <h1>Error 404</h1>
                <h2>What you expect to see here</h2>
                <Countdown />
            </div>
        </>
    );
}
export default Empty;
setTimeout(() => {
    console.log(456);
}, 1000);