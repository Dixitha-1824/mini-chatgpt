import React, { useContext } from "react"
import Sidebar from "./components/Sidebar/Sidebar"
import Chatsection from "./components/ChatSection/Chatsection"
import {data} from "./components/Context/Context"

function App() {
// const dataa=useContext(data);
// // console.log(dataa);


  return (
    <>
      <Sidebar/>
      <Chatsection/>

    </>
  )
}

export default App
