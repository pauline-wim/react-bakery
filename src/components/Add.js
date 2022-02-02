import React from "react";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";

class Add extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     productName: "",
  //     price: 1,
  //   };

  //   // this.updateProductName = this.updateProductName.bind(this);
  //   // this.updatePrice = this.updatePrice.bind(this);
  // }

  // updateProductName(e) {
  //   this.setState({ productName: e.target.value });
  // }

  // updatePrice(e) {
  //   this.setState({ price: e.target.value });
  // }

  render() {
    return (
      <form className="form-control">
        <input
          type="text"
          name=""
          id=""
          placeholder=""
          onChange={this.props.onChangeText}
        />
        <button type="submit" onClick={this.props.onClick}>
          Add
        </button>
        <label htmlFor="range">{this.props.price}</label>
        <input
          type="range"
          name="price"
          id="price"
          min={1}
          max={10}
          value={this.props.price}
          onChange={this.props.onChangeRange}
        />
      </form>
    );
  }
}

export default Add;
