import Clothes from '../components/Clothes';
import Regions from '../components/Regions';
import Header from '../components/Header';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Body = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
`;

const ClothesBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 51%;
`;

function ProductPage() {
  return (
    <Container>
      <Header />
      <Body>
        <Regions />
        <ClothesBox>
          <Clothes />
          <Clothes />
          <Clothes />
          <Clothes />
          <Clothes />
          <Clothes />
          <Clothes />
        </ClothesBox>
      </Body>
    </Container>
  );
}
export default ProductPage;
