import React from "react";
import "./Start.css";

const Start = () => {
  return (
    <>
      <div className="start-container">
        <div className="start-flex">
          <p className="start-intro">
            나의 꿈을 다른사람들과
            <br />
            공유하고 소통하기
          </p>
          <p className="start-sub">
            생생한 순간의 기억을 이젠 혼자 간직하지 말고
            <br />
            다른사람들과 공유하세요!
          </p>
          <button className="start-btn">지금 바로 시작하기</button>
        </div>
      </div>
    </>
  );
};

export default Start;
