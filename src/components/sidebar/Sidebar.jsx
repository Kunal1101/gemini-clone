import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <img className="menu" src={assets.menu_icon} alt="Menu-icon" />
        <div className="new-chat">
          <img className="menu" src={assets.plus_icon} alt="Plus-icon" />
          <p>New Chat</p>
        </div>
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
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img
            className="menu"
            src={assets.question_icon}
            alt="Question-icon"
          />
          <p>Help</p>
        </div>
        <div className="bottom-item recent-entry">
          <img className="menu" src={assets.history_icon} alt="History-icon" />
          <p>Activities</p>
        </div>
        <div className="bottom-item recent-entry">
          <img className="menu" src={assets.setting_icon} alt="Setting-icon" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
