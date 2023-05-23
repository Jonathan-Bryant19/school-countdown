import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date('2023-05-26T13:40:00').getTime();
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      
      const hours = (distance / (1000 * 60 * 60)).toFixed(2)
      const minutes = Math.floor((distance / (1000 * 60)))
      const seconds = Math.floor(distance / 1000);
      const milliseconds = distance;

      setTimeLeft({
        hours,
        minutes,
        seconds,
        milliseconds,
      });
    }, 1);

    return () => clearInterval(intervalId); // Clean up on component unmount.
  }, []);

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card text-center">
        <div className="card-header">
          Hunter's Summer Countdown
        </div>
        <div className="card-body">
          <h5 className="card-title">Time left until 1:40 PM on 5/26/2023</h5>
          <div className="card-text">
            <p>Hours: {timeLeft.hours}</p>
            <p>Minutes: {timeLeft.minutes}</p>
            <p>Seconds: {timeLeft.seconds}</p>
            <p>Milliseconds: {timeLeft.milliseconds}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
