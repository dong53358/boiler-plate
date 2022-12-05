import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import loginUser, { registerUser } from "../../../_actions/user_action";
import { useNavigate } from "react-router-dom";

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

function RegisterPage() {
  const [email, setEmailDate] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }

    let body = {
      email: email,
      password: password,
      name: name,
    };

    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        navigate("/login");
      } else {
        alert("회원가입 실패");
      }
    });

    setEmailDate("");
    setName("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleChange = (event) => {
    if (event.target.type === "email") {
      setEmailDate(event.target.value);
    } else if (event.target.type === "text") {
      setName(event.target.value);
    } else if (event.target.type === "password") {
      setPassword(event.target.value);
    }
  };
  const comfirmhandle = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <Main>
      <LoginForm onSubmit={onSubmit}>
        <label>Email</label>
        <input type="email" value={email} onChange={handleChange}></input>

        <label>Name</label>
        <input type="text" value={name} onChange={handleChange}></input>

        <label>Password</label>
        <input type="password" value={password} onChange={handleChange}></input>

        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={comfirmhandle}
        ></input>

        <br />

        <button type="submit">회원가입</button>
      </LoginForm>
    </Main>
  );
}

export default RegisterPage;
