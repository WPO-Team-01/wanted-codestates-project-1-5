import Header from '../components/Header';
import Clothes from '../components/Clothes';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import styled from 'styled-components';
import Pagination from '../components/Pagination';
import ClothesBox from '../components/ClothesBox';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function KeywordPage() {
  const [category, setCategory] = useState();
  const { search } = useLocation();
  const { keyword } = queryString.parse(search);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 21; //페이지당 포스트 개수
  //현재 페이지 가져오기
  const indexOfLastPage = currentPage * postPerPage; // 1 * 35 = 35번 포스트
  const indexOfFirstPage = indexOfLastPage - postPerPage; // 35 - 35 = 0번 포스트
  const [currentPosts, setCurrentPosts] = useState(category); //0~35번까지 포스트
  //클릭 이벤트 페이지 바꾸기
  const paginate = pageNum => setCurrentPage(pageNum);

  const product = JSON.parse(localStorage.getItem('products'));

  useEffect(() => {
    if (product) {
      setCategory(
        product.state.data.filter(item => item.name.includes(keyword)),
      );
    }
  }, [keyword]);

  useEffect(() => {
    if (category?.length > 0) {
      setCurrentPosts(category.slice(indexOfFirstPage, indexOfLastPage));
    }
  }, [category, currentPage]);
  console.log(category);
  return (
    <Container>
      <Header />
      <ClothesBox posts={currentPosts} />
      <Pagination
        postPerPage={postPerPage}
        totalPosts={100}
        paginate={paginate}
        currentPage={currentPage}
      />
    </Container>
  );
}
export default KeywordPage;
