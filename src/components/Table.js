import React from "react";

function Table(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt="img" src={props.picture} />
      </div>
      <div className="content">
        <ul>
          <li>
            Name:{props.first} {props.last}
          </li>
          <li>
            Age: {props.age}
          </li>
          <li>
            E-mail: {props.email}
          </li>
          <li>
            Phone: {props.phone}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Table;