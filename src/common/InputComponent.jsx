
import React, { useState } from 'react'

const InputComponent = ({ myState, changeHandler }) => {

  return (
    <div>
      <input
        type="text"
        value={myState}
        onChange={(e) => changeHandler(e.target.value)}
      />
    </div>
  );
};

export default InputComponent