import React, { useState, useEffect } from "react";
import TruckIcon from "../img/ic_shipping.png";
import { BrowserRouter as Link } from "react-router-dom";
import "./Item.scss";

const Item = (props) => {
  const [product, setProduct] = useState({});

  const search = async () => {
    const url = `http://localhost:5000/api/items/${props.match.params.id}`;

    const respuesta = await fetch(url);
    const data = await respuesta.json();

    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    search();
  }, [props.match.params.id]);

  return (
    <div className="Item">
      {product ? (
        <div className="itemData">
          <div className="itemTop">
            <div className="itemImage">
              <img src={product.picture} alt="" />
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
            <div className="itemDescriptionText"> {product.description}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Item;
