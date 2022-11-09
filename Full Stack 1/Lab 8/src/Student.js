import React from "react";
import { useParams } from "react-router-dom";

const Student = () => {
  const { studentname, studentno } = useParams();

  return (
    <div>
      <p>Student</p>
      <div>
        <div>{`The student name is ${studentname}"!`}</div>
        {studentno ? (
          <div>{`The student no is ${studentno}"!`}</div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Student;
