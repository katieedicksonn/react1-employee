import React from "react";

function Table(props) {
  return (
      
    // <div className="card">

    //   <div className="img-container">
    //   <div className="content row">
    //     <div className= "col">
    //     <img alt="img" src={props.picture} />
    //     </div>
    //   <div className="content col">
    //     <ul>
    //       <li>
    //         Name:{props.first} {props.last}
    //       </li>
    //       <li>
    //         Age: {props.age}
    //       </li>
    //       <li>
    //         E-mail: {props.email}
    //       </li>
    //       <li>
    //         Phone: {props.phone}
    //       </li>
    //     </ul>
    //     </div>
    //     </div>
    //   </div>
    // </div>




<div className="card">
<div className="content row">
<img alt="img" src={props.picture} />
  
<div className="content">
<p>Name:{props.first} {props.last}</p>
<p>Age: {props.age}</p>
<p>E-Mail: {props.email}</p>
<p>Phone: {props.phone}</p>
  </div>
  </div>
</div>



  );
}

export default Table;