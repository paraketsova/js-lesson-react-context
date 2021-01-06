import React from 'react'

export default function HomePage() {
  const imageSrc="https://images.unsplash.com/photo-1512909006721-3d6018887383?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80";

  return (
    <div>
      <img src = {imageSrc} className="img-fluid" />
      <h2>Welcome to Holiday Gift Generator.</h2>
      <p>In the spirit of holidays,
        we woukd like to help you find a gift for your loved ones.
      </p>
      <p>
        You will be able to choose age, interest and relationship 
        for the person you want to generate a gift for
      </p>
    </div>
  )
}
