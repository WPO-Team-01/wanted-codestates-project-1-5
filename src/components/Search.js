import React, { useState } from 'react';
import styled from 'styled-components';
import Loading from './Loading';

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767.98px) {
  }
`;
const Input = styled.input`
  width: 70%;
  height: 30px;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 1px 3px 10px 1px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  border-width: 0;
  ::placeholder {
    color: rgba(0, 0, 0, 0.2);
    font-weight: bold;
  }
  @media screen and (max-width: 767.98px) {
  }
`;
const Button = styled.button`
  width: 70px;
  height: 40px;
  margin-left: 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  color: white;
  background: #20b2ed;
  cursor: pointer;
  :hover {
    background: #1d80aa;
  }
`;

const Search = () => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onChange = event => {
    setText(event.target.value);
  };
  const loadingHandler = () => {
    setIsLoading(!isLoading);
  };

  const submit = () => {
    if (text === '') {
      alert('검색할 키워드를 입력해 주세요.');
    } else {
      // 검색 버튼을 클릭시 발생할 일들
      setText('');
      loadingHandler();

      // 삭제 예정
      console.log({ isLoading });
      // 삭제 예정
    }
  };

  return (
    <>
      <Container>
        {isLoading ? <Loading setIsLoading={setIsLoading} /> : null}
        <Input
          placeholder='IMAGE URL or KEYWORD'
          value={text}
          onChange={onChange}
        />
        <Button
          onClick={submit}
          onKeyDown={e => (e.key === 'Enter' ? submit() : null)}
        >
          검 색
        </Button>
      </Container>
    </>
  );
};

export default Search;
