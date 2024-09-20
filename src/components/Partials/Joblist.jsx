import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { Instance } from "../../utils/Axios";
import { Outlet } from "react-router-dom";
import CardjobOpp from "./CardjobOpp";

const Joblist = () => {
  const [jobs, setjobs] = useState([]);

  const getjobs = async () => {
    const { data } = await Instance.post("/job/read");
    setjobs(data);
  };

  useEffect(() => {
    getjobs();
  }, []);

  return (
    <>
      <Nav />
      <div className="h-screen w-full pb-20 flex flex-col overflow-y-auto gap-4 bg-blue-50 pt-28">
        {jobs.length != 0 ? (
          jobs.map((job, i) => {
            return <CardjobOpp key={i} details={job} />;
          })
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

export default Joblist;
