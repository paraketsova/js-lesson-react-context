import React, { useState } from 'react'

export default function AgePage() {

  const [age, setAge] = useState ("");
  function handleOnChange(e) {
    console.log(e.target.value)
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
        />
        <label className="form-check-label" htmlFor="exampleRadios1">
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
        />
        <label className="form-check-label" htmlFor="exampleRadios1">
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
        />
        <label className="form-check-label" htmlFor="exampleRadios1">
          Older than 50
        </label>
      </div>         
    </div>
  )
}