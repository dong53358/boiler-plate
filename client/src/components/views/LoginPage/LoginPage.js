import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import loginUser from "../../../_actions/user_action";
import { useNavigate } from "react-router-dom";
import Auth from "../hoc/Auth";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 30px;
  font-weight: bold;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 400;
`;

function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmailDate] = useState("");
  const [password, setPasswordDate] = useState("");
  const navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();

    let body = {
      email: email,
      password: password,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        navigate("/");
      } else {
        alert("Error");
      }
    });

    setEmailDate("");
    setPasswordDate("");
  };
  const handleChange = (event) => {
    if (event.target.type === "email") {
      setEmailDate(event.target.value);
    } else if (event.target.type === "password") {
      setPasswordDate(event.target.value);
    }
  };
  return (
    <Main>
      <LoginForm onSubmit={onSubmit}>
        <label>Email</label>
        <input type="email" value={email} onChange={handleChange}></input>
        <label>Password</label>
        <input type="password" value={password} onChange={handleChange}></input>
        <br />
        <button type="submit">Login</button>
      </LoginForm>
    </Main>
  );
}

export default Auth(LoginPage, false);
