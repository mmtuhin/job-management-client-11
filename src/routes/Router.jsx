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
import NotFound from "../pages/NotFound/NotFound";
import JobDetails from "../pages/JobDetails/JobDetails";

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
                element: <PrivateRouter><MyJobs></MyJobs></PrivateRouter>,
            },
            {
                path:'addjob',
                element: <PrivateRouter><AddJob></AddJob></PrivateRouter>,
                loader: () => fetch('http://localhost:5000/api/v1/job_categories')
            },
            {
                path: '/jobdetails/:id',
                element: <PrivateRouter><JobDetails></JobDetails></PrivateRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/jobdetails/${params.id}`)
            },
            {
                path:'alljobs',
                element: <AllJobs></AllJobs>,
            },
            {
                path:'appliedjobs',
                element: <PrivateRouter><AppliedJobs></AppliedJobs></PrivateRouter>
            },
            
        ]
    },
    {
        path:'*',
        element:<NotFound></NotFound>
    }

])

export default router