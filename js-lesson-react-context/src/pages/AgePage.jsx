import React, { useState } from 'react'
import RadioButton from '../components/RadioButton'

export default function AgePage() {

  const [age, setAge] = useState ("");

  function handleOnChange(e) {
    setAge(e.target.value)
  }

  return (
    <div>
      <h2>Age</h2>

      <RadioButton
        name="age" value="a" onChange={handleOnChange} currentValue={age}
        label="Younger than 25 🐣"
      />

      <RadioButton
        name="age" value="b" onChange={handleOnChange} currentValue={age}
        label="Between 25 and 50"
      />

      <RadioButton
        name="age" value="c" onChange={handleOnChange} currentValue={age}
        label="Older than 50"
      />

    </div>
  )
}