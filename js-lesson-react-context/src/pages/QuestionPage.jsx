import React, {useContext} from 'react'
import PageGenerator from '../components/PageGenerator'
import { UserInputContext } from '../contexts/UserInputContext'
import { CMSKit } from '../data/CMSKit'

export default function QuestionPage(props) {
  const pageName = props.match.params.pageName
  const {
    age, setAge, interest, setInterest, relationship, setRelationship
  } = useContext(UserInputContext)
  const cmsKit = CMSKit
  const data = cmsKit[pageName]
  let stateGetter, stateSetter = null
  
  if(pageName === "age") {
    stateGetter = age
    stateSetter = setAge
  } else if(pageName === "interest") {
    stateGetter = interest
    stateSetter = setInterest
  } else if(pageName === "relationship") {
    stateGetter = relationship
    stateSetter = setRelationship
  }

  return (
    <div>
      <PageGenerator
        data={data}
        stateGetter={stateGetter}
        stateSetter={stateSetter}
      />
    </div>
  )
}

