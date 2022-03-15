import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 50px;
`;

const Button = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-left: 10px;
  font-size: 24px;
  color: ${({ num, currentPage }) => (num === currentPage ? 'white' : 'black')};
  background: ${({ num, currentPage }) =>
    num === currentPage ? '#9f6dfa' : null};
  border-radius: 5px;
  box-shadow: none;
  cursor: pointer;
  :hover {
    background: #ebebec;
  }
`;

const Pagination = ({ postPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <Container>
        {pageNumbers.map(num => (
          <Button
            key={num}
            num={num}
            currentPage={currentPage}
            onClick={() => paginate(num)}
          >
            {num}
          </Button>
        ))}
      </Container>
    </div>
  );
};

export default Pagination;
