import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlinePlus, AiFillRobot } from "react-icons/ai";
import { data } from "../Context/Context";

function Sidebar() {
  const [hamclick, setHamClick] = useState(false);
  const { history, setResultData, setRecentPrompt, setshowRes, setInput } = useContext(data);

  // Load previous chat
  const loadPrevPrompt = (chat) => {
    setRecentPrompt(chat.prompt);
    setResultData(chat.response);
    setshowRes(true);
  };

  // Start a new chat
  const handleNewChat = () => {
    setRecentPrompt("");
    setResultData("");
    setshowRes(false);
    setInput("");
  };

  // Short preview text for sidebar
  const getPreview = (text) => {
    if (!text) return "Empty message";
    let preview = text.replace(/\n/g, " ");
    if (preview.length > 60) preview = preview.slice(0, 60) + "...";
    return preview;
  };

  return (
    <div id="sidebar" className={hamclick ? "expanded" : ""}>
      <div className="sidebar-top">
        <RxHamburgerMenu id="ham" onClick={() => setHamClick((p) => !p)} />
      </div>

      
      <div className="chat-sym" onClick={handleNewChat}>
        <AiOutlinePlus />
        {hamclick && <p>New Chat</p>}
      </div>

      
      <div className="chat-history">
        {history.length === 0 ? (
          <div className="chat-empty">
            {hamclick && <p>No previous chats yet</p>}
          </div>
        ) : (
          history.map((chat, index) => (
            <div
              key={index}
              className="chat-hist"
              onClick={() => loadPrevPrompt(chat)} // Load old chat
            >
              <AiFillRobot className="robot-icon" />
              {hamclick && (
                <p className="chat-preview">{getPreview(chat.prompt)}</p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Sidebar;
