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
        <div className="itemTop">
          <div className="itemImage">
            <img src={product.thumbnail} alt="" />
          </div>
          <div className="itemInfo">
            <div className="itemDetails">
              <span className="estadoItem">
                {product.condition === "new" ? "Nuevo " : "Usado"}
              </span>
              {product.sold_quantity !== 0 ? (
                <span className="ventasItem">
                  - {product.sold_quantity} vendidos
                </span>
              ) : null}
            </div>
            <div className="itemName">{product.title}</div>
            <div className="itemPrice">$ {product.price}</div>
            <button className="itemBuy">Comprar</button>
          </div>
        </div>
        <div className="itemDescription">
          <div className="itemDescriptionTitle">Descripción del producto</div>
          <div className="itemDescriptionText">
            {" "}
            {productDescription.plain_text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
