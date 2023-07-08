import React, { useState } from 'react';


const ConfirmPassword  =() =>{
      const[passsword,setPassword] = useState('')
      const[ConfirmPassword,setConfirmPassword] = useState('')
    
      const checkPassword =()=>{
        if(passsword === ConfirmPassword)
        {
          alert("password is match")
        }
        else
        {
          alert("password do not match")
        }
      }
    
      const setFirstPassword=(e)=>{
        setPassword(e.target.value);
      };
    
      const setSecondPassword =(e)=>{
        setConfirmPassword(e.target.value);
      };
    
      return(
      
        <div>
          <div>
            <label htmlFor="password">passsword</label>
            <input type="text"  value={passsword} onChange={setFirstPassword}/>
          </div>
    
          <div>
            <label htmlFor="confirmPassword">ConfirmPassword</label>
            <input type="text" value={ConfirmPassword} onChange={setSecondPassword}/>
          </div>
          <div>
            <button onClick={checkPassword}>checkPassword</button>
          </div>
        </div>
      );
    }
    export default ConfirmPassword();