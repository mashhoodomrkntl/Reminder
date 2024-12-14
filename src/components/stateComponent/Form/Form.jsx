import { useEffect, useState } from "react";

const Form = () => {
  const arr = ["a", "b", "c", "d", "e", 4, 4, 4];
  useEffect(() => {
    console.log("component mounted");
  },[console.log('component updated')]);
  const [state, setState] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        useEffect
      </button>
      {/* {arr.map((value) => (
        <li>{value}</li>
      ))}
      Registration form
      <br />
      <br />
      <form action="" style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="">Name</label>
        <input type="text" />
        <label htmlFor="">Age</label>
        <input type="number" />
        <label htmlFor="">Place</label>
        <input type="text" />
        <label htmlFor="">Address</label>
        <textarea name="" id=""></textarea>
        <br />
        <button>Sign up</button>
      </form> */}
    </div>
  );
};

export default Form;
