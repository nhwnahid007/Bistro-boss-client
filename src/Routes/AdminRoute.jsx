import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";
import UseAuth from "../Hooks/UseAuth";


const AdminRoute = ({children}) => {
    const {user,loading} = UseAuth()
    const [isAdmin,isAdminLoading] = UseAdmin()
    const location = useLocation()
   
    if(loading || isAdminLoading){
        return <div className="flex items-center justify-center h-screen">
        <span className="loading loading-bars w-32 "></span>
      </div>

    }

    if(user && isAdmin){
        return children
    }
return  <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default AdminRoute;