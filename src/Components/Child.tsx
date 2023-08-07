import React from "react";

const Child = ({ count }) => {
  console.log("the child component is being re renderd")
  return <><h2>childCount is {count}</h2></>;
  
};

export default React.memo(Child);
