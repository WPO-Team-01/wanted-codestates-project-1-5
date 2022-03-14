import Header from '../components/Header';
import Clothes from '../components/Clothes';
import styled from 'styled-components';

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
  return (
    <Container>
      <Header />
      <ClothesBox>
        <Clothes />
        <Clothes />
        <Clothes />
        <Clothes />
        <Clothes />
        <Clothes />
        <Clothes />
        <Clothes />
        <Clothes />
        <Clothes />
        <Clothes />
        <Clothes />
        <Clothes />
        <Clothes />
        <Clothes />
        <Clothes />
      </ClothesBox>
    </Container>
  );
}
export default KeywordPage;
