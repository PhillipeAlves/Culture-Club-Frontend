import React, { Component } from 'react';

class SubmitButton extends Component {
    state = {}
    render() {
        return (
            <div>
                <button
                    className="signup-btn"
                    disabled={this.props.disabled}
                    onClick={() => this.props.onClick()}
                >
                    Sign up
                </button>
            </div>
        );
    }
}

export default SubmitButton;