// import React, { useState } from 'react';
// import React, { useEffect, useState } from 'react';
// import InputComponent from '../common/InputComponent';

// const Agechecker =()=>{
//     const [age,Setage] =useState(0)
  
//     const changeHandler = (e) =>{
//       Setage(e.target.value)
//     }
  
//     const submitHandler = () =>{
//       if (age < 18){
//         alert("you are no eligible to vote")
//       }else
//       {
//         alert("you can vote now")
//       }
//     }
  
//   return(
//     <div>
//       <h1>Age checker</h1>
//       <input type ="text" value={age}onChange ={changeHandler}/>
//       <button onClick={submitHandler}>submit</button>
//     </div>
//   )
//   }
//   export default Agechecker;
  


import React, { useEffect, useState } from 'react';
import InputComponent from '../common/InputComponent';

const AgeChecker = () => {
  const [age, setAge] = useState(0);

  const changeHandler = (e) => {
     setAge(e.target.value)
  }

  const submitHandler = () =>{
    
  }
  return (
    <div>
      <h1>Age Checker</h1>
      <input type="text" value={age} onChange={changeHandler} />
      <button disabled={true} onClick={submitHandler}>Submit</button>
      <InputComponent myState={age} changeHandler={changeHandler} />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
}
  
export default AgeChecker;