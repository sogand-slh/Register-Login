import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { validate } from "./validate";
import { notify } from "./toast";
import styles from "./SignUp.module.css";
import SignUpPic from "../assets/image/signup.svg";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "SignUp"));
    // console.log(errors);
  }, [data, touched]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
    // console.log(data);
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("You signed up successfully.", "success");
    } else {
      notify("Invalid data!", "error");
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.signupLeft}>
        <img alt="signup" src={SignUpPic} />
      </div>
      <div className={styles.signupRight}>
        <form onSubmit={submitHandler} className={styles.formContainer}>
          <h2 className={styles.header}>SignUp</h2>
          <div className={styles.formField}>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={data.name}
              onChange={changeHandler}
              onFocus={focusHandler}
              className={
                errors.name && touched.name
                  ? styles.uncompleted
                  : styles.formInput
              }
            />
            {errors.name && touched.name && <span>{errors.name}</span>}
          </div>
          <div className={styles.formField}>
            <label>E-mail: </label>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={data.email}
              onChange={changeHandler}
              onFocus={focusHandler}
              className={
                errors.email && touched.email
                  ? styles.uncompleted
                  : styles.formInput
              }
            />
            {errors.email && touched.email && <span>{errors.email}</span>}
          </div>
          <div className={styles.formField}>
            <label>Password: </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={data.password}
              onChange={changeHandler}
              onFocus={focusHandler}
              className={
                errors.password && touched.password
                  ? styles.uncompleted
                  : styles.formInput
              }
            />
            {errors.password && touched.password && (
              <span>{errors.password}</span>
            )}
          </div>
          <div className={styles.formField}>
            <label>Confirm Password: </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="confirmPassword"
              value={data.confirmPassword}
              onChange={changeHandler}
              onFocus={focusHandler}
              className={
                errors.confirmPassword && touched.confirmPassword
                  ? styles.uncompleted
                  : styles.formInput
              }
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <span>{errors.confirmPassword}</span>
            )}
          </div>
          <div className={styles.formField}>
            <div className={styles.checkBoxContainer}>
              <label>I accept terms of privacy policy</label>
              <input
                type="checkbox"
                name="isAccepted"
                value={data.isAccepted}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
            </div>
            {errors.isAccepted && touched.isAccepted && (
              <span>{errors.isAccepted}</span>
            )}
          </div>
          <div className={styles.formButtons}>
            <Link to="/login">Login</Link>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;

// !/\S+@\S+\.\S+/.test(data.email)
