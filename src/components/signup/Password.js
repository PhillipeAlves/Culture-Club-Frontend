import React from 'react';
import checkPassword from './checkPassword'
import './Password.css'

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

            {props.password !== '' ? checkPassword(props.password) : <p className='valid-placeholder'>password</p>}
        </div>
    );
}


export default Password;


