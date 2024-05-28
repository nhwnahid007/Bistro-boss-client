import { useContext } from "react";
import { AuhtContext } from "../Providers/AuthProvider";
import { Navigate, useLocation,  } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuhtContext)
    const location = useLocation()

    if(loading){
        return <div className="flex items-center justify-center h-screen">
        <span className="loading loading-bars w-32 "></span>
      </div>

    }

    if(user){
        return children
    }
return  <Navigate to='/login' state={{from:location}} replace></Navigate>
   
};

export default PrivateRoute;