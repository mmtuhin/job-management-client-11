import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";
import toast from "react-hot-toast";

const JobDetails = () => {
  const { user } = useAuth();
  console.log(user);
  const applicantEmail = user.email;
  const applicantName = user.displayName;

  const jobData = useLoaderData();
  const {
    _id,
    jobCategory,
    bannerUrl,
    postDate,
    submitDeadline,
    companyImgUrl,
    companyName,
    jobLocation,
    description,
    jobTitle,
    postUserName,
    postUserEmail,
  } = jobData;

  const jobId = _id;
  const currentDate = new Date();
  const deadline = new Date(submitDeadline);

  console.log(applicantEmail);
  console.log(postUserEmail);

  // console.log(deadline);
  // console.log(currentDate);
  console.log(applicantEmail !== postUserEmail);

  // console.log(deadline>=currentDate || applicantEmail == postUserEmail);

  const handleApply = async () => {
    console.log("Applied");

    //const inputValue = "Enter Resume Link";
    const { value: cvLink } = await Swal.fire({
      title: applicantName || "User name",
      input: "text",
      inputPlaceholder: "Resume URL...",
      inputLabel: applicantEmail,
      // inputValue,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
      },
    });
    if (cvLink) {
      // Swal.fire(`Your IP address is ${cvLink}`);

      const newAppliedJob = {
        jobId,
        jobCategory,
        bannerUrl,
        postDate,
        submitDeadline,
        companyImgUrl,
        companyName,
        jobLocation,
        description,
        jobTitle,
        postUserName,
        postUserEmail,
        cvLink,
        applicantName,
        applicantEmail,
      };

      console.log(newAppliedJob);
      fetch("https://applicruit-server.vercel.app/appliedjobs", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newAppliedJob),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            toast.success("Applied Successfully.");
          } else if (data.message) {
            toast.error(data.message);
          }
        });
    }
  };
  return (
    <div>
      <div className="hero min-h-[80vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={bannerUrl} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-2xl font-bold">{jobTitle}</h1>
            <p>{companyName}</p> <p>{jobLocation}</p>
            <p>{new Date(postDate).toLocaleDateString()}</p> <p>{new Date(submitDeadline).toLocaleDateString()}</p>
            <p className="py-6">
              {description}
            </p>
            {deadline >= currentDate && applicantEmail !== postUserEmail ? (
              <button onClick={handleApply} className="btn btn-primary">
                Apply
              </button>
            ) : (
              <p className="btn btn-sm btn-warning">Can not apply</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
