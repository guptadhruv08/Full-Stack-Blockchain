import React, { Component } from "react";
import "./LikeButton.css";

export class LikeButton extends Component {
  state = {
    clickCounter: 0,
  };
  handleLikeCounter = (event) => {
    this.setState({ clickCounter: this.state.clickCounter + 1 });
  };
  render() {
    return (
      <div className="container">
        <button className="likeBtn" onClick={this.handleLikeCounter}>
          Like
        </button>
        {this.state.clickCounter} Likes
      </div>
    );
  }
}

export default LikeButton;
