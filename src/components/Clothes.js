import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  left: 35vw;
  width: 12vw;
  height: 40vh;
  border: 1px solid #ccc;
  box-shadow: 4px 2px 2px rgba(0, 0, 0, 0.1);
`;

const Photo = styled.img`
  position: relative;
  width: 12vw;
  height: 30vh;
`;
const Info = styled.div`
  position: relative;
  width: 12vw;
  height: 9vh;
`;
const Name = styled.p`
  position: relative;
  width: 10vw;
  top: -10%;
  left: 5%;
  text-align: left;
  height: 3vh;
`;
const Price = styled.p`
  position: relative;
  top: -12%;
  left: 28%;
  width: 8vw;
  height: 3vh;
  text-align: right;
  color: #ad53e6;
  font-weight: bold;
`;

function Clothes() {
  let data = {
    product_code: 1,
    name: '조끼_070',
    image_url: 'https://static.pxl.ai/problem/images/VT-070.jpg',
    price: 45065,
    category_names: ['c1.tops', 'c2.outwears', 'c3.vests'],
  };

  return (
    <div>
      <Container>
        <Photo src={data.image_url}></Photo>
        <Info>
          <Name>{data.name}</Name>
          <Price>{'￦' + data.price}</Price>
        </Info>
      </Container>
    </div>
  );
}

export default Clothes;
