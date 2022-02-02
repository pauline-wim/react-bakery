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
    // this.handleClick = this.handleClick.bind(this);
  }

  updateProductName(e) {
    this.setState({ productName: e.target.value });
    console.log(this.state);
  }

  updatePrice(e) {
    this.setState({ price: e.target.value });
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.productName, this.state.price);
  };

  render() {
    return (
      <form>
        <input
          className="form-control"
          type="text"
          name="text"
          id="text"
          placeholder="Item"
          onChange={this.updateProductName}
        />
        <button
          className="btn btn-dark"
          type="submit"
          onClick={this.handleClick}
        >
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
