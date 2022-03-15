import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Search from "./Search";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-bottom: 2.5%;
  margin-top: 1%;
  @media (max-width: 500px) {
    width: 90%;
  }
  @media (min-width: 500px) and (max-width: 767.98px) {
  }
`;

const Logo = styled.img`
  width: 100px;
  object-fit: contain;
  margin-right: 20px;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 50px;
  }
  @media (min-width: 500px) and (max-width: 767.98px) {
    width: 70px;
  }
`;
const SearchWrapper = styled.div`
  width: 800px;
`;

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <Logo src="image/logo.png"></Logo>
      </Link>
      <SearchWrapper>
        <Search />
      </SearchWrapper>
    </Container>
  );
};

export default Header;
