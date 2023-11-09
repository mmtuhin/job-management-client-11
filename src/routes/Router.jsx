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
import UpdateJob from "../pages/UpdateJob/UpdateJob";

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
                path:'myjobs/:email',
                element: <PrivateRouter><MyJobs></MyJobs></PrivateRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/myjobs/${params.email}`,{credentials: 'include'})
            },
            {
                path:'addjob',
                element: <PrivateRouter><AddJob></AddJob></PrivateRouter>,
                loader: () => fetch('http://localhost:5000/api/v1/job_categories')
                
            },
            {
                path: 'updateJob/:id',
                element:<PrivateRouter><UpdateJob></UpdateJob></PrivateRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/jobdetails/${params.id}`)

            },
            {
                path: 'jobdetails/:id',
                element: <PrivateRouter><JobDetails></JobDetails></PrivateRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/jobdetails/${params.id}`)
            },
            {
                path:'alljobs',
                element: <AllJobs></AllJobs>,
            },
            {
                path:'appliedjobs/:loggeduseremail',
                element: <PrivateRouter><AppliedJobs></AppliedJobs></PrivateRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/appliedjobs/${params.loggeduseremail}`, {credentials: 'include'})
            },
            
        ]
    },
    {
        path:'*',
        element:<NotFound></NotFound>
    }

])

export default router