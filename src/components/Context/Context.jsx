import React, { createContext, useState } from "react";
import { runGemini } from "../../gemini.js";

export const data = createContext();

function Context({ children }) {
  const [input, setInput] = useState("");
  const [showres, setshowRes] = useState(false);
  const [load, setLoad] = useState(false);
  const [resdata, setResultData] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [history, setHistory] = useState([]); 

  // Function to send prompt and handle response
  async function sendfunc(prompt) {
    if (!prompt.trim()) return;

    setRecentPrompt(prompt);
    setshowRes(true);
    setLoad(true);
    setInput(""); 

    try {
      const response = await runGemini(prompt);

      
      const cleanResponse = response.replace(/\*/g, "");

      setResultData(cleanResponse);
      setLoad(false);

      
      setHistory((prev) => [
        ...prev,
        { prompt, response: cleanResponse }
      ]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setLoad(false);
    }
  }

  const obj = {
    input,
    setInput,
    showres,
    setshowRes,
    load,
    setLoad,
    resdata,
    setResultData,
    sendfunc,
    recentPrompt,
    setRecentPrompt,
    history,
    setHistory,
  };

  return <data.Provider value={obj}>{children}</data.Provider>;
}

export default Context;
