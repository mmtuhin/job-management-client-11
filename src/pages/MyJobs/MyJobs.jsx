import { useLoaderData } from "react-router-dom";

const MyJobs = () => {
    const myJobs = useLoaderData()
    return (
        <div>
            <h1>MyJobs Page</h1>
            <h1>Total created jobs by me: {myJobs.length}</h1>
        </div>
    );
};

export default MyJobs;