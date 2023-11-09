import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";

const UpdateJob = () => {
  const jobToBeUpdated = useLoaderData();
  console.log(jobToBeUpdated);

  const {
    _id,
    jobCategory, //array[id, type]
    bannerUrl,
    postDate,
    salary,
    submitDeadline,
    companyImgUrl,
    companyName,
    jobLocation,
    description,
    jobTitle,
    applicantsNumber, //auto 0
    postUserName, //auto logged in user
    postUserEmail, //auto loggedin user
  } = jobToBeUpdated;


   const [jobCategories, setJobCategories] = useState([])
  const [u_jobCategory, setJobCategory] = useState(jobCategory);
  const [u_bannerUrl, setBannerUrl] = useState(bannerUrl);
  // const [postDate, setPostDate] = useState(new Date());
  const [u_submitDeadline, setSubmitDeadline] = useState(submitDeadline);
  const [u_companyName, setCompanyName] = useState(companyName);
  const [u_jobLocation, setJobLocation] = useState(jobLocation);
  const [u_companyImgUrl, setCompanyImgUrl] = useState(companyImgUrl);
  const [u_description, setDescription] = useState(description);
  const [u_jobTitle, setJobTitle] = useState(jobTitle);
  const [u_salary, setSalary] = useState(salary);
  //   const applicantsNumber = 0
  //   const postDate = new Date();

  useEffect(()=>{
    fetch('https://applicruit-server.vercel.app/api/v1/job_categories')
    .then(res => res.json())
    .then(data => setJobCategories(data))
  },[])

  const updatedJob = {
     jobCategory : u_jobCategory,
    bannerUrl : u_bannerUrl,
    postDate,
    salary :u_salary,
    submitDeadline: new Date(u_submitDeadline).toISOString(),
    companyImgUrl : u_companyImgUrl,
    companyName: u_companyName,
    jobLocation: u_jobLocation,
    description: u_description,
    jobTitle: u_jobTitle,
    applicantsNumber, //auto 0
    postUserName, //auto logged in user
    postUserEmail,
  }

  const handleUpdateJob = (e) => {
    e.preventDefault();
    console.log("Update Hitted");
    console.log(updatedJob);

    fetch(`https://applicruit-server.vercel.app/jobs/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedJob),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            toast.success("Job has been updated Successfully!");
          } else {
            toast.error("Something went wrong!");
          }
        });
  };

  return (
    <form
      className="p-6 max-w-xl border border-sky-700 mx-auto my-8 "
      onSubmit={handleUpdateJob}
    >
      <h1 className="text-center text-xl font-bold mb-4">Update a job</h1>
      {/* first Row */}
      <div className="flex gap-8">
        <input
          type="text"
          defaultValue={jobTitle}
          className="w-full py-2 px-6 rounded-md border border-base-300 mb-4"
          onBlur={(e) => setJobTitle(e.target.value)}
          required
        />

        <select
          defaultValue={jobCategory}
          className="py-2 px-4 w-full rounded-md border border-base-300 mb-4"
          onBlur={(e) => {
            setJobCategory(e.target.value);
          }}
        >
          <option value="Default" disabled>
            Select
          </option>
          {jobCategories?.map((jobCategory) => (
            <option
              className="w-full"
              key={jobCategory._id}
              value={jobCategory.jobCategory}
            >
              {jobCategory.jobCategory}
            </option>
          ))}
        </select>
      </div>

      {/* Second Row */}
      <input
        type="text"
        defaultValue={bannerUrl}
        className="w-full py-2 px-6 rounded-md border border-base-900 mb-4"
        onBlur={(e) => setBannerUrl(e.target.value)}
        required
      />
      {/* 3rd Row */}

      <div className="flex gap-8 mb-4">
        <input
          type="text"
          defaultValue={salary}
          className="w-full py-2 px-6 rounded-md border border-base-900 mb-4"
          onBlur={(e) => setSalary(e.target.value)}
          required
        />

        <div className="border border-gray-300 rounded flex-1 flex flex-col">
          <p className="text-sm pl-2">Application Deadline:</p>
          <DatePicker
            showIcon
            selected={new Date(u_submitDeadline)}
            onChange={(date) => setSubmitDeadline(date)}
            dateFormat="dd/MM/yyyy"
            className="red-border"
            showYearDropdown
            scrollableMonthYearDropdown
          />
        </div>
      </div>
      {/* Another row */}
      <div className="flex gap-8">
        <input
          type="text"
          defaultValue={companyName}
          className="w-full py-2 px-6 rounded-md border border-base-300 mb-4"
          onBlur={(e) => setCompanyName(e.target.value)}
          required
        />
        <input
          type="text"
          defaultValue={jobLocation}
          className="w-full py-2 px-6 rounded-md border border-base-300 mb-4"
          onBlur={(e) => setJobLocation(e.target.value)}
          required
        />
      </div>
      <input
        type="text"
        defaultValue={companyImgUrl}
        className="w-full py-2 px-6 rounded-md border border-base-300 mb-4"
        onBlur={(e) => setCompanyImgUrl(e.target.value)}
        required
      />
      <br />
      <textarea
        rows={3}
        cols={50}
        type="textarea"
        defaultValue={description}
        className="w-2/3 py-2 px-6 rounded-md border border-base-300 "
        onBlur={(e) => setDescription(e.target.value)}
        required
      />
      <br />

      <br />
      <button
        type="submit"
        className="bg-[#171a53] dark:bg-[#454a9b] hover:bg-[#454a9b] dark:hover:bg-sky-800 text-white flex w-full justify-center rounded-md items-center gap-4 border border-base-300 py-2 px-6 drop-shadow-md"
      >
        Update
      </button>
    </form>
  );
};

export default UpdateJob;
