import React from 'react';
import styled from 'styled-components';
import Search from './Search';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 2.5%;
  margin-top: 1%;
`;

const Logo = styled.img`
  width: 100px;
  object-fit: contain;
`;
const SearchWrapper = styled.div`
  width: 800px;
`;

const Header = () => {
  return (
    <Container>
      <Logo src='image/logo.png'></Logo>
      <SearchWrapper>
        <Search />
      </SearchWrapper>
    </Container>
  );
};

export default Header;
