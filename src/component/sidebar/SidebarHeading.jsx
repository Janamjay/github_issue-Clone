import React from "react";
import { AiOutlineArrowLeft } from "react-icons/Ai";
import sh from "./SideBarHeading.module.css";

const SidebarHeading = () => {
  return (
      <div className={sh.main}>
        <div className={sh.heading}>
          <AiOutlineArrowLeft />
          <p className={sh.pro}>All Products</p>
        </div>
        <div className={sh.search}>
          <h3>Search</h3>
        </div>
      </div>
  );
};

export default SidebarHeading;
