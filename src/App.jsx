import React from "react";
import Navbar from "./component/navbar";
import SidebarHeading from "./component/SidebarHeading";
import "./App.css";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <div className="sidebar">
        <SidebarHeading />
        <Sidebar />
      </div>
    </>
  );
}

export default App;
