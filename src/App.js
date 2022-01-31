import React from "react";
// Components
import Add from "./components/Add";
import List from "./components/List";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onAdd: "d-none",
      onList: "d-none",
    };

    this.onAdd = this.onAdd.bind(this);
    this.onList = this.onList.bind(this);
  }

  onAdd() {
    this.setState({ onList: "d-none" });
    this.setState({ onAdd: "d-block" });
  }

  onList() {
    this.setState({ onAdd: "d-none" });
    this.setState({ onList: "d-block" });
  }

  render() {
    return (
      <div>
        <h1>Bakery</h1>
        <button onClick={this.onAdd}>Add</button>
        <button onClick={this.onList}>List</button>
        {/* <button onClick={this.onPay}>Pay</button> */}
        <Add onAdd={this.state.onAdd} />
        <List onList={this.state.onList} />
      </div>
    );
  }
}

export default App;
