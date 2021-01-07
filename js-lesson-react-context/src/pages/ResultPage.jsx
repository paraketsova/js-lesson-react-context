import React, {useContext, useState, useEffect} from 'react'
import { UserInputContext } from '../contexts/UserInputContext'
import {GiftAI} from '../GiftAI'

export default function ResultPage() {
  const {age, interest, relationship} = useContext(UserInputContext)
  const code = `${age}${interest}${relationship}`
  const [isLoading, setIsLoading] = useState(true)

  const loadingImg = "https://media.giphy.com/media/K90ckojkohXfW/giphy.gif"
  const loadedImg = "https://media.giphy.com/media/l0HlTJY5owTDq1jKo/giphy.gif"

  useEffect(() => {
    setTimeout( () => setIsLoading(false) , 3000);
  }, [])

  function renderIsLoading() {
    return(
      <>
        <img className="img-fluid" src={loadingImg}/>
        <p>Contacting SANTA DOT AI</p>
      </>
    )
  }
  function renderIsLoaded() {
    return (
      <>
        <img className="img-fluid" src={loadedImg}/>
        <h3>You should buy: {GiftAI.calculate(code)}</h3>
      </>
    )
  }
  return (
    <div>
      <h2>Result</h2>
      <p>
        { isLoading ? renderIsLoading() : renderIsLoaded()}
      </p>
    </div>
  )
}