import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import AllPost from "./AllPost";
class App extends Component {
  constructor() {
    super();
    this.state = {
      isAdmin: false
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.getUserName.value);
    // console.log(this.getPassword.value);
    const UserName = this.getUserName.value;
    const Password = this.getPassword.value;

    if (UserName === "" && Password === "") {
      console.log("Login checked");
      this.setState({ isAdmin: true });
    }
    this.getUserName.value = "";
    this.getPassword.value = "";
  };
  render() {
    return this.state.isAdmin ? (
      <AllPost />
    ) : (
      <div className="App">
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            //required
            type="text"
            ref={input => (this.getUserName = input)}
            placeholder="Username"
          />
          <br />
          <input
            //required
            type="password"
            ref={input => (this.getPassword = input)}
            placeholder="Password"
          />
          <br />
          <button className="Login">Login</button>
        </form>
      </div>
    );
  }
}
export default connect()(App);
