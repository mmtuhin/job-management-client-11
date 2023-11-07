import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import AllJobs from "../pages/AllJobs/AllJobs";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyJobs from "../pages/MyJobs/MyJobs";
import AddJob from "../pages/AddJob.jsx/AddJob";
import PrivateRouter from "./PrivateRouter";
import AppliedJobs from "../pages/AppliedJobs/AppliedJobs";

const router = createBrowserRouter([
    {
        path:'/',
        element: <App></App>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/api/v1/jobs')
            },
            {
                path: 'alljobs',
                element: <AllJobs></AllJobs>,
                loader: () => fetch('http://localhost:5000/api/v1/jobs')
            },
            {
                path: 'blogs',
                element: <PrivateRouter><Blogs></Blogs></PrivateRouter>
            },
            {
                path: 'login',
                element: <Login></Login>,
            },
            {
                path: 'register',
                element: <Register></Register>,
            },
            {
                path:'myjobs',
                element: <MyJobs></MyJobs>,
            },
            {
                path:'addjob',
                element: <AddJob></AddJob>,
                loader: () => fetch('http://localhost:5000/api/v1/job_categories')
            },
            {
                path:'alljobs',
                element: <AllJobs></AllJobs>,
            },
            {
                path:'appliedjobs',
                element: <AppliedJobs></AppliedJobs>
            }
        ]
    },

])

export default router