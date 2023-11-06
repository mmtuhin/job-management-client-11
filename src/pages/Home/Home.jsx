import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";

const Home = () => {
    const {user} = useAuth()
    console.log(user);
    return (
        <div>
            <Helmet>
                <title>Applicruit | Home</title>
            </Helmet>
            <h1>This is Home Page</h1>
        </div>
    );
};

export default Home;