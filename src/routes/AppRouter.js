import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { DashboardRoutes } from './DashboardRoutes';
import { LoginScreen } from '../components/login/LoginScreen';
import { PrivateRoute } from './privateRoute';
import { PublicRoute } from './publicRoute';

export const AppRouter = () => {
  return (
    <BrowserRouter> 
  
    <Routes>
     {/* <Route path="/login" element={<LoginScreen />} */}

     
     <Route path="/login" element={
      <PublicRoute>
      <LoginScreen />
      </PublicRoute>}/>
      
      <Route path="/*" element={
        <PrivateRoute>
        <DashboardRoutes />
        </PrivateRoute>
       } />


     {/*<Route path="/*" element={<DashboardRoutes />} />*/}



    </Routes>
    </BrowserRouter>
  )
}
