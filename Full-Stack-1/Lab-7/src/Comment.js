import React, { Component } from "react";
import LikeButton from "./LikeButton";
import Timer from "./Timer";
import "./Comment.css";

class Comment extends Component {
  render() {
    return (
      <div className="Container">
        <Timer />
        <p className="text">{this.props.text}</p>
        <LikeButton />
      </div>
    );
  }
}

export default Comment;
