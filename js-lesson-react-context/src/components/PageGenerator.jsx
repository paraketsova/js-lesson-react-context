import React from 'react'
import ButtonNext from './ButtonNext'
import RadioButton from './RadioButton'

export default function PageGenerator({data, stateGetter, stateSetter}) {
  
  function handleOnChange(e) {
    stateSetter(e.target.value)
  }

  return (
    <div>
      <h2>{data.heading}</h2>
      {data.alternatives.map((item, index) => {
        return (
          <RadioButton key={`${data.name}-${index}`}
            name={data.name} 
            value={item.value} 
            onChange={handleOnChange} 
            currentValue={stateGetter}
            label={item.label}
          />
        )
      })}

      <ButtonNext
        to={data.button.to}
        currentValue={stateGetter}
        label={data.button.label}
      />

    </div>
  )
}
