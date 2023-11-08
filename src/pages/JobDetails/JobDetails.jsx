import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from 'sweetalert2'
import { useState } from "react";
import toast from "react-hot-toast";


const JobDetails = () => {
    const {user} = useAuth()
    console.log(user);
    const applicantEmail = user.email
    const applicantName = user.displayName

    console.log(applicantEmail);
    const jobData = useLoaderData()
    const {_id, jobCategory, bannerUrl, postDate, submitDeadline, companyImgUrl, companyName, jobLocation, description, jobTitle, postUserName, postUserEmail} = jobData

    const jobId = _id


    const handleApply =async () => {
        console.log('Applied');

        
       
        
        const inputValue = "Enter Resume Link";
        const { value: cvLink } =await Swal.fire({
          title: "Enter your resume",
          input: "text",
          inputLabel: "Your IP address",
          inputValue,
          showCancelButton: true,
          inputValidator: (value) => {
            if (!value) {
              return "You need to write something!";
            }
          }
        });
        if (cvLink) {
          // Swal.fire(`Your IP address is ${cvLink}`);
          
          const newAppliedJob = {jobId, jobCategory, bannerUrl, postDate, submitDeadline, companyImgUrl, companyName, jobLocation, description, jobTitle,  postUserName, postUserEmail, cvLink, applicantName, applicantEmail}

          console.log(newAppliedJob);
          fetch("http://localhost:5000/appliedjobs", {
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
                toast.success("Applied Successfull.");
              } else if (data.message) {
                toast.error(data.message);
              }
            });
          
        }
    }
    return (
        <div>
            <h1>{jobTitle}</h1>
            <button onClick={handleApply} className="btn btn-primary">Apply</button>
        </div>
    );
};

export default JobDetails;