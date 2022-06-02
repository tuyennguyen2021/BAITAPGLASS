import React, { Component } from "react";
import dataGlasses from "./dataGlasses.json";

export default class Listglasses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listglasses: dataGlasses,
    };
  }

  changeGlasses = (imgNew) => {
    this.props.getNewGlasses(imgNew);
  };

  renderListglasses = () => {
    const { listglasses } = this.state;
    const listglassesNew = listglasses.map((item) => {
      return (
        <div className="flex-wrap" key={item.id}>
          <button onClick={() => this.changeGlasses(item.url)}>
            <img style={{ width: "100%" }} src={item.url} />
          </button>
        </div>
      );
    });
    return listglassesNew;
  };

  render() {
    return <div className="row mx-2">{this.renderListglasses()}</div>;
  }
}
