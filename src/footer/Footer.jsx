import React from "react";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/Bs";
import foot from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={foot.main_footer}>
        <h2>Help and support</h2>
        <hr />
        <div className={foot.main_content}>
          <div className={foot.left}>
            <p>Did this doc help you ?</p>
            <button>
              <BsHandThumbsUp />
            </button>
            <button>
              <BsHandThumbsDown />
            </button>
            <a href="#">Privacy policy</a>
          </div>
          <div className={foot.middle}>
            <p>Help us make these docs great!</p>
            <p>
              All GitHub docs are open source. See something that's wrong or
              unclear? Submit a pull request.
            </p>
            <button>Make a contribution</button>
            <a href="#">Learn how to contribute</a>
          </div>

          <div className={foot.rightt}>
            <p>Sill need help ?</p>
            <a href="#">Ask the GitHub Community</a>
            <a href="#">Contact support </a>
          </div>
        </div>
      </div>
      <div className={foot.legal}>
        <h4>Legal</h4>
        <div className={foot.copyright}>
          <p> &copy; {new Date().getFullYear()} GitHub,Inc.</p>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Status</a>
          <a href="#">Pricing</a>
          <a href="#">Expert services</a>
          <a href="#">Blog</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
