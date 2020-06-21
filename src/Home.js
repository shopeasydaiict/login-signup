import React, { Component } from "react";
import fire from "./config/fire";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.logout = this.logout.bind(this);
  }
  logout() {
    fire.auth().signOut();
  }
  render() {
    return (
      <div>
        <h1>You are Logged in !!</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}
export default Home;