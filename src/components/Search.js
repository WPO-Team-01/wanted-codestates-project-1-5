import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Loading from './Loading';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../redux/clothes/productsSlice';
import { getRegions } from '../redux/clothes/regionsSlice';

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Input = styled.input`
  width: 100%;
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
  @media (max-width: 498.98px) {
    min-width: 150px;
  }
  @media (min-width: 500px) and (max-width: 767.98px) {
    min-width: 200px;
  }
`;
const Button = styled.button`
  width: 70px;
  height: 40px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  color: #000;
  background: #ebebec;
  cursor: pointer;
  margin-left: 20px;
  margin-right: 27px;
  :hover {
    background: #7c7d80;
    color: white;
  }
  @media screen and (max-width: 767.98px) {
    min-width: 50px;
    margin-right: 5px;
  }
`;

const Search = () => {
  const [text, setText] = useState('');
  const [search, setSearch] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = useSelector(state => state.products);
  const regions = useSelector(state => state.regions);

  const onChange = event => {
    setText(event.target.value);
  };

  useEffect(() => {
    !products.data && dispatch(getProducts());
    !regions.data && dispatch(getRegions());
  }, [search]);

  const submit = () => {
    setSearch(true);

    if (text === '') {
      alert('검색할 키워드를 입력해 주세요.');
    } else {
      if (!isNaN(text) || text.includes('https')) {
        navigate(`/regions?keyword=${text}`);
      } else {
        navigate(`/products?keyword=${text}`);
      }
    }
  };

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      submit();
    }
  };

  return (
    <>
      <Container>
        {products.isLoading || regions.isLoading ? <Loading /> : null}
        <Input
          placeholder='IMAGE URL or KEYWORD'
          value={text}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
        <Button onClick={submit}>검 색</Button>
      </Container>
    </>
  );
};

export default Search;
