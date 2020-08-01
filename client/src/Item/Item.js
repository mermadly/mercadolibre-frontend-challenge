import React, { useState, useEffect } from "react";
import TruckIcon from "../img/ic_shipping.png";
import { BrowserRouter as Link } from "react-router-dom";
import "./Item.scss";

const Item = (props) => {
  const [product, setProduct] = useState({});
  const [productDescription, setProductDescription] = useState({});

  const search = () => {
    fetch(`https://api.mercadolibre.com/items/${props.match.params.id}`)
      .then((respuesta) => {
        respuesta
          .json()
          .then((info) => {
            setProduct(info);
            console.log(info);
            console.log(product);
          })
          .catch((err) => {});
      })
      .catch((err) => {});
  };

  const searchDescription = () => {
    fetch(
      `https://api.mercadolibre.com/items/${props.match.params.id}/description`
    )
      .then((respuesta) => {
        respuesta
          .json()
          .then((info) => {
            setProductDescription(info);
          })
          .catch((err) => {});
      })
      .catch((err) => {});
  };

  useEffect(() => {
    search();
    searchDescription();
  }, []);

  return (
    <div className="Item">
      <div className="itemData">
        <div className="itemImage">
          <img src={props.location.state.data.thumbnail} alt="" />
        </div>
        <div className="itemDetails">
          <div>
            <span className="estadoItem">
              {props.location.state.data.condition === "new"
                ? "Nuevo"
                : "Usado"}
            </span>
            {props.location.state.data.sold_quantity !== 0 ? (
              <span className="ventasItem">
                - {props.location.state.data.sold_quantity} vendidos
              </span>
            ) : null}
          </div>
          <div className="itemName">{props.location.state.data.title}</div>
          <div className="itemPrice">${props.location.state.data.price}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
