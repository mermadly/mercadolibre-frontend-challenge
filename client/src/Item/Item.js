import React from "react";
import TruckIcon from "../img/ic_shipping.png";
import { BrowserRouter as Link } from "react-router-dom";
import "./Item.scss";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Item">
        {console.log(this.props.location.state.data)}
        <div className="itemData">
          <div className="itemImage">
            <img src={this.props.location.state.data.thumbnail} alt="" />
          </div>
          <div className="itemDetails">
            <div>
              <span className="estadoItem">
                {this.props.location.state.data.condition === "new"
                  ? "Nuevo "
                  : "Usado"}
              </span>
              {this.props.location.state.data.sold_quantity !== 0 ? (
                <span className="ventasItem">
                  - {this.props.location.state.data.sold_quantity} vendidos
                </span>
              ) : null}
            </div>
            <div className="itemName">
              {this.props.location.state.data.title}
            </div>
            <div className="itemPrice">
              ${this.props.location.state.data.price}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
