import React, {useContext, useState, useEffect} from 'react'
import { UserInputContext } from '../contexts/UserInputContex'
import {GiftAI} from '../GiftAI'

export default function ResultPage() {
  const {age, interest, relationship} = useContext(UserInputContext);
  const code = `${age}${interest}${relationship}`;
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout( () => setIsLoading(false), 3000 )
  }, [])

  return (
    <div>
      <h2>Result</h2>

      <p>
        { isLoading ? "Loading" : GiftAI.calculate(code)}
      </p>
      
    </div>
  )
}
