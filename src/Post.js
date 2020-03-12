import React, { Component } from "react";
import "./Post.css";
import { connect } from "react-redux";

class Post extends Component {
  render() {
    return (
      <div className="post">
        {console.log(this.props.post.Name)}
        <table className="Table">
          {/* <tr>
            <td>Name</td>
            <td>Designation</td>
          </tr> */}
          <tbody>
            <tr>
              <td className="TableData">{this.props.post.Name}</td>
              &nbsp;&nbsp;&nbsp;
              <td className="TableData">{this.props.post.Designation}</td>
              &nbsp;&nbsp;&nbsp;
              <td>
                <button
                  className="edit"
                  onClick={() =>
                    this.props.dispatch({
                      type: "EDIT_POST",
                      id: this.props.post.id
                    })
                  }
                >
                  Edit
                </button>
              </td>
              &nbsp;&nbsp;&nbsp;
              <td>
                <button
                  className="delete"
                  onClick={() =>
                    this.props.dispatch({
                      type: "DELETE_POST",
                      id: this.props.post.id
                    })
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default connect()(Post);
