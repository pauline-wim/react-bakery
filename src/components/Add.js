import React from "react";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";

class Add extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productName: "",
      price: 1,
    };

    this.updateProductName = this.updateProductName.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
  }

  updateProductName(e) {
    this.setState({ productName: e.target.value });
    console.log(this.state);
  }

  updatePrice(e) {
    this.setState({ price: e.target.value });
  }

  render() {
    return (
      <form className="form-control">
        <input
          type="text"
          name=""
          id=""
          placeholder=""
          onChange={this.updateProductName}
        />
        <button type="submit" onClick={this.props.onClick}>
          Add
        </button>
        <label htmlFor="range">{this.state.price}</label>
        <input
          type="range"
          name="price"
          id="price"
          min={1}
          max={10}
          value={this.state.price}
          onChange={this.updatePrice}
        />
      </form>
    );
  }
}

export default Add;
