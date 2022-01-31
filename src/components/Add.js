import React from "react";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";

class Add extends React.Component {
  render() {
    return (
      <form className={this.props.onAdd}>
        <input type="text" name="" id="" placeholder="" />
        <button type="submit" onSubmit={this.props.onSubmit}>
          Add
        </button>
        <label htmlFor="range">{this.props.value}</label>
        <input
          type="range"
          name="price"
          id="price"
          min={this.props.min}
          max={this.props.max}
          value={this.props.value}
          onInput={this.props.onInput}
        />
      </form>
    );
  }
}

export default Add;
