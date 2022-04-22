import React from "react";
import "./style.css";
import MinFlower from "../../../assets/imgs/minflower.png";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <h4 className="welcome-title">Welcome to GreenShop</h4>
        <h2 className="main-title">
          Let’s Make a<br /> Better <span className="span">Planet</span>
        </h2>
        <p className="main-text">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use <br /> our plants to create an unique Urban Jungle. Order
          your favorite plants!
        </p>
        <button className="shop">Shop now</button>
      </div>
      <div className="right">
        <div className="con1"></div>
        <div className="con2">
          <img src={MinFlower} className="minflower" />
        </div>
        <div className="con3"></div>
        <div className="con4"></div>
        <div className="con5"></div>
      </div>
    </div>
  );
};

export default Header;
