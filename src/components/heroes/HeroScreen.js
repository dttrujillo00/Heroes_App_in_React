import React, { useMemo } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

  const { heroId } = useParams();

  const hero = useMemo(() => getHeroesById( heroId ), [heroId])

  if (!hero) {
    return <Navigate to='/' />
  }

  const handleReturn = () => {
    window.history.back();
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;

  localStorage.setItem('lastPath', window.location.pathname)

  return (
    <div className='row mt-5'>
        <div className='col-4 animate__animated animate__fadeInLeft'>
            <img 
              src={`../assets/heroes/${heroId}.jpg`}
              alt={superhero}
              className="img-thumbnail"
            />
        </div>
        <div className='col-8'>
          <h3>{ superhero }</h3>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'> <b> Alter ego:</b> { alter_ego } </li>
            <li className='list-group-item'> <b> Publisher:</b> { publisher } </li>
            <li className='list-group-item'> <b> First appearance:</b> { first_appearance } </li>
          </ul>

          <h5>Characters</h5>
          <p>{ characters }</p>

          <button className='btn btn-outline-info' onClick={handleReturn}>
            Return
          </button>
        </div>
    </div>
  )
}
