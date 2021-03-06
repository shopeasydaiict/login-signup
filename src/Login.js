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
  validatePassword(password) {
    // Do not show anything when the length of password is zero.
    if (password.length <= 7) {
      return false;
    }
    // Create an array and push all possible values that you want in password
    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]"); // Special Charector
    matchedCase.push("[A-Z]"); // Uppercase Alpabates
    matchedCase.push("[0-9]"); // Numbers
    matchedCase.push("[a-z]"); // Lowercase Alphabates

    // Check the conditions
    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
      if (new RegExp(matchedCase[i]).test(password)) {
        ctr++;
      }
    }
    // Display it
    var strength = "";
    // eslint-disable-next-line default-case
    switch (ctr) {
      case 0:
      case 1:
      case 2:
        strength = "Very Weak";
        break;
      case 3:
        strength = "Medium";
        break;
      case 4:
        strength = "Strong";
        break;
    }
    if (strength === "Strong") return true;
    else return false;
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
        alert("Invalid Email or Password");
      });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  signup(e) {
    e.preventDefault();
    var validate = this.validatePassword(this.state.password);
    if (validate === true) {
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
    } else {
      alert(
        "Minimum password length required = 8 \nThe Password must contain atleast: \n- 1 Special Character \n- 1 Upper Case Alphabet \n- 1 Lower Case alphabet \n- 1 Number \n "
      );
    }
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
            placeholder="Enter password"
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
