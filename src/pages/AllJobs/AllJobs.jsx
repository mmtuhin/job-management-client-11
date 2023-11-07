import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const AllJobs = () => {
    const allJobs = useLoaderData()
    console.log(allJobs);
    return (
        <div>
            <Helmet>
        <title>Applicruit | All Jobs</title>
      </Helmet>
            <h1>Total Jobs found: {allJobs.length} Table format</h1>
            <div className="grid grid-cols-4 gap-2">
            {
                allJobs.map(job => <h1 className="border" key={job._id}>{job.jobTitle}</h1>)
            }
            </div>
        </div>
    );
};

export default AllJobs;