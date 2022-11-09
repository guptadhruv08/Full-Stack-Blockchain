import React from "react";
import axios from "axios";

class DeleteStudent extends React.Component {
  state = {
    id: "",
  };

  //   handleChange = (event) => {
  //     this.setState({ id: event.target.value });
  //   };

  handleSubmit = (event) => {
    axios
      .delete(
        `https://jsonplaceholder.typicode.com/users/${this.props.studentId}`
      )
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    // event.preventDefault();
  };

  onClick = () => {
    this.props.handleDelete(this.props.studentId);
    this.handleSubmit();
  };

  render() {
    return (
      <div>
        <button onClick={this.onClick} type="submit">
          Delete
        </button>
      </div>
    );
  }
}

export default DeleteStudent;
