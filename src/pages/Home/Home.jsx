import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const { user } = useAuth();
  const [jobCategories, setJobCategories] = useState([])
  const jobs = useLoaderData();
   console.log(jobs);
   const [selectedCategory, setSelectedCategory] = useState("null");

useEffect(() => {
    fetch('http://localhost:5000/api/v1/job_categories')
    .then(res => res.json())
    .then(data => setJobCategories(data))
},[])
  
  return (
    <div>
      <Helmet>
        <title>Applicruit | Home</title>
      </Helmet>
      <div className="h-[200px] bg-slate-300">
        <h1 className="bg-slate-300">This is Banner section</h1>
      </div>

      {/* Tab section */}
      <div>
        {/* <Tabs defaultIndex={1} onSelect={index => console.log(index)}> */}
        <Tabs defaultIndex={0} onSelect={(index) => setSelectedCategory(index === jobCategories.length ? "All" : jobCategories[index].jobCategory)}>
          
          <TabList>
            {jobCategories.map((c, index)=> <Tab key={c._id}>{c.jobCategory}</Tab>)} 
            <Tab>All</Tab>
          </TabList>

        
          {jobCategories.map((c, index) => (
            <TabPanel key={c._id}>
              {jobs
                .filter((job) => selectedCategory === "All" || job.jobCategory === c.jobCategory)
                .map((job) => (
                  <div key={job._id}>
                    <h2>{job.jobTitle}</h2>
                    <p>{job.description}</p>
                  </div>
                ))}
            </TabPanel>
          ))}
          
          <TabPanel>
            {
              jobs.map((job) => (
                <div key={job._id}>
                  <h2>{job.jobTitle}</h2>
                  <p>{job.description}</p>
                </div>
              ))
            }
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Home;
