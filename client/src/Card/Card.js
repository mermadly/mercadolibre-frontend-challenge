import React from "react";
import "./Card.scss";
import TruckIcon from "../img/ic_shipping.png";
import { BrowserRouter as Link } from "react-router-dom";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Card">
        <div className="productData">
          <div className="image">
            <img src={this.props.obj.thumbnail} alt="" />
          </div>
          <div className="productDetails">
            <span className="price">
              $ {this.props.obj.price}
              {this.props.obj.shipping.free_shipping ? (
                <img
                  className="truckIcon"
                  src={TruckIcon}
                  alt="free shipping"
                />
              ) : (
                ""
              )}
            </span>
            <span className="productName">{this.props.obj.title}</span>
          </div>
        </div>
        <div className="productLocation">
          {this.props.obj.address.state_name}
        </div>
      </div>
    );
  }
}

export default Card;
