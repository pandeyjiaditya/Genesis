import React, { useState, useEffect } from "react";
import "./LoadingPage.css";

const LoadingPage = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadComplete();
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div className="loading-page">
      <div className="loading-background"></div>
      {/* Genesis Logo */}
      <div className="genesis-logo-container">
        <img
          src="/assets/images/unnamed 13_layerstyle.png"
          alt="Genesis"
          className="genesis-logo-loading"
        />
      </div>
      {/* Loading Bar */}
      <div className="loading-bar-container">
        <div className="loading-bar-outer">
          <div className="loading-bar-inner">
            <div
              className="loading-bar-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <p className="loading-percentage">{progress}%</p>
      </div>
    </div>
  );
};

export default LoadingPage;
