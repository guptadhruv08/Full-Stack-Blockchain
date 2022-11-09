import React from "react";
import axios from "axios";

class AddStudent extends React.Component {
  state = {
    name: "",
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    // alert("A name was submitted: " + this.state.name);
    axios
      .post("https://jsonplaceholder.typicode.com/users", this.state.name)
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
    this.props.handleAdd(this.state.name);
    this.handleSubmit();
  };

  render() {
    return (
      <div>
        <label>
          Person Name :
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          />
        </label>
        <button onClick={this.onClick}>Add</button>
      </div>
    );
  }
}

export default AddStudent;
