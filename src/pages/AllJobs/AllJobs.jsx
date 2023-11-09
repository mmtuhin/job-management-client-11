import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import {FaEye} from 'react-icons/fa'

const AllJobs = () => {
  const allJobs = useLoaderData();
//   console.log(allJobs);
  const [query, setQuery] = useState("");
  console.log(query);
  return (
    <div>
      <Helmet>
        <title>Applicruit | All Jobs</title>
      </Helmet>
      <h1 className="text-center my-4 font-medium">Total Jobs: {allJobs.length}</h1>
      <div className="form-control w-full max-w-xs pl-4">
        <label className="label">
          <span className="label-text">Search job by title</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered rounded-xl font-semibold w-full max-w-xs mb-4"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto mb-8 px-4">
        <table className="table table-xs">
          <thead>
            <tr className="bg-[#383b47] text-white">
              <th></th>
              <th>Title</th>
              <th>Posted By</th>
              <th>Company</th>
              {/* <th>Location</th> */}
              <th>Post Date</th>
              <th>Deadline</th>
              <th>Salary</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {allJobs.filter(data => data.jobTitle.toLowerCase().includes(query)).map((myjob, index) => (
              <tr key={myjob._id} className="hover:bg-[#cccccc] dark:hover:bg-[#27334e]">
                <th>{index + 1}</th>
                <td>{myjob.jobTitle}</td>
                <td>{myjob.postUserName}</td>
                <td>{myjob.companyName}</td>
                {/* <td>{myjob.jobLocation}</td> */}
                <td>{new Date(myjob.postDate).toLocaleDateString()}</td>
                <td>{new Date(myjob.submitDeadline).toLocaleDateString()}</td>
                <td>{myjob.salary}</td>
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

export default AllJobs;
