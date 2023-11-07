import Lottie from "lottie-react";
import errorPic from "../../assets/icons/404.json";
import { Link } from "react-router-dom";

const NotFound = () => {
    const animationStyle = {
        height: "400px", // Set the desired height
        width: "400px",  // Set the desired width
    };
    return (
        <div className="flex flex-col items-center">
            
            <Lottie animationData={errorPic} loop={true} style={animationStyle}></Lottie>
            <h1 className="text-2xl font-bold mb-5">Page Not Found</h1>
            <Link className="btn btn-primary rounded" to='/'>Go home</Link>
        </div>
    );
};

export default NotFound;