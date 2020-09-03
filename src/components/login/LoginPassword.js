import React from 'react';
import '../signup/Password.css'

function Password(props) {
    return (
        <div className="password-container">
            <input
                value={props.password}
                onChange={props.onChange}
                autoComplete="new-password"
                placeholder="Password"
                type=
                {
                    `${props.isToggleOn
                        ? "text"
                        : "password"}`
                }
            />
            <i
                onClick={props.handleToggle}
                className=
                {
                    `fas ${props.isToggleOn
                        ? "fa-eye-slash"
                        : "fa-eye"}`
                }>
            </i>
        </div>
    );
}


export default Password;
