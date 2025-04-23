import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

function Sidebar() {
  const [extended, setExtended] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt="Menu-icon"
        />
        <div className="new-chat">
          <img className="menu" src={assets.plus_icon} alt="Plus-icon" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recents</p>
            <div className="recent-entry">
              <img
                className="menu"
                src={assets.message_icon}
                alt="Message-icon"
              />
              <p>What is react...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img
            className="menu"
            src={assets.question_icon}
            alt="Question-icon"
          />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img className="menu" src={assets.history_icon} alt="History-icon" />
          {extended ? <p>Activities</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img className="menu" src={assets.setting_icon} alt="Setting-icon" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
