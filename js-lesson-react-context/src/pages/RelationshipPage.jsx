import React, { useState } from 'react'
import ButtonNext from '../components/ButtonNext'
import RadioButton from '../components/RadioButton'

export default function RelationshipPage() {
  const [relationship, setRelationship] = useState ("");

  function handleOnChange(e) {
    setRelationship(e.target.value)
  }

  const pageName = "relationship";
  const currentValue = relationship;

  const pageData = [
    {value: "a", label: "Parent"},
    {value: "b", label: "Sibling"},
    {value: "c", label: "Other"},
  ]

  return (
    <div>
      <h2>Relationship</h2>

      {pageData.map((item, index) => {
        return <RadioButton key={index}
          name={pageName} value={item.value} onChange={handleOnChange} currentValue={currentValue}
          label={item.label}
        />
      })}

      <ButtonNext 
        to="/result"
        currentValue={currentValue}
        label="Lets see your result"
      />

    </div>
  )
}
