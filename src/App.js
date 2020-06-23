import React, { Component } from "react";
import "./App.css";
import fire from "./config/fire";
import Login from "./Login";
import Home from "./Home";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      isLogin: false,
    };
  }
  componentDidMount() {
    this.authLister();
  }
  authLister() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: user, isLogin: true });
      } else this.setState({ user: null, isLogin: false });
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.user ? <Home /> : <Login />}
        {console.log(this.state.isLogin)}
      </div>
    );
  }
}
//const Login = () => <div className="login-container" />;

export default App;
