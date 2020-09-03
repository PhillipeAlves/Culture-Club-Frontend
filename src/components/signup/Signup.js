import React, { Component } from "react";
import Password from "./Password";
import Email from "./Email";
import SubmitButton from "./SubmitButton";
import UserStore from "../../stores/UserStore";
import "./Signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
  handleUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  async handleSignUp() {
    if (!this.state.username) {
      return;
    }
    if (!this.state.email) {
      return;
    }
    if (!this.state.password) {
      return;
    }
    this.setState({
      buttonDisabled: true,
    });
    try {
      let res = await fetch("/signup", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        }),
      });

      let result = await res.json();

      // ===SIGN UP SUCCESSFUL===
      if (result && result.success) {
        console.log(result.username);
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
        UserStore.userID = result.userID;

        // ===SIGN UP FAILED===
      } else if (result && result.success === false) {
        this.resetForm();
        alert(result.msg);
      }
    } catch (e) {
      console.log(e);
      this.resetForm();
    }
  }

  resetForm() {
    this.setState({
      username: "",
      email: "",
      password: "",
      buttonDisabled: false,
    });
  }
  render() {
    const {
      username,
      email,
      password,
      buttonDisabled,
      isToggleOn,
    } = this.state;
    return (
      <div className="sign-up-container">
        <div className="sign-up-form">
          <form>
            <h2>Sign up</h2>
            <input
              className="user-name"
              name="username"
              onChange={this.handleUsername}
              type="text"
              id=""
              placeholder="First name"
            />
            <Email name="email" email={email} onChange={this.handleEmail} />
            <Password
              name="password"
              handleToggle={this.handleToggle}
              isToggleOn={isToggleOn}
              password={password}
              onChange={this.handlePassword}
            />
            <SubmitButton
              disabled={buttonDisabled}
              onClick={() => this.handleSignUp()}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
