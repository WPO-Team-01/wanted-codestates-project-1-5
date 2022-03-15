import Clothes from '../components/Clothes';
import Regions from '../components/Regions';
import Header from '../components/Header';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Body = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 500px) and (max-width: 767.98px) {
  }
`;

const ClothesBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  @media (max-width: 500px) {
    justify-content: center;
  }
`;

function ProductPage() {
  const [target, setTarget] = useState();
  const [category, setCategory] = useState();
  const { search } = useLocation();
  const { keyword } = queryString.parse(search);

  const regions = JSON.parse(localStorage.getItem('regions'));
  const product = JSON.parse(localStorage.getItem('products'));

  useEffect(() => {
    if (!isNaN(keyword)) {
      const findData = regions.state.data.find(
        item => item.product_code === Number(keyword),
      );
      setTarget(findData);
      setCategory(
        product.state.data.filter(items =>
          findData?.category_names.includes(items.category_names[0]),
        ),
      );
    } else {
      const findData = regions.state.data.find(
        item => item.image_url === keyword,
      );
      setTarget(findData);
      setCategory(
        product.state.data.filter(items =>
          findData?.category_names.includes(items.category_names[0]),
        ),
      );
    }
  }, [keyword]);

  return (
    <Container>
      <Header />
      <Body>
        {target ? (
          <>
            <Regions regionData={target} />
            <ClothesBox>
              {category.map(item => {
                return <Clothes key={item.product_code} data={item} />;
              })}
            </ClothesBox>
          </>
        ) : (
          <div>검색 결과가 없습니다.</div>
        )}
      </Body>
    </Container>
  );
}
export default ProductPage;
