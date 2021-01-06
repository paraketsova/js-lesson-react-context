import React from 'react'
import { Link } from 'react-router-dom'

export default function ButonNext({to, currentValue, label}) {
  return (
    <Link 
      to={to} 
      className={`btn btn-secondary btn-block ${currentValue === "" && "disabled"}`}
    >
      {label}
    </Link>
  )
}
