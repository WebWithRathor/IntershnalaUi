import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "../components/Home/Home";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import EmpSignUp from "../components/EmpSignUp";
import Resume from "../components/Resume/Resume";
import Education from "../components/Resume/Education";
import JobIntern from "../components/Resume/JobIntern";
import Responsibility from "../components/Resume/Responsibility";
import Training from "../components/Resume/Training";
import Projects from "../components/Resume/Projects";
import Skill from "../components/Resume/Skill";
import WorkSamples from "../components/Resume/WorkSamples";
import Accomplishment from "../components/Resume/Accomplishment";
import { useSelector } from "react-redux";
import PersonalDetailsForm from "../components/Resume/PersonalDetailsForm";
import ChangePassword from "../components/ChangePassword";
import CompleteEmploye from "../components/CompleteEmploye";
import PostJobintern from "../components/Job-intern/PostJob-intern";
import ForgetPassword from "../components/Partials/ForgetPassword";
import InternshipList from "../components/Partials/InternshipList";
import ShowSingleIntership from "../components/Partials/ShowSingleIntership";
import Joblist from "../components/Partials/Joblist";
import ShowSingleJob from "../components/Partials/ShowSingleJob";

const MainRoutes = () => {
  const student = useSelector((store) => store.studentSlice.student);
  return (
    <Routes>
      <Route path="/changepassword" element={<ChangePassword />} />
      <Route path="/forgetpass" element={<ForgetPassword />} />
      <Route path="/internlist" element={<InternshipList />}>
        <Route
          path="/internlist/showDetails"
          element={<ShowSingleIntership student={student} />}
        />
      </Route>
      <Route path="/joblist" element={<Joblist />}>
        <Route
          path="/joblist/showDetails"
          element={<ShowSingleJob student={student} />}
        />
      </Route>
      <Route path="/employe/completeDetails" element={<CompleteEmploye />} />
      <Route path="/" element={<HomeLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/profile/student/resume" element={<Resume />}>
        <Route
          path="/profile/student/resume/profile"
          element={<PersonalDetailsForm />}
        />
        <Route
          path="/profile/student/resume/education"
          element={<Education />}
        />
        <Route
          path="/profile/student/resume/job"
          element={<JobIntern type="Job" />}
        />
        <Route
          path="/profile/student/resume/internship"
          element={<JobIntern type="Internship" />}
        />
        <Route
          path="/profile/student/resume/responsibility"
          element={<Responsibility />}
        />
        <Route path="/profile/student/resume/training" element={<Training />} />
        <Route path="/profile/student/resume/projects" element={<Projects />} />
        <Route path="/profile/student/resume/skill" element={<Skill />} />
        <Route
          path="/profile/student/resume/worksample"
          element={
            <WorkSamples worksample={student && student.resume.workSamples} />
          }
        />
        <Route
          path="/profile/student/resume/accomplishment"
          element={<Accomplishment />}
        />
        <Route
          path="/profile/student/resume/education/update"
          element={<Education update={true} />}
        />
        <Route
          path="/profile/student/resume/job/update"
          element={<JobIntern type="Job" update={true} />}
        />
        <Route
          path="/profile/student/resume/internship/update"
          element={<JobIntern type="Internship" update={true} />}
        />
        <Route
          path="/profile/student/resume/responsibility/update"
          element={<Responsibility update={true} />}
        />
        <Route
          path="/profile/student/resume/training/update"
          element={<Training update={true} />}
        />
        <Route
          path="/profile/student/resume/projects/update"
          element={<Projects update={true} />}
        />
        <Route
          path="/profile/student/resume/skill/update"
          element={<Skill update={true} />}
        />
        <Route
          path="/profile/student/resume/worksample/update"
          element={
            <WorkSamples
              worksample={student && student.resume.workSamples}
              update={true}
            />
          }
        />
        <Route
          path="/profile/student/resume/accomplishment/update"
          element={<Accomplishment update={true} />}
        />
      </Route>
      <Route path="/student/signup" element={<SignUp />} />
      <Route path="/Employe/signup" element={<EmpSignUp />} />
      <Route path="/Employe/profile/post" element={<PostJobintern />} />
    </Routes>
  );
};

export default MainRoutes;
