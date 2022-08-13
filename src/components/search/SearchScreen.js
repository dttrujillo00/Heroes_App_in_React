import React, { useMemo } from 'react';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { useSearchParams } from 'react-router-dom';
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearchScreen = () => {

    localStorage.setItem('lastPath', window.location.pathname)

    const [searchParams, setSearchParams] = useSearchParams({
        q: ''
    })
    const q =searchParams.get('q');

    const [formValues, handleInputChange] = useForm( {
        searchText: q
    } )
    
    const {searchText } = formValues
    
    const heroeFiltered = useMemo(() => getHeroByName(q), [q])
    // const heroeFiltered = getHeroByName(searchText);
     
    const handleSearch = (e) => {
        e.preventDefault();
        setSearchParams({ q: searchText})
    }

  return (
    <div>
        <h1>Search Screen</h1>
        <hr />

        <div className='row'>
            <div className='col-5'>
                <h4> Search Form</h4>
                <hr />

                <form onSubmit={handleSearch}>
                    <input 
                        type="text"
                        placeholder='Find your hero'
                        className='form-control'
                        name='searchText'
                        autoComplete='off'
                        value={searchText}
                        onChange={handleInputChange}
                    />

                    <button
                    type='submit'
                    className='btn m-1 btn-block btn-outline-primary'
                    >
                        Search...
                    </button>
                </form>
            </div>
            <div className='col-7'>
                <h4>Results</h4>
                <hr />

                {
                    (q === '')
                    &&
                    <div className='alert alert-info'>
                        Search a hero
                    </div>

                }

                {
                    (q !== '' && heroeFiltered.length === 0)
                    &&
                    <div className='alert alert-danger'>
                        There is no a hero with { q }
                    </div>

                }


                {
                    heroeFiltered.map( hero => (
                        <HeroCard 
                            key={ hero.id}
                            {...hero}
                        />
                    ))
                }
            </div>
        </div>
    </div>
  )
}
