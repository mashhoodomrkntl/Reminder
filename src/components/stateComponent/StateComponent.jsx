import { useState } from "react";

const StateComponent = () => {
  const [name, useName] = useState("you can update something using ");
  const [statee, useStatee] = useState(1);
  return (
    <div>
      <br />
      <br />
      <br />
      <h3>{name}</h3>
      <button onClick={() => useName("useState hook in react")}>
        click me{" "}
      </button>
      <button onClick={() => useName("useState hook in reactttttt")}>
        click me{" "} 
      </button>
      <h1>same {name}</h1>
      <button onClick={() => useName("same use state")}>click me </button>
      <button onClick={() => useStatee(statee + 1)}>{statee} </button>
      <button onClick={() => useStatee(statee - 1)}>{statee} </button>
    </div>
  );
};

export default StateComponent;
