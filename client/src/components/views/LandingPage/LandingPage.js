import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
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

function LandingPage() {
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response.data));
  }, []);

  const onClickHandle = () => {
    axios.get("/api/users/logout").then((response) => {
      console.log(response.data);
      if (response.data.success) {
        navigate("/login");
      } else {
        alert("로그아웃 실패");
      }
    });
  };
  return (
    <Main>
      <h1>시작페이지</h1>
      <button onClick={onClickHandle}>로그아웃</button>
    </Main>
  );
}

export default LandingPage;
