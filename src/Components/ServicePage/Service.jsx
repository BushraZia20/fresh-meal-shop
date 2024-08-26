import React from "react";
import "./Service.css";
import hr from "../../Assets/Icons/hr.svg";
import truck from "../../Assets/Icons/transport.svg";
import bag2 from "../../Assets/Icons/bag.svg";
import usd from "../../Assets/Icons/usd.svg";

const Service = () => {
  return (
    <div className="service_page">
      <div className="top_products_heading">
        <p>Services</p>
        <img src={hr} alt="" />
      </div>
      <div className="service_cards">
        <div className="s_cards">
          <div className="s_cards_img">
            <img src={truck} alt="" />
          </div>
          <p className="p1">Free Home Delivery</p>
          <p className="p2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            exercitationem harum voluptatem provident minus vel?
          </p>
          <button>Read More</button>
        </div>

        <div className="s_cards">
          <div className="s_cards_img">
            <img src={bag2} alt="" />
          </div>
          <p className="p1" style={{ color: "rgb(238, 191, 0)" }}>
            30 Days Return Services
          </p>
          <p className="p2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            harum voluptatem provident minus vel?
          </p>
          <button style={{ backgroundColor: "rgb(238, 191, 0)" }}>
            Read More
          </button>
        </div>

        <div className="s_cards">
          <div className="s_cards_img">
            <img src={usd} alt="" />
          </div>
          <p className="p1">Money Back Guaranteed</p>
          <p className="p2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            exercitationem harum voluptatem provident minus vel?
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
