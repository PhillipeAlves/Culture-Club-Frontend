import React, { Component } from "react";

class LogoutButton extends Component {
  render() {
    return (
      <div>
        <button
          className="session-btns logout-session-btn"
          disabled={this.props.disabled}
          onClick={() => this.props.onClick()}
        >
          Log out
        </button>
      </div>
    );
  }
}

export default LogoutButton;
