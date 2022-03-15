import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  width: 500px;
  height: 50px;
  border: 1px solid blue;
`;

const Button = styled.button`
  width: 10px;
  height: 10px;
`;
const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(postPerPage, totalPosts);
  return (
    <div>
      <Container>
        {pageNumbers.map(num => (
          <Button key={num}>
            <a onClick={() => paginate(num)} href='!#' />
            {num}
          </Button>
        ))}
      </Container>
    </div>
  );
};

export default Pagination;
