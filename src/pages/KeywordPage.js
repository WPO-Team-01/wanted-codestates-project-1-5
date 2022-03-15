import Header from "../components/Header";
import Clothes from "../components/Clothes";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ClothesBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
`;

function KeywordPage() {
  const [category, setCategory] = useState();
  const { search } = useLocation();
  const { keyword } = queryString.parse(search);

  const product = JSON.parse(localStorage.getItem("products"));

  useEffect(() => {
    if (product) {
      setCategory(
        product.state.data.filter((item) => item.name.includes(keyword)),
      );
    }
  }, [keyword]);

  return (
    <Container>
      <Header />
      <ClothesBox>
        {category?.length > 0 ? (
          category.map((item) => {
            return <Clothes data={item} key={item.product_code} />;
          })
        ) : (
          <div>검색 결과가 없습니다.</div>
        )}
      </ClothesBox>
    </Container>
  );
}
export default KeywordPage;
