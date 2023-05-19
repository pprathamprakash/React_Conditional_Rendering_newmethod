import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.condition ? null : (
        <input type="password" placeholder="Confirm Password" />
      )}
      <input
        style={{ display: props.condition ? "none" : "block" }}
        type="password"
        placeholder="Confirm Password"
      />
      <button type="submit">{props.condition ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
