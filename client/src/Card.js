import React from "react";
import "./Card.css";
import TruckIcon from "./TruckIcon.js";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Card">
        <img className="Image" src={this.props.image} alt="" />
        {this.props.shipping && <TruckIcon />}

        <div className="Price">
          <span>${this.props.price}</span>
        </div>
        <div className="product-title">
          <span>{this.props.title}</span>
        </div>
      </div>
    );
  }
}

export default Card;
