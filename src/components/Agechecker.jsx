import React, { useState } from 'react';

const Agechecker =()=>{
    const [age,Setage] =useState(0)
  
    const changeHandler = (e) =>{
      Setage(e.target.value)
    }
  
    const submitHandler = () =>{
      if (age < 18){
        alert("you are no eligible to vote")
      }else
      {
        alert("you can vote now")
      }
    }
  
  return(
    <div>
      <h1>Age checker</h1>
      <input type ="text" value={age}onChange ={changeHandler}/>
      <button onClick={submitHandler}>submit</button>
    </div>
  )
  }
  export default Agechecker;
  