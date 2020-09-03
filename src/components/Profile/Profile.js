import React, { Component } from "react";
import UserStore from "../../stores/UserStore";
import "./Profile.css";
import { Route, Link, HashRouter } from "react-router-dom";

class Profile extends Component {
  state = {
    email: "",
    name: "",
    location: "",
    time: "",
    invitation: "",
  };

  componentDidMount() {
    this.setState({
      invitation: "Create an invition",
    });
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    fetch("/sendEmail", {
      method: "post",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status) {
        this.confirmMessage();
      }
    });
  };

  confirmMessage() {
    this.setState({
      email: "",
      name: "",
      location: "",
      time: "",
      invitation: "The invitation has been sent",
    });
  }

  render() {
    const { email, name, location, time, invitation } = this.state;
    const handleInputChange = this.handleInputChange;
    const divStyle = {
      background: `linear-gradient(
        rgba(0, 0, 0, 0.669),
        rgba(0, 0, 0, 0.101)
      ),
        url("https://images.unsplash.com/photo-1516575334481-f85287c2c82d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80")`,
    };
    return (
      <HashRouter>
        <div className="profile-container">
          <div className="profile-card">
            {/* <img
                className="profile-picture-card"
                src="https://images.unsplash.com/photo-1516575334481-f85287c2c82d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                alt=""
              /> */}
            <div className="profile-picture-bg" style={divStyle}>
              <h1>SARAH ENGLISH</h1>
            </div>

            <form className="create-event-form" onSubmit={this.onSubmit}>
              <h3>{invitation}</h3>
              <input
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="name"
                placeholder="name"
                value={name}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="location"
                placeholder="location"
                value={location}
                onChange={handleInputChange}
                required
              />
              <input
                className="time"
                type="time"
                name="time"
                placeholder="Enter time"
                value={time}
                onChange={handleInputChange}
                required
              />
              <input className="submit-btn" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Profile;
