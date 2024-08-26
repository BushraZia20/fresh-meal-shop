import React from "react";
import "./BigDeals.css";
import hr from "../../Assets/Icons/hr.svg";
import raspberry from "../../Assets/rasberry.png";
const BigDeals = () => {
  return (
    <div className="big_deals">
      <div className="big_deals_img">
        <div className="top_products_heading bd_top">
          <p className="p1">Big Deals Of The Week</p>
          <img src={hr} alt="" />
        </div>
        <div className="deals_timer">
          <div className="timer_card">
            <p className="p1">02</p>
            <p className="p2">Days</p>
          </div>
          <div className="timer_card">
            <p className="p1">24</p>
            <p className="p2">Hours</p>
          </div>
          <div className="timer_card">
            <p className="p1">55</p>
            <p className="p2">Minutes</p>
          </div>
          <div className="timer_card">
            <p className="p1">58</p>
            <p className="p2">Seconds</p>
          </div>
        </div>
      </div>
      <div className="subscribe_now">
        <div className="subscribe_content">
          <img src={raspberry} alt="" />
          <div className="subscribe_details">
            <p className="p1">Subscribe to your newsletter</p>
            <p className="p2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, vero exercitationem obcaecati dicta enim in tenetur
              veritatis. Consequatur, ad commodi.
            </p>
            <div className="subscribe">
              <input type="text" placeholder="email@freshmeal.com" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigDeals;
