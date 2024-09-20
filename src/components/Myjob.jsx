import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Instance } from "../utils/Axios";
import CardjobOpp from "./Partials/CardjobOpp";

const MyJob = () => {
  const [jobs, setJobs] = useState([]);

  const getJobs = async () => {
    const { data } = await Instance.post("/employe/job/read");
    setJobs(data);
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <>
      <div className="h-screen w-full pb-20 flex flex-col overflow-y-auto gap-4 bg-blue-50 pt-28">
        {jobs.length !== 0 ? (
          jobs.map((job, i) => (
            <CardjobOpp Noapply={true} key={i} details={job} />
          ))
        ) : (
          <h1 className="text-2xl text-center font-semibold mt-32">
            Sorry No jobs 😅
          </h1>
        )}
        <Outlet />
      </div>
    </>
  );
};

export default MyJob;
