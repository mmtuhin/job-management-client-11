import { Link, useLoaderData } from "react-router-dom";
import {AiFillDelete} from 'react-icons/ai'
import {AiFillEdit} from 'react-icons/ai'
import toast from "react-hot-toast";
import { useState } from "react";
import Swal from "sweetalert2";

const MyJobs = () => {
    const myLoaderJobs = useLoaderData()
    const [myJobs, setMyJobs] = useState(myLoaderJobs)
    console.log(myJobs);

    const handleDeleteMyJob = (id) => {

        console.log("delete Hitted");
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/api/v1/jobs/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount>0){
                      toast.success("Product removed from cart.")
                       const remaining = myJobs.filter(job => job._id !==id)
                       setMyJobs(remaining);
                      
                    }
                    else{
                      toast.error("Something Went Wrong")
                    }
                })
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            }
          });

       

    }
    return (
        <div>
            <h1>MyJobs Page</h1>
            <h1>Total created jobs by me: {myJobs.length}</h1>

            {/* Table here */}
            <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th></th> 
        <th>Title</th> 
        <th>category</th> 
        <th>company</th> 
        <th>location</th> 
        <th>Post Date</th> 
        <th>Deadline</th>
        <th>Salary</th>
        <th>Actions</th>
      </tr>
    </thead> 
    <tbody>
        {
            myJobs.map((myjob,index) => <tr key={myjob._id}>
                <th>{index+1}</th> 
                <td>{myjob.jobTitle}</td> 
                <td>{myjob.jobCategory}</td> 
                <td>{myjob.companyName}</td> 
                <td>{myjob.jobLocation}</td> 
                <td>{new Date(myjob.postDate).toLocaleDateString()}</td> 
                <td>{new Date(myjob.submitDeadline).toLocaleDateString()}</td>
                <td>{myjob.salary}</td> 
                <td><div className="flex gap-2 ">< AiFillDelete onClick={() => handleDeleteMyJob(myjob._id)}className="text-lg hover:cursor-pointer"/> <Link to={`/updateJob/${myjob._id}`}><AiFillEdit className="text-lg hover:cursor-pointer"/></Link></div></td> 
              </tr> )
        }
    </tbody> 
  </table>
</div>
        </div>
    );
};

export default MyJobs;