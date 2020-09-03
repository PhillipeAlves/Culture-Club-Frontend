import React from "react";
import "./Email.css";

function Email(props) {
  return (
    <div className="email-container">
      <input
        onChange={props.onChange}
        value={props.email}
        placeholder="email"
        type="email"
      />
      {props.email !== "" ? (
        isValidEmail(props.email)
      ) : (
        <p className="valid-placeholder">email</p>
      )}
    </div>
  );
}

function isValidEmail(email) {
  const validEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  if (validEmail.test(email)) {
    return (
      <p className="valid">
        <i className="fas fa-check"></i>
      </p>
    );
  } else {
    return <p className="required">Please enter a valid email.</p>;
  }
}

export default Email;
