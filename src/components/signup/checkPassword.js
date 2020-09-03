import React from 'react';
import "./Signup.css"

const checkPassword = password => {

    if (password.length > 0) {
        let passwordInformation = {
            score: 0,
            hasLowerCase: false,
            hasUpperCase: false,
            hasNumber: false,
            hasNonAlphaNumeric: false,
            isOver8Char: false,
            isOver12Char: false
        }

        let chars = password.split('')

        chars.forEach(char => {
            if (/\d/.test(char)) {
                passwordInformation.hasNumber = true
            }
            if (/[a-z]/.test(char)) {
                passwordInformation.hasLowerCase = true
            }
            if (/[A-Z]/.test(char)) {
                passwordInformation.hasUpperCase = true
            }
            if (/[^a-zA-Z0-9]/.test(char)) {
                passwordInformation.hasNonAlphaNumeric = true
            }
            if (chars.length > 8) {
                passwordInformation.isOver8Char = true
            }
            if (chars.length > 12) {
                passwordInformation.isOver12Char = true
            }
        })

        for (const property in passwordInformation) {
            if (passwordInformation[property] === true) {
                passwordInformation.score += 1
            }
        }

        if (passwordInformation.score <= 5) {
            return <p className={`password-strength required`}>Use 8 or more characters with a mix of letters, numbers & symbols.</p>
        } else {
            return <p className="password-strength valid"><i className="fas fa-check"></i></p>
        }
    }

}

export default checkPassword
