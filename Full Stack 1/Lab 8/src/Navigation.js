import React from "react";
import { Link } from "react-router-dom";
export class Navigation extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/contact"> Contact </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to="/newroute"> New Route </Link>
          </li>
          <li>
            <Link to="/student/JimSmith"> Student:Jim Smith </Link>
          </li>
          <li>
            <Link to="/student/JaneSmith/50001">
              {" "}
              student: Jane Smith, Student No: 50001{" "}
            </Link>
          </li>
          <li>
            <Link to="/redirect">Redirect</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
