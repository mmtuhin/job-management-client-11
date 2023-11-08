import { useLoaderData } from "react-router-dom";


const AppliedJobs = () => {
    const appliedJobs = useLoaderData()
    // console.log(Object.keys(appliedJobs[0]));
    // const {_id, jobId, jobCategory, bannerUrl, postDate, submitDeadline, companyImgUrl, companyName, jobLocation, description, jobTitle, postUserName, postUserEmail, cvLink, applicantName, applicantEmail} = 
    return (
        <div>
            <h1>Applied: {appliedJobs.length} jobs found</h1>
        </div>
    );
};

export default AppliedJobs;