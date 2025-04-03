import React, { useEffect } from "react";
import Splitting from "splitting";
import "splitting/dist/splitting.css";

const LoadingAnimation: React.FC = () => {
  useEffect(() => {
    Splitting();
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        background: "#1E1E1E",
        color: "#FFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        className="loading"
        data-splitting
        style={{
          fontSize: "6em",
          fontWeight: 500,
          display: "flex",
          letterSpacing: "4px",
        }}
      >
        ReBUY iT
      </div>
      <div>Please Wait while we are loading</div>

      <style>
        {`
          .loading .char {
            animation: jump 2.8s linear infinite;
            animation-delay: calc((var(--char-index) + 1) * 0.3s);
            animation-timing-function: ease-in-out;
            transform-origin: 50% 100%;
          }

          @keyframes jump {
            5% { transform: scale(1.2, 0.8); color: white; text-shadow: 0px 0px 1px rgba(5, 205, 45, 0.1), 0px 0px 10px rgba(5, 205, 45, 0.1); }
            12%, 13% { transform: translateY(-1em) scale(1,1.001); color: #A8FFA8; text-shadow: 0px 0px 2px rgba(5, 205, 45, 0.3), 0px 0px 20px rgba(5, 205, 45, 0.3); }
            17% { transform: translateY(0) scale(1,0.999); color: #70FF70; text-shadow: 0px 0px 3px rgba(5, 205, 45, 0.5), 0px 0px 30px rgba(5, 205, 45, 0.5); }
            22% { transform: translateY(0) scale(1.2, 0.9); color: #40FF40; text-shadow: 0px 0px 4px rgba(5, 205, 45, 0.7), 0px 0px 40px rgba(5, 205, 45, 0.7); }
            23% { transform: translateY(-1px) scale(1.1,1); color: #20FF20; text-shadow: 0px 0px 5px rgba(5, 205, 45, 0.9), 0px 0px 50px rgba(5, 205, 45, 0.9); }
            25% { transform: translateY(0) scale(1,1); color: #00FF00; text-shadow: 0px 0px 6px rgba(5, 205, 45, 1), 0px 0px 60px rgba(5, 205, 45, 1); }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingAnimation;
