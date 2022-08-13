import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {

  localStorage.setItem('lastPath', window.location.pathname)
  
  return (
    <div>
        <h1>Marvel Screen</h1>
        <hr/>

        <HeroList publisher='Marvel Comics'/>
    </div>
  )
}
