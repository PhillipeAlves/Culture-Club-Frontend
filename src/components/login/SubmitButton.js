import React, { Component } from 'react';

class SubmitButton extends Component {
    state = {}
    render() {
        return (
            <div>
                <button
                    className="login-btn"
                    disabled={this.props.disabled}
                    onClick={() => this.props.onClick()}
                >
                    Log in
                </button>
            </div>
        );
    }
}

export default SubmitButton;