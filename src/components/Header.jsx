import React from "react";
import logo from "../assets/IMAGE (10).png";

const Header = () => {
  return (
    <div>
      <header>
        <div className="container max-w-[100%] w-[95%] mx-auto">
          <div className="header-wrapper flex gap-[400px] items-center pt-[20px]">
            <ul className="flex gap-[20px] items-center">
              <li>
                <a href="">Wooden Furniture</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Stories</a>
              </li>
            </ul>
            <img src={logo} alt="" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
