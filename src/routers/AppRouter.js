import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from 'react-router-dom';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { AuthContext } from '../auth/AuthContext'

export const AppRouter = () => {

  const { user } = useContext(AuthContext)

  return (
    <Router>
      <div>
        <Routes>
          <Route exact 
          path='/login' 
          element={ user.logged ? (<Navigate to={'/'} />) : (<LoginScreen />) } 

          />

          <Route 
          path='*' 
          element={ user.logged ? (<DashboardRoutes />) : (<Navigate to={'/login'} />) } 
          />
        </Routes>
      </div>
    </Router>
  )
}
