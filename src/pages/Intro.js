import React from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  border: 1px solid black;
`;
const SubContainer = styled.div`
  width: 50%;
  height: 100%;
  border: 1px solid red;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Intro = () => {
  return (
    <Container>
      <SubContainer>
        <Image />
      </SubContainer>
      <SubContainer>
        <Image src="image/과제2.jpeg" />
      </SubContainer>
    </Container>
  );
};

export default Intro;
