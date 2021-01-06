import React, { useState } from 'react'
import RadioButton from '../components/RadioButton'

export default function AgePage() {

  const [age, setAge] = useState ("");

  function handleOnChange(e) {
    setAge(e.target.value)
  }

  const pageName = "age";
  const currentValue = age;

  const pageData = [
    {value: "a", label: "Younger than 25 🐣"},
    {value: "b", label: "Between 25 and 50"},
    {value: "c", label: "Older than 50"},
  ]

  return (
    <div>
      <h2>Age</h2>

      {pageData.map((item, index) => {
        return <RadioButton key={index}
          name={pageName} value={item.value} onChange={handleOnChange} currentValue={currentValue}
          label={item.label}
        />
      })}

    </div>
  )
}