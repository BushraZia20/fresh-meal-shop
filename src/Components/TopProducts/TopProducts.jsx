import React from "react";
import "./TopProducts.css";
import hr from "../../Assets/Icons/hr.svg";
import plate1 from "../../Assets/plate-1.png";
import plate2 from "../../Assets/plate-2.png";
import plate3 from "../../Assets/plate-3.png";
import empty_star from "../../Assets/Icons/star-grey.svg";
import filled_star from "../../Assets/Icons/start-filled.svg";
import cart from "../../Assets/Icons/cart-2.svg";
import cart1 from "../../Assets/Icons/cart.svg";

const TopProducts = () => {
  return (
    <div className="top_products">
      <div className="top_products_heading">
        <p>Top Products</p>
        <img src={hr} alt="" />
      </div>
      <div className="food_cards">
        <div className="card">
          <div className="card_img">
            <img
              style={{ height: "120px", width: "120px" }}
              src={plate1}
              alt=".."
            />
          </div>
          <div style={{ height: "1px", backgroundColor: "#E1E1DF" }}></div>
          <div className="card_details">
            <p className="p1">Greek Salad</p>
            <div className="stars">
              <img src={filled_star} alt="" />
              <img src={filled_star} alt="" />
              <img src={filled_star} alt="" />
              <img src={empty_star} alt="" />
              <img src={empty_star} alt="" />
            </div>
            <p className="p2">$1.25</p>
            <div className="add_to_cart">
              <div className="cart_img">
                {" "}
                <img src={cart} alt="" />
              </div>
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card_img">
            <img
              style={{ height: "120px", width: "120px" }}
              src={plate2}
              alt=""
            />
          </div>
          <div style={{ height: "1px", backgroundColor: "#E1E1DF" }}></div>
          <div className="card_details">
            <p className="p1">Greek Salad</p>
            <div className="stars">
              <img src={filled_star} alt="" />
              <img src={filled_star} alt="" />
              <img src={filled_star} alt="" />
              <img src={empty_star} alt="" />
              <img src={empty_star} alt="" />
            </div>
            <p className="p2">$1.25</p>
            <div className="add_to_cart">
              <div className="cart_img">
                {" "}
                <img src={cart1} alt="" />
              </div>
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card_img">
            {" "}
            <img
              style={{ height: "120px", width: "120px" }}
              src={plate3}
              alt=""
            />
          </div>
          <div style={{ height: "1px", backgroundColor: "#E1E1DF" }}></div>
          <div className="card_details">
            <p className="p1">Greek Salad</p>
            <div className="stars">
              <img src={filled_star} alt="" />
              <img src={filled_star} alt="" />
              <img src={filled_star} alt="" />
              <img src={empty_star} alt="" />
              <img src={empty_star} alt="" />
            </div>
            <p className="p2">$1.25</p>
            <div className="add_to_cart">
              <div className="cart_img">
                {" "}
                <img src={cart} alt="" />
              </div>
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
