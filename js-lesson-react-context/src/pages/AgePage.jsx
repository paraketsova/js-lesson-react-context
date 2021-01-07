import React, { useContext } from 'react'
import RadioButton from '../components/RadioButton'
import ButtonNext from '../components/ButtonNext'
import { UserInputContext } from '../contexts/UserInputContex';

export default function AgePage() {

  const {age, setAge} = useContext(UserInputContext);

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

      <ButtonNext 
        to="/interest"
        currentValue={currentValue}
        label="Move along to interest page"
      />

    </div>
  )
}