import React, {useContext} from 'react'
import PageGenerator from '../components/PageGenerator'
import { UserInputContext } from '../contexts/UserInputContext'
import { CMSKit } from '../data/CMSKit'

export default function AgePage() {
  const {age, setAge} = useContext(UserInputContext)
  const data = CMSKit.age

  return (
    <div>
      <PageGenerator 
        data={data}
        stateGetter={age}
        stateSetter={setAge}
      />
    </div>
  )
}