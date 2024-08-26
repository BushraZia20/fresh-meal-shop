import React from "react";
import "./About.css";
import hr from "../../Assets/Icons/hr.svg";
import yoghurt from "../../Assets/yogurt.png";

const About = () => {
  return (
    <div className="about_us">
      <div className="top_products_heading">
        <p>About Fresh Meal</p>
        <img src={hr} alt="" />
      </div>
      <div className="about_description">
        <div className="about_img">
          <img src={yoghurt} alt="" />
        </div>
        <div className="about_details">
          <p className="p1">
            FreshMeal is a long established fact that a reader will be
            distracted
          </p>
          <p className="p2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
            reprehenderit doloribus iste facilis aspernatur asperiores, illum
            alias dolor repellendus nobis maiores quasi saepe dolore, inventore
            perferendis sequi. Ex laboriosam quasi amet? Esse animi omnis magnam
            ex optio ipsam impedit suscipit a nihil placeat odio, provident nam
            nostrum aliquid atque totam.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
