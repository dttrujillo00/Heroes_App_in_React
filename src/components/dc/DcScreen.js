import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DcScreen = () => {

  localStorage.setItem('lastPath', window.location.pathname)
  
  return (
    <div>
        <h1>Dc Screen</h1>
        <hr/>

        <HeroList publisher="DC Comics"/>
    </div>
  )
}
