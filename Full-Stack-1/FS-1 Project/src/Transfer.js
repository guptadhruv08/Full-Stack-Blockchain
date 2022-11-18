import React from "react";
import "./Transfer.css";
import TransferAddress from "./TransferAddress";

export class Transfer extends React.Component {
  state = {
    transfered: false,
    value: "",
  };
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  handleClick = (event) => {
    if (!this.state.value == "") {
      this.setState({ transfered: true });
    }
  };
  render() {
    return (
      <div>
        <h1 className="Title">Trasfer</h1>
        <div className="TransferContainer">
          <p>
            <b>From</b> {<TransferAddress />}
          </p>
          <p>
            <b>To</b> 0xe688b84b23f322a994a53dbf8e15fa82cdb71127
          </p>
          <label>
            Amount:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button onClick={this.handleClick}>Transfer</button>
        </div>

        {this.state.transfered ? (
          <div>
            <h1 className="Title">Reciept</h1>
            <div className="RecieptContainer">
              <p>
                <b>Transaction Hash</b>{" "}
                0xd991e26838287888af47f8bd60ea1dcd250d6d7b6e5accde7ccb7bb40b43565b
              </p>
              <p>
                <b>Block Hash</b> SUCCESS
              </p>
              <p>
                <b>Block Number</b> 10
              </p>
              <p>
                <b>From</b> <TransferAddress />
              </p>
              <p>
                <b>To</b> 0xe688b84b23f322a994a53dbf8e15fa82cdb71127
              </p>

              <p>
                <b>Gas used</b> 21000
              </p>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default Transfer;
