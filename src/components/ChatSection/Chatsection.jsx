import React, { useContext } from "react";
import { data } from "../Context/Context";
import Mode from "../Modes/Mode";
import { BsSendArrowUpFill } from "react-icons/bs";
import "./Chatsection.css";

function Chatsection() {
  const { sendfunc, input, setInput, showres, load, resdata, recentPrompt } = useContext(data);

  return (
    <div id="chatsec">
      <Mode />

 
      <div className="top-sec">
        {!showres ? (
          <div className="txt">
            <span>How Can I Help You??</span>
          </div>
        ) : (
          <>
            
            <div className="message user-msg">{recentPrompt}</div>

           
            {load ? (
              <div className="loader">
                <span></span><span></span><span></span>
              </div>
            ) : (
              <div className="message bot-msg">{resdata}</div>
            )}
          </>
        )}
      </div>

      
      <div className="inp">
        <input
          type="text"
          placeholder="Ask Anything"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button onClick={() => sendfunc(input)}>
          <BsSendArrowUpFill />
        </button>
      </div>
    </div>
  );
}

export default Chatsection;
