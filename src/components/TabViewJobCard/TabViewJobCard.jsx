import { Link } from "react-router-dom";

const TabViewJobCard = ({ job }) => {
  const { _id ,jobTitle, postDate, submitDeadline, applicantsNumber, postUserName,companyImgUrl,salary} = job;
  // const mongoDBPostdate = postDate;
  // const mongoDBPostdate
  const postDay = new Date(postDate);
  const submitDay = new Date(submitDeadline);

  return (
    <div className="border max-w-xs p-4">
      <div className="flex gap-4 items-center justify-between">
        
        <div className="">
          <h1 className="font-bold">{jobTitle}</h1>
          <p className="text-sm">Applicants: {applicantsNumber}</p>
          <p className="text-sm font-semibold">Salary: {salary}</p>
        </div>
        <img
          className="border rounded border-slate-400 p-2"
          src={companyImgUrl}
          alt=""
        />
      </div>

      <div className="flex flexl mt-4 gap-4">
        <p className="text-sm text-center">Publish: {postDay.toLocaleDateString()}</p>
        <p className="text-sm text-center">Deadline: {submitDay.toLocaleDateString()}</p>
      </div>
      <p className="text-sm mt-2">Posted by: {postUserName}</p>
      <button className="btn w-full mt-2 btn-sm bg-[#219653] px-3 py-1 text-white rounded font-medium hover:bg-sky-900">
                        <Link to={`jobdetails/${_id}`}>View Details</Link></button>
    </div>
  );
};

export default TabViewJobCard;
