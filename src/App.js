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
      productName: "",
      price: 1,
      // onAdd: "d-none",
      // onList: "d-none",
    };

    this.selectAdd = this.selectAdd.bind(this);
    this.selectList = this.selectList.bind(this);
    this.selectPay = this.selectPay.bind(this);
    this.addItem = this.addItem.bind(this);
    this.updateProductName = this.updateProductName.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
  }

  selectAdd() {
    this.setState({ activeTab: "add" });
    // this.setState({ onList: "d-none" });
    // this.setState({ onAdd: "d-block" });
  }

  selectList() {
    this.setState({ activeTab: "list" });
    // this.setState({ onAdd: "d-none" });
    // this.setState({ onList: "d-block" });
  }

  selectPay() {
    this.setState({ activeTab: "pay" });
    // this.setState({ onAdd: "d-none" });
    // this.setState({ onList: "d-block" });
  }

  renderTab() {
    switch (this.state.activeTab) {
      case "add":
        return (
          <Add
            onChangeText={this.updateProductName}
            onChangeRange={this.updatePrice}
            price={this.state.price}
            onClick={() => {
              this.addItem(this.state.productName, this.state.price);
            }}
          />
        );
      case "list":
        return <List />;
      case "pay":
        return <Pay />;
      default:
        return "Page not found";
    }
  }

  updateProductName(e) {
    this.setState({ productName: e.target.value });
  }

  updatePrice(e) {
    this.setState({ price: e.target.value });
  }

  addItem(name, price) {
    this.setState({
      items: {
        name: name,
        price: price,
      },
    });
    console.log(this.state.items);
  }

  render() {
    return (
      <div>
        <h1>Bakery</h1>
        <Button
          isSelected={this.state.activeTab === "add"}
          onClick={this.selectAdd}
        >
          Add
        </Button>
        <Button
          isSelected={this.state.activeTab === "list"}
          onClick={this.selectList}
        >
          List
        </Button>
        <Button
          isSelected={this.state.activeTab === "pay"}
          onClick={this.selectPay}
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
