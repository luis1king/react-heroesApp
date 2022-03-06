import { useNavigate } from "react-router-dom"
import { types } from "../../types/types";
import React, {useContext} from 'react'
import { AuthContext } from '../../auth/authContext';


export const LoginScreen = () => {

    //con este hook personalizado de Router
    //Podemos navegar entre las diferenter rutas

    const navigate = useNavigate();
    const { dispatch} = useContext(AuthContext)
    

    const handleLogin = () => {
      
      const action = {
        type: types.login,
        payload: {name:"Luis"}

      }
      dispatch(action);


       navigate("/marvel", {replace: true});
    }

    return (
      <div className="container mt-5">
      <h1>LoginScreen</h1>
      <hr></hr>
      <button 
      onClick={handleLogin}
      className="btn btn-primary">Login</button>
      </div>
    )
  }