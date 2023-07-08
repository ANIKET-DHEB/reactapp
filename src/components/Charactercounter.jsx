import React, { useState } from 'react';

const CharacterCounter = () => {
      const [inputString, setInputString] = useState('')
    
      const inputStringHandler = (e) => {
        setInputString(e.target.value)
        if(e.target.value.length > 140){
          alert('character limit exceeded')
        }
      }
    
      return (
        <div className='characterCounter'>
          <textarea value={inputString} onChange={inputStringHandler}></textarea>
          <p>{inputString.length}/140</p>
        </div>
      )
    }
    
    export default CharacterCounter