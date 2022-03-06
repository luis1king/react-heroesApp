import {useContext} from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';



//se esta pasando por props el componente <DashboardRotes mediante {children}
export const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext);

//si el usuario esta logueado, se muestra el dashboard
  return user.logged ? children : <Navigate to="/login"></Navigate>
  
}
