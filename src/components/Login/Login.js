import React, { useState } from "react";
import styles from "./Login.module.css";
import InputControl from "../InputControl/InputControl";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const { SignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const handleSubmission = async () => {
    if (!values.email || !values.password) {
      setErrorMsg("*Please fill all the mandatory fields.");
      return;
    }
    setErrorMsg("");
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/v1/auth/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
          credentials: "include",
        }
      );
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("loginUser", JSON.stringify(data.data));
        SignIn();
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
        // navigate("/dashboard")
        // setSuccessMsg('You are LoggedIn Successfully')
        setSuccessMsg(response.message);
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
        <h1 className={styles.heading}>Welcome Back!</h1>
        <span>
          Need an account?{" "}
          <b>
            <Link to="/signup">Sign up</Link>
          </b>
        </span>

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
          <button onClick={handleSubmission}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
