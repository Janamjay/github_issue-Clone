import React from "react";
import Navbar from "./component/navbar";
import SidebarHeading from "./component/SidebarHeading";
import "./App.css";
import Sidebar from "./component/Sidebar";
import RightSide from "./component/RightSide";

function App() {
  return (
    <>
      <Navbar />
      <div className="main_container">
        <div className="sidebar">
          <SidebarHeading />
          <Sidebar />
        </div>
        <div className="right_side">
          <RightSide />
        </div>
      </div>
    </>
  );
}

export default App;
