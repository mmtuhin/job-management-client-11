import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRouter = ({children}) => {
    const {isLoading, user} = useAuth()
    if(isLoading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(!isLoading && !user?.email){
        return <Navigate to='/login'></Navigate>
    }

    return children
};

export default PrivateRouter;