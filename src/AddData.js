import React, { Component } from "react";
import AllPost from "./AllPost";
import { connect } from "react-redux";

class AddData extends Component {
  constructor() {
    super();

    this.state = {
      isAdmin: false
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    const Name = this.getName.value;
    const Designation = this.getDesignation.value;
    this.setState({ isAdmin: true });
    const data = {
      id: new Date(),
      Name,
      Designation,
      editing: false
    };
    this.props.dispatch({
      type: "ADD_POST",
      data
    });
    this.getName.value = "";
    this.getDesignation.value = "";
  };
  render() {
    var f = this.state.isAdmin;
    if (f) {
      return <AllPost />;
    }
    return (
      <div className="post-container">
        <h1 className="post_heading">Add Data</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            ref={input => (this.getName = input)}
            placeholder="Name"
          />
          <br />
          <input
            required
            type="text"
            ref={input => (this.getDesignation = input)}
            placeholder="Designation"
          />
          <br />
          <button className="submitData">Submit</button>
        </form>
      </div>
    );
  }
}
export default connect()(AddData);
