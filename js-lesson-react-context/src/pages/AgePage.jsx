import React, { useState } from 'react'

export default function AgePage() {

  const [age, setAge] = useState ("")

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
        />
        <label className="form-check-label" htmlFor="exampleRadios1">
          Older than 50
        </label>
      </div>         
    </div>
  )
}