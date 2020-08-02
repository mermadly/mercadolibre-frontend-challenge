import React from "react";
import "./Card.scss";
import TruckIcon from "../img/ic_shipping.png";
import { BrowserRouter as Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="Card">
      <div className="productData">
        <div className="image">
          <img src={props.obj.picture} alt="" />
        </div>
        <div className="productDetails">
          <span className="price">
            $ {props.obj.price.amount}
            {props.obj.free_shipping ? (
              <img className="truckIcon" src={TruckIcon} alt="free shipping" />
            ) : (
              ""
            )}
          </span>
          <span className="productName">{props.obj.title}</span>
        </div>
      </div>
      <div className="productLocation">{props.obj.location}</div>
    </div>
  );
};

export default Card;
