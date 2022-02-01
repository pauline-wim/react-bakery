import React from "react";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";

class Pay extends React.Component {
  render() {
    return (
      <div>
        <form className={this.props.onPay}>
          <input type="text" name="" id="" placeholder="Pay" />
        </form>
      </div>
    );
  }
}

export default Pay;
