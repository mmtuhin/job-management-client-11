import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import {FaEye} from 'react-icons/fa'

const AppliedJobs = () => {
  const appliedJobs = useLoaderData();
  // console.log(Object.keys(appliedJobs[0]));
  // const {_id, jobId, jobCategory, bannerUrl, postDate, submitDeadline, companyImgUrl, companyName, jobLocation, description, jobTitle, postUserName, postUserEmail, cvLink, applicantName, applicantEmail} =
  const [query, setQuery] = useState("");
  console.log(query);
  return (
    <div>
      <Helmet>
        <title>Applicruit | Applied Jobs</title>
      </Helmet>
      <h1 className="text-center font-semibold my-4">Applied to {appliedJobs.length} job</h1>
      <div className="form-control w-full max-w-xs mx-4">
        <label className="label">
          <span className="label-text">Search job by category</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered rounded-full w-full max-w-xs mb-4"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto mb-8 mx-4">
        <table className="table table-xs">
          <thead>
            <tr className="bg-[#383b47] text-white">
              <th></th>
              <th>Title</th>
              <th>Category</th>
              <th>Posted By</th>
              <th>Company</th>
              <th>Post Date</th>
              <th>Deadline</th>
              <th>View Details</th>

              </tr>
          </thead>
          <tbody>
            {appliedJobs.filter(data => data.jobCategory.toLowerCase().includes(query)).map((myjob, index) => (
              <tr key={myjob._id} className="hover:bg-[#cccccc] dark:hover:bg-[#27334e]">
                <th>{index + 1}</th>
                <td>{myjob.jobTitle}</td>
                <td>{myjob.jobCategory}</td>
                <td>{myjob.postUserName}</td>
                <td>{myjob.companyName}</td>
                <td>{new Date(myjob.postDate).toLocaleDateString()}</td>
                <td>{new Date(myjob.submitDeadline).toLocaleDateString()}</td>
                <td className="text-center pl-6">
                  
                    <Link to={`/jobdetails/${myjob._id}`}><FaEye></FaEye></Link>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedJobs;
