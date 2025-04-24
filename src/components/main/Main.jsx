import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
  const cardData = [
    {
      id: 1,
      sample_question: "Suggest me some good places for my next road trip",
      icon: assets.compass_icon,
    },
    {
      id: 2,
      sample_question: "Summarize me this para",
      icon: assets.bulb_icon,
    },
    {
      id: 3,
      sample_question: "Tell me some good home exercies",
      icon: assets.message_icon,
    },
    {
      id: 4,
      sample_question: "Improve the code",
      icon: assets.code_icon,
    },
  ];

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user icon" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello People,</span>
          </p>
          <p>How can i help you today?</p>
        </div>
        <div className="cards">
          {cardData.map((card) => {
            return (
              <div key={card.id} className="card">
                <p>{card.sample_question}</p>
                <img src={card.icon} alt="" />
              </div>
            );
          })}
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
