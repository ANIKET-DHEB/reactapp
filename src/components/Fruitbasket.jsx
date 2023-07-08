import React, { useState } from 'react';


const fruitBasket = [
	{ id: 155, name: "mango", quantity: 5 },
  { id: 256, name: "apple", quantity: 4 },
  { id: 354, name: "banana", quantity: 12 },
	{ id: 448, name: "strawberry", quantity: 4 },
]
function App() {


  const [fruit,setfruits]=useState(fruitBasket);

  const updateQuantity =(id,increaseOrDecrease)=>{
    setfruits(previousfruits=>previousfruits.map(fruit=>{
      if(fruit.id===id)
      if (increaseOrDecrease){
        fruit.quantity +=1;
      }else{
        fruit.quantity -=1;
      }
      return fruit;
    }))
  };

  return(
    <div className="App">
      {fruit.map((fruit)=>{
        return (
          <div key={fruit.id}>
            <p>
              {fruit.name}:{fruit.quantity}
            </p>
            <button onClick={()=>updateQuantity(fruit.id,true)}>+</button>
            <button onClick={()=>updateQuantity(fruit.id,false)}>-</button>
            </div>
        );
      })};
      </div>
  );
}
 

export default App;
