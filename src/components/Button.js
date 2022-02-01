import React from "react";
// CSS
// import "bootstrap/dist/css/bootstrap.min.css";

class Button extends React.Component {
  render() {
    return (
      <button
        className="btn border-dark m-4"
        style={{
          backgroundColor: this.props.isSelected ? "violet" : "transparent",
        }}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
