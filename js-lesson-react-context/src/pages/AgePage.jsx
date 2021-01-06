import React, { useState } from 'react'

export default function AgePage() {

  const [age, setAge] = useState ("a");
  function handleOnChange(e) {
    setAge(e.target.value)
  }

  return (
    <div>
      <h2>Age</h2>
      <div className="form-check">
        <input 
          className="form-check-input" 
          type="radio" 
          name="age" 
          id="a" 
          value="a" 
          onChange={handleOnChange}
          defaultChecked={age === "a"}
        />
        <label className="form-check-label" htmlFor="a">
          Younger 25
        </label>
      </div> 

      <div className="form-check">
        <input 
          className="form-check-input" 
          type="radio" 
          name="age" 
          id="b" 
          value="b" 
          onChange={handleOnChange}
          defaultChecked={age === "b"}
        />
        <label className="form-check-label" htmlFor="b">
          Between 25 and 50
        </label>
      </div>  

      <div className="form-check">
        <input 
          className="form-check-input" 
          type="radio" 
          name="age" 
          id="c" 
          value="c" 
          onChange={handleOnChange}
          defaultChecked={age === "c"}
        />
        <label className="form-check-label" htmlFor="c">
          Older than 50
        </label>
      </div>         
    </div>
  )
}