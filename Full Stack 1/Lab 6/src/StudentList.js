import React from "react";
import axios from "axios";
import DeleteStudent from "./DeleteStudent";
import AddStudent from "./AddStudent";

class UserList extends React.Component {
  state = {
    users: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      const users = res.data;
      this.setState({ users: users });
    });

    // Trigger update
  }
  constructor() {
    super();
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleAdd(name) {
    console.log("Name is added " + name);
    this.componentDidMount();
  }

  handleDelete(id) {
    const newStudentList = this.state.users.filter((student) => {
      return student.id !== id;
    });
    this.setState({ users: newStudentList });
  }

  render() {
    return (
      <div>
        <AddStudent handleAdd={this.handleAdd} />
        {this.state.users.map((data, id) => {
          return (
            <div key={id}>
              <h2>{data.name}</h2>
              <DeleteStudent
                studentId={data.id}
                handleDelete={this.handleDelete}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default UserList;
