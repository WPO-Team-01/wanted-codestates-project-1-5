import styled from "styled-components";

const Container = styled.div`
  width: 420px;
  height: 110%;
  margin-right: 5%;
`;

const Photo = styled.img`
  position: relative;
  width: 100%;
  min-width: 210px;
  object-fit: contain;
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 20vw;
  height: 8vh;
  border-bottom: 1px solid #ccc;
`;

const Text = styled.p`
  position: relative;
  width: 90px;
  font-weight: bold;
  color: rgb(51, 51, 51);
  font-size: 1.5rem;
`;

const Box = styled.div`
  display: inline-block;
  height: 4vh;
  text-align: center;
  line-height: 4vh;
  background-color: #ad53e6;
  color: #fff;
  font-weight: 500;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
  margin-left: 10px;
`;

const Text2 = styled.p`
  position: relative;
  width: 5vw;
  left: 0.5vw;
  font-weight: bold;
  color: rgb(51, 51, 51);
  font-size: 1.5rem;
`;

const Box2 = styled.div`
  position: relative;
  top: -2vh;
  left: 1vw;
  width: 18vw;
  height: 34vh;
`;

const Tag = styled.div`
  /* display: inline-block; */
  float: left;
  text-align: left;
  height: 8vh;
  margin-right: 1vw;
`;

const Value = styled.p`
  color: #ad53e6;
  font-weight: bold;
`;

const Key = styled.p`
  color: #0c0c0c;
`;

function Regions({ regionData }) {
  return (
    <Container>
      <Photo src={regionData.image_url}></Photo>
      <Items>
        <Text>ITEMS</Text>
        <Box>{regionData.category_names[0].replace("c1.", "")}</Box>
      </Items>
      <Text2>ATTRIBUTES</Text2>
      <Box2>
        {regionData.attributes.map((el) => {
          let key = String(Object.keys(el));
          return (
            <Tag key={key}>
              <Value>{("#" + el[Object.keys(el)]).toUpperCase()}</Value>
              <Key>{key.toUpperCase()}</Key>
            </Tag>
          );
        })}
      </Box2>
    </Container>
  );
}
export default Regions;
