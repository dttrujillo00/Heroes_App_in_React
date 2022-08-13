import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const LoginScreen = () => {

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';
    
    // El "dispatch" recibe el "action"
    dispatch({
      type: types.login,
      payload: {
        name: 'Daniel'
      }
    })

    navigate(lastPath, { replace: true });

  }

  return (
    <div className='container mt-5'>
        <h1>Login</h1>
        <hr />

        <button
          className='btn btn-primary'
          onClick={ handleClick }
        >
          Login
        </button>
    </div>
  )
}
