import React from "react";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";

class List extends React.Component {
  render() {
    return (
      <div>
        <form className={this.props.onList}>
          <input type="text" name="" id="" placeholder="List" />
          <input type="text" name="" id="" placeholder="List" />
        </form>
      </div>
    );
  }
}

export default List;
