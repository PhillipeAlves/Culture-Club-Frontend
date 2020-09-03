import React, { Component } from "react";
import Events from "./events/Events";
import "./Home.css";
import { HashRouter } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <HashRouter>
        <div className="home">
          <div className="container">
            <div className="home-banner-container">
              <h2>CATCH UP</h2>
              <h2>AND STAY CONNECTED</h2>
              <p>
                Catch up with friends... Cras facilisis urna ornare ex volutpat,
                et convallis erat elementum. Ut aliquam, ipsum vitae gravida
                suscipit, metus dui bibendum est, eget rhoncus nibh metus nec
              </p>
              <div className="home-banner-wrapper">
                <div className="home-banner">
                  <h1>CULTURE CLUB</h1>
                </div>
                <p className="home-banner-text">
                  Catch up with friends... Cras facilisis urna ornare ex
                  volutpat, et convallis erat elementum. Ut aliquam, ipsum vitae
                  gravida suscipit, metus dui bibendum est,
                </p>
              </div>
            </div>
            <p className="banner-description">
              Catch up with friends... Cras facilisis urna ornare ex volutpat,
              et convallis erat elementum. Ut aliquam, ipsum vitae gravida
              suscipit, metus dui bibendum est, eget rhoncus nibh metus nec
              massa. Maecenas hendrerit laoreet augue nec molestie. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.
            </p>
            <Events />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Home;
