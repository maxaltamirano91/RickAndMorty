import React from "react";
import { useState } from "react";
import validate from "../validation";

const Form = (props) => {
  const [userData, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setData({ ...userData, [name]: value });

    setErrors(
      validate({
        ...userData,
        [name]: value,
      })
    );
  };

  console.log(userData);


  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <form>
      <label>email</label>
      <input
        placeholder="email"
        type="email"
        value={userData.email}
        name="email"
        onChange={handleChange}
        
      />

      <p>{errors.email}</p>

      <label>password</label>
      <input
        placeholder="password"
        type="password"
        value={userData.password}
        name="password"
        onChange={handleChange}
      />

     <p>{errors.password}</p>

      <button tipe="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Form;
