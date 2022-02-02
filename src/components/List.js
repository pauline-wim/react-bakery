import React from "react";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";

class List extends React.Component {
  render() {
    return (
      <ul className="list-group-flush p-3 w-50">
        <li className="list-group-item p-0">
          {this.props.items.map((item) => {
            return (
              <ul className="list-group">
                <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                  {item.name}
                  <span className="badge bg-primary rounded-pill">
                    {item.price}€
                  </span>
                </li>
              </ul>
            );
          })}
        </li>
      </ul>
    );
  }
}

export default List;
