import React, { Component } from "react";
import Comment from "./Comment";
import "./TwitterContainer.css";

class TweetContainer extends Component {
  state = {
    value: "",
    postArray: [],
  };
  handleTextChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleFormSubmit = (event) => {
    const newArr = this.state.postArray;
    newArr.push(this.state.value);
    this.setState({ postArray: newArr });
    this.setState({ value: "" });
    event.preventDefault();
  };

  render() {
    return (
      <div className="tweetContainer">
        <p className="status">{this.props.status}</p>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            className="inputText"
            value={this.state.value}
            onChange={this.handleTextChange}
          />

          <button className="postBtn">Post</button>
        </form>
        {this.state.postArray.map((post, index) => {
          return (
            <div key={index}>
              <Comment text={post} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default TweetContainer;
