import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRouter = ({children}) => {
    const {isLoading, user} = useAuth()
    if(isLoading){
        return <h1>Loading........</h1>
    }

    if(!isLoading && !user?.email){
        return <Navigate to='/login'></Navigate>
    }

    return children
};

export default PrivateRouter;