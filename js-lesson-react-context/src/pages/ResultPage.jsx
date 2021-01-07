import React, {useContext} from 'react'
import { UserInputContext } from '../contexts/UserInputContex'
import {GiftAI} from '../GiftAI'

export default function ResultPage() {
  const {age, interest, relationship} = useContext(UserInputContext);
  const code = `${age}${interest}${relationship}`

  return (
    <div>
      <h2>Result</h2>
      <p>{age}</p>
      <p>{interest}</p>
      <p>{relationship}</p>
      {code}
      <p>
        {GiftAI.calculate(code)}
      </p>
      
    </div>
  )
}
