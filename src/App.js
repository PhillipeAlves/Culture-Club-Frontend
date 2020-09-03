import React, { Component } from "react";
import axios from "axios";
import { observer } from "mobx-react";
import UserStore from "./stores/UserStore";
import Login from "./components/login/Login";
import SignUp from "./components/signup/Signup";
import Profile from "./components/Profile/Profile";
import LogoutButton from "./components/LogoutButton";
import Home from "./components/Home";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "./App.css";

class App extends Component {
  // === CHECK FOR SESSION ===

  componentDidMount() {
    let config = {
      method: "post",
      url: "/isLoggedIn",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    axios(config)
      .then((res) => {
        res = res.data;
        if (res && res.success) {
          UserStore.isLoggedIn = true;
          UserStore.userID = res.userID;
          UserStore.username = res.username;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // ===DESTROY SESSION===

  doLogout() {
    let config = {
      method: "post",
      url: "/logout",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    axios(config)
      .then((res) => {
        res = res.data;
        if (res && res.success) {
          UserStore.isLoggedIn = false;
          UserStore.userID = "";
          UserStore.username = "";
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    // === USER IS LOGGED IN===

    if (UserStore.isLoggedIn) {
      return (
        <HashRouter>
          <div className="App">
            <div>
              <nav className="nav-bar">
                <div className="logo-container">
                  <span>C</span>
                  <h1 className="site-name">ulture club</h1>
                </div>
                <ul className="menu">
                  <LogoutButton onClick={() => this.doLogout()} />
                  <span className="menu-division">|</span>
                  <li>
                    <NavLink
                      className="session-btns signup-session-btn"
                      to="/profile"
                    >
                      profile
                    </NavLink>
                  </li>
                  <NavLink
                    className="home-session-btn hvr-radial-out"
                    exact
                    to="/"
                  >
                    <i className="fas fa-bars"></i>
                  </NavLink>
                </ul>
              </nav>
              <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/profile" component={Profile} />
              </div>
            </div>
          </div>
        </HashRouter>
      );

      // === USER IS NOT LOGGED IN===
    } else {
      return (
        <HashRouter>
          <div className="App">
            <div>
              <nav className="nav-bar">
                <div className="logo-container">
                  <span>C</span>
                  <h1 className="site-name">ulture lub</h1>
                </div>
                <ul className="menu">
                  <li>
                    <NavLink
                      className="session-btns login-session-btn"
                      to="/login"
                    >
                      login
                    </NavLink>
                  </li>
                  <span className="menu-division">|</span>
                  <li>
                    <NavLink
                      className="session-btns signup-session-btn"
                      to="/signup"
                    >
                      signup
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="home-session-btn hvr-radial-out"
                      exact
                      to="/"
                    >
                      <i className="fas fa-bars"></i>
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/logout" component={Login} />
                <Route path="/profile" component={Login} />
              </div>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
}

export default observer(App);
