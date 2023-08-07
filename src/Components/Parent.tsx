import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [parentCount, setparentCount] = useState(0);
  const [childCount, setchildCount] = useState(0);
  const changeparentcount = () => {
    setparentCount(parentCount + 1);
  };
  const changechildcount=()=>{
    setchildCount(childCount +1)
}
  return (
    <>
      This is a Parent component
      <h1>parentcount is {parentCount}</h1>
     
      <button onClick={changechildcount}>click to increase childcount</button>
      <button onClick={changeparentcount}>click to increase parentCount</button> 
      <Child count={childCount} />
    </>
  );
};

export default Parent;
