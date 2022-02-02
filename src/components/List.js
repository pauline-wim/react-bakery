import React from "react";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";

class List extends React.Component {
  render() {
    return (
      <ul className="list-group">
        <li className="border border-2 list-group-item">
          <ul>
            {this.props.items.map((item) => {
              return (
                <li>
                  {item.name} - {item.price} €
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    );
  }
}

export default List;
