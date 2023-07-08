import React, { useState } from 'react';

const Home = () =>{
      return(
        <div>
    <h1>Home</h1>
    <p>Welcome Our Home</p>
        </div>
      )
    }
    
    const About =()=>{
      return(
        <div>
          <h1>About</h1>
          <p>Sam curren</p>
        </div>
      )
    }
    
    const Profile = () =>{
      return(
        <div>
          <h1>Profile</h1>
          <p>jhon cena</p>
        </div>
      )
    }
    
    const Switchtabs =()=>{
      const[tabs,setTabs]=useState("home")
    
    
    const tabsClickHandler = (tabname) =>{
      setTabs(tabname)
    }
    return(
      <div>
        <div>
    <button onClick={()=>tabsClickHandler("home")}>Home</button>
    <button onClick={()=>tabsClickHandler("about")}>About</button>
    <button onClick={()=>tabsClickHandler("profile")}>profile</button>
        </div>
        {tabs === 'home' ? <Home /> : tabs === 'about' ? <About /> : <Profile />}
      </div>
    );
    }
    
    export default Switchtabs;
    