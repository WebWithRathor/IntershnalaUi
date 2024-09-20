import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Instance } from "../../utils/Axios";
import { useDispatch } from "react-redux";
import { loadStudent } from "../../store/actions/studentAction";

const ShowSingleJob = ({ student }) => {
  const [job, setJob] = useState(null);

  let { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const applyHandle = async () => {
    try {
      const { data } = await Instance.post(
        `/student/applyJob/${state._id}`
      );
      alert("Application submitted successfully!");
      navigate('/joblist')
    } catch (error) {
      alert(error.response.data.error.message);
    }
  };

  useEffect(() => {
    if (student === null) dispatch(loadStudent());
    setJob(state);
  }, [state, student]);

  return (
    <>
      {job && (
        <div className="absolute top-0 left-0 bg-black/[0.5] flex h-full w-full">
          <h1
            onClick={() => navigate(-1)}
            className="flex cursor-pointer items-center gap-2 text-white text-[1vw] font-medium absolute left-20 top-24"
          >
            <i className="fa-solid fa-arrow-left-long mt-1"></i> Back
          </h1>
          <div className="bg-white h-[85%] overflow-y-auto overflow-x-hidden shadow-lg rounded-lg p-10 w-1/2 mx-auto my-20">
            <h2 className="text-2xl mb-10 text-center font-semibold text-gray-700">
              Applying for {job.title} position
            </h2>

            {/* Job Description */}
            <div className="mt-4">
              <h3 className="text-gray-700 text-xl font-medium">
                Job Description
              </h3>
              <p className="text-gray-600 mt-3">{job.description}</p>
            </div>

            {/* Skills Required */}
            <div className="mt-5">
              <h3 className="text-gray-700 text-xl font-medium">
                Skill(s) required
              </h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {job.skill.split(",").map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Openings */}
            <div className="mt-5">
              <h3 className="text-gray-700 text-xl font-medium">
                Number of openings
              </h3>
              <p className="text-gray-600 mt-2">{job.openings}</p>
            </div>

            {/* Job Type */}
            <div className="mt-5">
              <h3 className="text-gray-700 text-xl font-medium">
                Job Type
              </h3>
              <p className="text-gray-600 mt-2">{job.jobtype}</p>
            </div>

            {/* Salary */}
            <div className="mt-4">
              <h3 className="text-gray-700 text-xl font-medium">Salary</h3>
              <p className="text-gray-600">₹ {job.salary}</p>
            </div>

            {/* Perks */}
            <div className="mt-4">
              <h3 className="text-gray-700 text-xl font-medium">Perks</h3>
              <p className="text-gray-600">{job.perks}</p>
            </div>

            {/* Assessments */}
            <div className="mt-4">
              <h3 className="text-gray-700 text-xl font-medium">Assessments</h3>
              <p className="text-gray-600">{job.assessments}</p>
            </div>

            {/* Apply Button */}
            <div className="mt-6">
              <button
                onClick={applyHandle}
                disabled={
                  student &&
                  student.jobs.find(
                    (jobId) => jobId === job?._id
                  )
                }
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  student &&
                  student.jobs.find(
                    (jobId) => jobId === job?._id
                  )
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                {student &&
                student.jobs.find(
                  (jobId) => jobId === job?._id
                )
                  ? "Already Applied"
                  : "Apply"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowSingleJob;
