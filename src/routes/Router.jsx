import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import AllJobs from "../pages/AllJobs/AllJobs";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path:'/',
        element: <App></App>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'alljobs',
                element: <AllJobs></AllJobs>
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'login',
                element: <Login></Login>,
            },
            {
                path: 'register',
                element: <Register></Register>,
            }
        ]
    },

])

export default router