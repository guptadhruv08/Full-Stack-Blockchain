import React from "react";
import Courses from "./Courses";
import "./Student.css";

const Student = (props) => {
  const courseNumber = (value) => {
    var arr = [];
    for (let i = 0; i < parseInt(value); i++) {
      arr.push(i);
    }

    return arr.map((val) => {
      return <Courses courseNumber={val} />;
    });
  };
  return (
    <>
      <p>
        Student <b>{props.name}</b> with student number <b>{props.number}</b>
        <br />
        <br />
        Student is enrolled in
        {courseNumber(props.enrolled)}
      </p>
    </>
  );
};

export default Student;
