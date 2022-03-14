import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  width: 20vw;
  height: 99vh;
`;

const Photo = styled.img`
  position: relative;
  width: 20vw;
  height: 50vh;
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
  width: 5vw;
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
  margin-left: 0.5vw;
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

function Regions() {
  let regionData = {
    product_code: 1,
    region_id: 2910,
    image_url: 'https://static.pxl.ai/problem/images/VT-070.jpg',
    gender: 'gender.unisex',
    attributes: [
      {
        style: 'basic_or_minimal_or_normcore',
      },
      {
        season: 'summer',
      },
      {
        occasion: 'gym_or_outdoor',
      },
      {
        fabric: 'knit_or_angora',
      },
      {
        sense: 'sportive',
      },
      {
        pattern: 'leopard',
      },
    ],
    category_names: ['c1.tops', 'c2.outwears', 'c3.vests'],
  };

  return (
    <Container>
      <Photo src={regionData.image_url}></Photo>
      <Items>
        <Text>ITEMS</Text>
        <Box>{regionData.category_names[0].replace('c1.', '')}</Box>
      </Items>
      <Text2>ATTRIBUTES</Text2>
      <Box2>
        {regionData.attributes.map(el => {
          let key = String(Object.keys(el));
          return (
            <Tag>
              <Value>{('#' + el[Object.keys(el)]).toUpperCase()}</Value>
              <Key>{key.toUpperCase()}</Key>
            </Tag>
          );
        })}
      </Box2>
    </Container>
  );
}
export default Regions;
