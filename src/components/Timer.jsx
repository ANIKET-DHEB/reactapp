import React, { useEffect,useState } from 'react';


const Timer = () => {
    const [second,setSecond] =useState(0)
    const [start,setStart] =useState(false)

useEffect(()=>{
    let interval;

   if(start){
    interval = setInterval (()=>{
        setSecond((prevSecond) => prevSecond +1);
    },[1000]);
   }
 
return () =>{ 
    clearInterval(interval);
}
},[start]);

const startHandler =()=>{
    setStart(!start)
}

const pauseHandler = () => {
    setStart(false);
  };

const resetHandler = ()=>{
    setStart(false)
    setSecond(0)
}
return(
    <div className="timer">
        <h2>Second:{second}</h2>
        <button onClick={startHandler}>Start</button>
        <button onClick={pauseHandler}>Pause</button>
        <button onClick={resetHandler}>Reset</button>
    </div>
)

}
 export default Timer;
