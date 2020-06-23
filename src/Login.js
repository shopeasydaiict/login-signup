import React, { Component } from "react";
import "./login.css";
import fire from "./config/fire";
class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  }
  login(e) {
    if (e) e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  }

  render() {
    return (
      <div className="body">
        <a href="https://www.google.co.ins/">
          <img
            border=""
            alt="ShopEasy"
            src={require("./resources/shopeasy_logo.png")}
          ></img>
        </a>
        <form className="form-container">
          <h2 className="email-lable">E-MAIL:</h2>
          <input
            className="email-box"
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email Address"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <h2 className="pass-lable">PASSWORD:</h2>
          <input
            className="pass-box"
            type="password"
            id="password"
            name="password"
            placeholder="Enter password : Min length 6 charaacters"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button onClick={this.login} className="bt-login">
            LOGIN
          </button>
          <button onClick={this.signup} className="bt-signup">
            SIGNUP
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
