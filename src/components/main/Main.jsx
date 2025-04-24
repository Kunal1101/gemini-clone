import { React, useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

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

  const {
    onSend,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user icon" />
      </div>
      <div className="main-container">
        {showResult !== true ? (
          <>
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
          </>
        ) : (
          <div className="results">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }} />
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" onClick={() => onSend()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
