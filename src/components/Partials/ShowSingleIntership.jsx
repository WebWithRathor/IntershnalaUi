import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Instance } from "../../utils/Axios";
import { useDispatch } from "react-redux";
import { loadStudent } from "../../store/actions/studentAction";

const ShowSingleInternship = ({ student }) => {
  const [internship, setInternship] = useState(null);

  let { details } = useLocation().state;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const applyHandle = async () => {
    try {
      const { data } = await Instance.post(
        `/student/applyInternship/${details._id}`
      );
      alert("Application submitted successfully!");
      navigate('/internlist')
    } catch (error) {
      alert(error.response.data.error.message);
    }
  };

  useEffect(() => {
    if (student === null) dispatch(loadStudent());
    setInternship(details);
  }, [details, student]);

  return (
    <>
      {internship && (
        <div className="absolute top-0 left-0 bg-black/[0.5] flex h-full w-full">
          <h1
            onClick={() => navigate(-1)}
            className="flex cursor-pointer items-center gap-2 text-white  text-[1vw] font-medium  absolute left-20 top-24"
          >
            {" "}
            <i className="fa-solid fa-arrow-left-long mt-1"></i> Back
          </h1>
          <div className="bg-white h-[85%] overflow-y-auto overflow-x-hidden shadow-lg rounded-lg p-10 w-1/2 mx-auto my-20">
            <h2 className="text-2xl mb-10 text-center font-semibold text-gray-700">
              Applying for {internship.profile} internship
            </h2>

            {/* Key Responsibilities */}
            <div className="mt-4">
              <h3 className="text-gray-700 text-xl font-medium">
                Key Responsibilities
              </h3>
              <ul className="list-disc pl-6 mt-3 text-gray-600">
                <li>{internship.responsibility}</li>
              </ul>
            </div>

            {/* Skills Required */}
            <div className="mt-5">
              <h3 className="text-gray-700 text-xl font-medium">
                Skill(s) required
              </h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {internship.skill.split(",").map((skill, index) => (
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
              <p className="text-gray-600 mt-2">{internship.openings}</p>
            </div>

            {/* Additional Information */}
            <div className="mt-5">
              <h3 className="text-gray-700 text-xl mb-2 font-medium">
                Additional information
              </h3>
              <p className="text-gray-600">
                This is a full-time {internship.internshiptype} internship.
              </p>
              <p className="text-gray-600">Duration: {internship.duration}</p>
              <p className="text-gray-600">Start date: {internship.from}</p>
            </div>

            {/* Stipend */}
            <div className="mt-4">
              <h3 className="text-gray-700 text-xl font-medium">Stipend</h3>
              <p className="text-gray-600">₹ {internship.stipend.amount}</p>
              <p className="text-gray-600">{internship.stipend.status}</p>
            </div>

            {/* Perks */}
            <div className="mt-4">
              <h3 className="text-gray-700 text-xl font-medium">Perks</h3>
              <p className="text-gray-600">{internship.perks}</p>
            </div>

            <div className="mt-4">
              <h3 className="text-gray-700 text-xl font-medium">Assesments</h3>
              <p className="text-gray-600">{internship.assessments}</p>
            </div>

            {/* Apply Button */}
            <div className="mt-6">
              <button
                onClick={applyHandle} // Call applyHandle function when clicked on Apply button
                disabled={
                  student &&
                  student.internships.find(
                    (internshipId) => internshipId === internship?._id
                  )
                } // Disable button if already applied
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  student &&
                  student.internships.find(
                    (internshipId) => internshipId === internship?._id
                  )
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                {student &&
                student.internships.find(
                  (internshipId) => internshipId === internship?._id
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

export default ShowSingleInternship;
