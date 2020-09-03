import React, { Component } from "react";
import axios from "axios";
import Email from "../signup/Email";
import LoginPassword from "./LoginPassword";
import SubmitButton from "./SubmitButton";
import UserStore from "../../stores/UserStore";
import Profile from "../Profile/Profile";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      buttonDisabled: false,
      isToggleOn: false,
    };
  }
  handleToggle = () => {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  };
  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleLogin = (e) => {
    if (!this.state.email) {
      return;
    }
    if (!this.state.password) {
      return;
    }
    this.setState({
      buttonDisabled: true,
    });
    axios
      .post("/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        if (res.data.success) {
          UserStore.isLoggedIn = true;
          UserStore.userID = res.userID;
          UserStore.username = res.username;
        } else {
          this.resetForm();
          alert(res.msg);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  resetForm() {
    this.setState({
      email: "",
      password: "",
      buttonDisabled: false,
    });
  }

  render() {
    const { email, password, buttonDisabled, isToggleOn } = this.state;
    if (UserStore.isLoggedIn) {
      return (
        <div>
          <Profile />
        </div>
      );
    } else {
      return (
        <div className="login-container">
          <div className="login-form">
            <form>
              <h2>Log in</h2>
              <Email name="email" email={email} onChange={this.handleEmail} />
              <LoginPassword
                name="password"
                handleToggle={this.handleToggle}
                isToggleOn={isToggleOn}
                password={password}
                onChange={this.handlePassword}
              />
              <SubmitButton
                disabled={buttonDisabled}
                onClick={() => this.handleLogin()}
              />
            </form>
          </div>
        </div>
      );
    }
  }
}

export default Login;
