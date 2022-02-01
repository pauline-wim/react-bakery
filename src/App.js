import React from "react";
// Components
import Button from "./components/Button";
import Add from "./components/Add";
import List from "./components/List";
import Pay from "./components/Pay";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "add",
      items: [],
      // onAdd: "d-none",
      // onList: "d-none",
    };

    this.onAdd = this.onAdd.bind(this);
    this.onList = this.onList.bind(this);
    this.onPay = this.onPay.bind(this);
  }

  onAdd() {
    this.setState({ activeTab: "add" });
    // this.setState({ onList: "d-none" });
    // this.setState({ onAdd: "d-block" });
  }

  onList() {
    this.setState({ activeTab: "list" });
    // this.setState({ onAdd: "d-none" });
    // this.setState({ onList: "d-block" });
  }

  onPay() {
    this.setState({ activeTab: "pay" });
    // this.setState({ onAdd: "d-none" });
    // this.setState({ onList: "d-block" });
  }

  renderTab() {
    switch (this.state.activeTab) {
      case "add":
        return <Add />;
      case "list":
        return <List />;
      case "pay":
        return <Pay />;
      default:
        return "Page not found";
    }
  }

  render() {
    return (
      <div>
        <h1>Bakery</h1>
        <Button
          isSelected={this.state.activeTab === "add"}
          onClick={this.onAdd}
        >
          Add
        </Button>
        <Button
          isSelected={this.state.activeTab === "list"}
          onClick={this.onList}
        >
          List
        </Button>
        <Button
          isSelected={this.state.activeTab === "pay"}
          onClick={this.onPay}
        >
          Pay
        </Button>

        {this.renderTab()}

        {/* <Add onAdd={this.state.onAdd} />
        <List onList={this.state.onList} /> */}
      </div>
    );
  }
}

export default App;
