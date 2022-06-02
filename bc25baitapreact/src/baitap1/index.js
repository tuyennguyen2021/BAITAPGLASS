import React, { Component } from "react";
import Listglasses from "./list-glasses";

export default class Glasses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgGlasses: "./glassesImage/v1.png",
    };
  }
  getNewGlasses = (imgNew) => {
    this.setState({ imgGlasses: imgNew });
  };
  render() {
    return (
      <div className="container">
        <img
          className="position-absolute editImg"
          src={this.state.imgGlasses}
        />
        <img
          className="imgfluid position-relative"
          src="./glassesImage/model.jpg"
        />
        <div className="box">
          <Listglasses getNewGlasses={this.getNewGlasses} />
        </div>
      </div>
    );
  }
}
