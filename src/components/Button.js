import React from "react";
// CSS
// import "bootstrap/dist/css/bootstrap.min.css";

class Button extends React.Component {
  render() {
    return (
      <button
        style={{
          backgroundColor: this.props.isSelected ? "blue" : "transparent",
        }}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
