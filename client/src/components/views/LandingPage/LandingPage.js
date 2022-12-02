import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 30px;
  font-weight: bold;
`;

function LandingPage() {
  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response.data));
  }, []);

  return <Main>시작 페이지</Main>;
}

export default LandingPage;
