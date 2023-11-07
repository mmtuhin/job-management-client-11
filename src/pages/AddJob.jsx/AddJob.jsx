import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";

const AddJob = () => {
  const { user } = useAuth();
  const jobCategories = useLoaderData();
  const postUserName = user?.displayName || "Not found";
  const postUserEmail = user?.email;

  //Deadline by default 

  

  
  const [jobCategory, setJobCategory] = useState(null);
  const [bannerUrl, setBannerUrl] = useState(null);
  const [postDate, setPostDate] = useState(new Date());
  const [submitDeadline, setSubmitDeadline] = useState(new Date());
  const [companyName, setCompanyName] = useState(null);
  const [jobLocation, setJobLocation] = useState(null);
  const [companyImgUrl, setCompanyImgUrl] = useState(null);
  const [description, setDescription] = useState(null);
  const [jobTitle, setJobTitle] = useState(null);
  const applicantsNumber = 0

  const newJob = {
    jobCategory,//array[id, type]
    bannerUrl,
    postDate,
    submitDeadline,
    companyImgUrl,
    companyName,
    jobLocation,
    description,
    jobTitle,
    applicantsNumber,//auto 0
    postUserName,//auto logged in user
    postUserEmail,//auto loggedin user
  };
  console.log(newJob);

  const handleAddJob = (e) => {
    e.preventDefault();
    //post to api
    fetch("http://localhost:5000/api/v1/user/add_job", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          e.target.reset();
          toast.success("A job has been posted.");
        } else {
          toast.error("Something went wrong.");
        }
      });

  };
  return (
    <form className="p-6 max-w-xl border border-sky-700 mx-auto" onSubmit={handleAddJob}>
      <h1 className="text-center text-xl font-bold mb-4">Add a job</h1>
      {/* first Row */}
      <div className="flex gap-8">
        <input
          type="text"
          placeholder="Position"
          className="w-full py-2 px-6 rounded-md border border-base-300 mb-4"
          onBlur={(e) => setJobTitle(e.target.value)}
          required
        />

        <select defaultValue={'Default'}
          className="py-2 px-4 w-full rounded-md border border-base-300 mb-4"
          onBlur={(e) => {
            setJobCategory(e.target.value)

          }}
        >
          <option value='Default' disabled selected>
            Select
          </option>
          {jobCategories.map((jobCategory) => (
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
        placeholder="Banner URL..."
        className="w-full py-2 px-6 rounded-md border border-base-900 mb-4"
        onBlur={(e) => setBannerUrl(e.target.value)}
        required
      />
      {/* 3rd Row */}

      <div className="flex gap-8 mb-4">
        <div className="border border-gray-300 flex-1 rounded flex flex-col">
          <p className="text-sm pl-2">Job Posting Date:</p>
        <DatePicker
        showIcon
          selected={postDate}
          onChange={(date) => setPostDate(date)}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
          maxDate={new Date()}
          showYearDropdown
          
          scrollableMonthYearDropdown
        />
        </div>

        <div className="border border-gray-300 rounded flex-1 flex flex-col">
        <p className="text-sm pl-2">Application Deadline:</p>
        <DatePicker
        
        showIcon
          selected={submitDeadline}
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
          placeholder="Company"
          className="w-full py-2 px-6 rounded-md border border-base-300 mb-4"
          onBlur={(e) => setCompanyName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full py-2 px-6 rounded-md border border-base-300 mb-4"
          onBlur={(e) => setJobLocation(e.target.value)}
          required
        />
      </div>
      <input
          type="text"
          placeholder="Comapny image"
          className="w-full py-2 px-6 rounded-md border border-base-300 mb-4"
          onBlur={(e) => setCompanyImgUrl(e.target.value)}
          required
        />
        <br />
        <textarea rows={3} cols={50}
          type="textarea"
          placeholder="Job description"
          className="w-2/3 py-2 px-6 rounded-md border border-base-300 "
          onBlur={(e) => setDescription(e.target.value)}
          required
        />
        <br />

      
      <br />
      <button
        type="submit"
        className="bg-[#171a53] hover:bg-[#454a9b] text-white flex w-full justify-center rounded-md items-center gap-4 border border-base-300 py-2 px-6 drop-shadow-md"
      >
        Register
      </button>
    </form>
  );
};

export default AddJob;
