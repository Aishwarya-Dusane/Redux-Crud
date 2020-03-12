import React, { Component } from "react";
import { connect } from "react-redux";
import "./EditComponent.css";
class EditComponent extends Component {
  handleEdit = e => {
    e.preventDefault();
    const newName = this.getName.value;
    const newDesignation = this.getDesignation.value;
    const data = {
      newName,
      newDesignation
    };
    this.props.dispatch({ type: "UPDATE", id: this.props.post.id, data: data });
  };
  render() {
    return (
      <div key={this.props.post.id} className="post">
        <form className="form" onSubmit={this.handleEdit}>
          <input
            className="editName"
            required
            type="text"
            ref={input => (this.getName = input)}
            defaultValue={this.props.post.Name}
            placeholder="Name"
          />
          <br />
          <input
            className="editDesignation"
            required
            type="text"
            ref={input => (this.getDesignation = input)}
            defaultValue={this.props.post.Designation}
            placeholder="Designation"
          />
          <br />
          <button className="updatedata">Update</button>
        </form>
      </div>
    );
  }
}
export default connect()(EditComponent);
