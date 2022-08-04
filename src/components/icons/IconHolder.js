import React from 'react';
import "./iconHolder.css"



// const centerChild = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }

// const topEle = {
//   ...centerChild,
//   height: "3em",
//   width: "3em",
// }



const IconHolder = (props) => (
  <div className='whiteCircle'>
    {props.children}
  </div>
);


export default IconHolder;
