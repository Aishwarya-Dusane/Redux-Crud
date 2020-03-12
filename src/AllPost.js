import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import { connect } from "react-redux";
import "./AllPost.css";
import Post from "./Post";
import AddData from "./AddData";
import EditComponent from "./EditComponent";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Router>
);
class AllPost extends Component {
  constructor() {
    super();

    this.state = {
      isAdmin: false,
      isLoguot: false
    };
  }
  handleSubmit = e => {
    e.preventDefault();

    this.setState({ isAdmin: true });
  };
  render() {
    var f = this.state.isAdmin;
    if (f) {
      return <AddData />;
    }
    return (
      <div className="AllPost">
        <Router>
          <Link to="/">
            <button className="AddData" onClick={routing}>
              Logout
            </button>
          </Link>
        </Router>
        <button className="AddData" onClick={this.handleSubmit}>
          Add data
        </button>
        <table>
          {this.props.posts.map(post => (
            <div key={post.id}>
              {console.log("Edit problem--" + post.editing)}
              {post.editing ? (
                <EditComponent post={post} key={post.id} />
              ) : (
                <Post post={post} key={post.id} />
              )}
            </div>
          ))}
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state
  };
};
export default connect(mapStateToProps)(AllPost);
