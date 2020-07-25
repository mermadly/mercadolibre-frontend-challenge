import React from "react";
import Card from './Card.js'
import './Carousel.css'

class Carousel extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
        }
    }

  render() {
    return (
        <div className="mainContainer">
            <div className="container">
            {this.props.results.map((obj, index) =>  {
                return   <Card image={obj.thumbnail} key={index} price ={obj.price}
                shipping={obj.shipping.free_shipping}/>
            })}
            </div>
          
          </div>
    );
  }
}

export default Carousel;
