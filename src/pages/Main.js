import React from "react";
import styled from "styled-components";
import Search from "../components/Search";

const Header = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  width: 200px;
  height: 50px;
  object-fit: contain;
  cursor: pointer;
`;
const Container = styled.section`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 2.5rem;
  color: #4a4a4b;
  line-height: 1.5;
  margin-bottom: 100px;
`;
const Bold = styled.span`
  font-weight: bolder;
`;
const SubContainer = styled.section`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const main = () => {
  const gotoMain = () => {
    // 로고 클릭시 메인 페이지로 이동
  };

  return (
    <>
      <Header>
        <Logo src="image/logo.png" onClick={gotoMain} />
      </Header>
      <Container>
        <Title>
          <Bold>Artificial Intelligence</Bold>
          <br />
          PXL <Bold>Fashion</Bold> Viewer
        </Title>
        <SubContainer>
          <Search />
        </SubContainer>
      </Container>
    </>
  );
};

export default main;
