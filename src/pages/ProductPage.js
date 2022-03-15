import { useEffect, useState } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import Pagination from "../components/Pagination";
import Clothes from "../components/Clothes";
import Regions from "../components/Regions";
import Header from "../components/Header";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/clothes/productsSlice";
import { fetchRegions } from "../redux/clothes/regionsSlice";

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
  const dispatch = useDispatch();
  const [category, setCategory] = useState();
  const { search } = useLocation();
  const { keyword } = queryString.parse(search);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 10; //페이지당 포스트 개수
  //현재 페이지 가져오기
  const indexOfLastPage = currentPage * postPerPage; // 1 * 35 = 35번 포스트
  const indexOfFirstPage = indexOfLastPage - postPerPage; // 35 - 35 = 0번 포스트
  const [currentPosts, setCurrentPosts] = useState(category); //0~35번까지 포스트
  //클릭 이벤트 페이지 바꾸기
  const paginate = (pageNum) => setCurrentPage(pageNum);

  const products = useSelector((state) => state.products);
  const regions = useSelector((state) => state.regions);

  useEffect(() => {
    !products.data && dispatch(fetchProducts());
    !regions.data && dispatch(fetchRegions());
  }, []);

  useEffect(() => {
    if (!regions.isLoading && !products.isLoading) {
      if (!isNaN(keyword)) {
        const findData = regions.data.find(
          (item) => item.product_code === Number(keyword),
        );
        console.log(findData);
        setTarget(findData);
        setCategory(
          products.data.filter((items) =>
            findData?.category_names.includes(items.category_names[0]),
          ),
        );
      } else {
        const findData = regions.data.find(
          (item) => item.image_url === keyword,
        );
        setTarget(findData);
        setCategory(
          products.data.filter((items) =>
            findData?.category_names.includes(items.category_names[0]),
          ),
        );
      }
    }
  }, [keyword, products, regions]);

  useEffect(() => {
    if (category?.length > 0) {
      setCurrentPosts(category.slice(indexOfFirstPage, indexOfLastPage));
    }
  }, [category, currentPage]);

  return (
    <Container>
      <Header />
      {products.isLoading || regions.isLoading ? (
        <div>로딩중입니다.</div>
      ) : (
        <>
          <Body>
            {target ? (
              <>
                <Regions regionData={target} />
                <ClothesBox>
                  {category.length > 0 &&
                    category.map((item) => {
                      return <Clothes key={item.product_code} data={item} />;
                    })}
                </ClothesBox>
              </>
            ) : (
              <div>검색 결과가 없습니다.</div>
            )}
          </Body>
          <Pagination
            postPerPage={postPerPage}
            totalPosts={130}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      )}
    </Container>
  );
}
export default ProductPage;
