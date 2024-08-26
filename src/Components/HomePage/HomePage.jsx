import React from "react";
import "./HomePage.css";
import Strawberry from "../../Assets/straw.png";
import LOGO from "../../Assets/Icons/logo.svg";

const HeroPage = () => {
  return (
    <div className="hero_page">
      <div className="hero_text">
        <p className="hero_p1">
          Welcome to{" "}
          <span>
            <img src={LOGO} alt="" />
          </span>
        </p>
        <h1>
          The World Best <span style={{ color: "#EEBF00" }}>Shopping</span>{" "}
          Website
        </h1>
        <p className="hero_p2" style={{ marginTop: "5px" }}>
          Lorem Ipsum simply dummy text of the pricing and typesetting industry
        </p>
        <p className="hero_p2" style={{ marginBottom: "5px" }}>
          Lorem Ipsum has been the industry's standard dummy
        </p>
        <div className="hero_btns">
          <button className="read_more" style={{ backgroundColor: "#EEBF00" }}>
            Read More
          </button>
          <button className="shop_now" style={{ backgroundColor: "black" }}>
            Shop Now
          </button>
        </div>
      </div>
      <img className="straw" src={Strawberry} alt="" />
    </div>
  );
};

export default HeroPage;
