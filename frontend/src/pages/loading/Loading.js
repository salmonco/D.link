import React from "react";
import "./Loading.css";
import start from "../../assets/images/start.svg";

const Loading = () => {
  const max = 100;
  let current = 55;
  let percent = Math.floor((current / max) * 100);

  return (
    <>
      <div className="loading-container">
        <div className="loading-flex">
          <div className="loading-progress">
            <div className="loading-current" style={{ width: percent + "%" }} />
          </div>
          <img src={start} alt="" />
        </div>
      </div>
    </>
  );
};

export default Loading;
