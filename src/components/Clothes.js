import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 210px;
  height: 370px;
  border: 1px solid #ccc;
  box-shadow: 4px 2px 2px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-right: 20px; //왜 %는 안먹져
  margin-bottom: 20px;
`;

const Photo = styled.img`
  position: relative;
  width: 100%;
  height: 30vh;
`;
const Info = styled.div`
  position: relative;
  width: 100%;
  height: 8vh;
`;
const Name = styled.p`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding-left: 5%;
  top: -10%;
  text-align: left;
`;
const Price = styled.div`
  position: relative;
  top: -5%;
  box-sizing: border-box;
  width: 100%;
  padding-right: 5%;
  text-align: right;
  color: #ad53e6;
  font-weight: bold;
`;

function Clothes({ data }) {
  return (
    <div>
      <Container>
        <a href={data.image_url}>
          <Photo src={data.image_url}></Photo>
        </a>
        <Info>
          <Name>{data.name}</Name>
          <Price>{"￦" + data.price}</Price>
        </Info>
      </Container>
    </div>
  );
}

export default Clothes;
