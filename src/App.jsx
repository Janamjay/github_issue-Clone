import React from "react";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import SidebarHeading from "./component/sidebar/SidebarHeading";
import Sidebar from "./component/sidebar/Sidebar";
import RightSide from "./component/RightSide/RightSide";

function App() {
  return (
    <>
      <Navbar />
      <div className="main_container">
        <div className="sidebar">
          <SidebarHeading/>
          <Sidebar/>
        </div>
        <div className="right_side">
          <RightSide/>
        </div>
      </div>
    </>
  );
}

export default App;
