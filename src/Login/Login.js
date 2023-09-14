import React, { useState } from "react";
import styles from "./Login.module.css";
import InputControl from "../InputControl/InputControl";
import { Link } from "react-router-dom";


function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const handleSubmission = async () => {
    if (!values.email || !values.password) {
      setErrorMsg("*Please fill all the mandatory fields.");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    try {
      const response = await fetch(
        "https://www.travelpalette.me/api/v1/auth/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      if (response.ok) {
        setSuccessMsg('You are LoggedIn Successfully')
      } else {
        setErrorMsg("Please enter correct username or password");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading} >Welcome Back!</h1>
        <b>
            Already have an account?{" "}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </b>

        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div className={styles.footer}>
          <b className={styles.success}>{successMsg}</b>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;