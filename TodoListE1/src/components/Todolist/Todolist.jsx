import React, { useContext, useState } from "react";

import { Contexto } from "../../components/contex/contexto";

const Todolist = () => {
  const [inputValue, setInputValue] = useState("");

  const { state, dispatch } = useContext(Contexto);

  console.log(state);

  const inputValueChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>{state.data}</h1>
      {state.clear && <p>{""}</p>}
      {state.loading && <p>To-Do list</p>}
      <input onChange={inputValueChange} type="text" />
      <button
        onClick={() =>
          dispatch({ type: "informacionrecibida", payload: inputValue })
        }
      >
        Mandar la info
      </button>
      <button onClick={() => dispatch({ type: "clear" })}> borrar</button>
    </div>
  );
};

export default Todolist;
