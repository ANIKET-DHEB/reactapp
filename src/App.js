
import React, { useEffect, useState } from "react";
import "./App.css";
import AgeChecker from "./components/Agechecker";
// import TodoApp from "./components/Todoapp";
// import FruitBasket from "./components/Fruitbasket";
// import Timer from "./components/Timer"
// import Switchtabs from "./components/Switchtabs";
// import ConfirmPassword from "./components/Confirmpassword";
// import Agechecker from "./components/Agechecker";
// import CharacterCounter from "./components/Charactercounter";


function App() {
  const [age, setAge] = useState(0);

  const changeHandler = (val) => {
    setAge(val);
  };

  return (
    <>
    <AgeChecker age={age} changeHandler={changeHandler} />
  </>
    
  )
  
}

export default App;