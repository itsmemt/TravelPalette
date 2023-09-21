import React, { useState } from "react";
import styles from "./Signup.module.css";
import { Link ,useNavigate } from "react-router-dom";
import InputControl from "../InputControl/InputControl";

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = async () => {
    if (!values.name || !values.email || !values.password) {
      setErrorMsg("*Please fill all the mandatory fields.");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    try {
      const response = await fetch(
        "https://www.travelpalette.me/api/v1/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      if (response.ok) {
        navigate("/login")
        setSuccessMsg('User Created Successfully')
      } else {
        setErrorMsg("Something Went Wrong");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  const handleGoogleLogin = async ()=>{
      // try {
      //     const posts = await fetch(" https://www.travelpalette.me/api/v1/auth/google")
      //   } catch(err){
      //   }
  }
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Create an Account</h1>
        <p>
          Already have an account?{" "}
          <b>
            <Link to="/login">Sign In</Link>
          </b>
        </p>
        <button onClick={handleGoogleLogin}>Sign in with Google</button>
        <InputControl
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }
        />

        <div className={styles.footer}>
        <b className={styles.success}>{successMsg}</b>
        <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
