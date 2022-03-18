### 배포 링크
https://wpo-team-01.github.io/wanted-codestates-project-1-5/

### 프로젝트 실행 방법
1. npm install
2. npm start

### 구현한 기능 목록
문제 1 : 상품을 검색하여 반응형으로 상품 리스트를 출력
 - loading : 데이터가 로딩 중임을 알려주는 UI 처리
 - pagination : 대용량 데이터를 사용자가 효율적으로 볼 수 있게 pagination 도입
 - keyword를 검색하여 매칭된 상품 검색 가능
 - image url을 검색하여 매칭된 상품 검색 가능
 - product code를 검색하여 매칭된 상품 검색 가능
 - 이미지 클릭 시 product_url의 정보로 라우팅

  
  
문제 2 : 이미지의 특정 영역을 드래그해 선택 후 선택한 영역 이름 붙이기
 - 이미지의 특정 영역을 드래그해 선택 후 선택한 영역의 이름 붙이기
 - 지정 영역 수정, 삭제하기
 - 지정 영역 localStorage에 저장하기

  

### 어려웠던 점

처음 만들어보는 기능들이다 보니 기능들의 자잘한 버그들이  생겨 버그를 수정하는데 애를 먹었다.

로컬스토리지에 데이터를 저장하여 캐시히트 기능을 구현하는 것에 대해 많은 고민과 시행착오가 있었다.

반응형 웹페이지를 구성하는데 있어서 css의 절대단위와 상대단위에 대한 개념이 부족해서 의문이 드는 경우가 많아 어려웠다.

pagination을 라이브러리 없이 직접 구현하는데 어떻게 데이터를 관리할 것인지 많은 시행착오가 있었다.

pagination 구현시 불러오는 데이터의 개수가 달라서 페이지네이션 버튼을 구현할 때 어려움을 느꼈다.

canvas로 사각형 영역을 잡을 때 실시간으로 그려지는 것을 구현하는데 사각형 영역이 드래깅 되는 것이 잔상으로 화면에 나타나 어려움을 겪었다.

canvas로 새로운 영역을 그릴 때 이전에 저장되어 있던 영역이 모두 날아가는 현상이 있었다. useEffect로 로컬스토리지에 저장되어 있던 내용을 mouseMove 이벤트할 때마다 매번 새로 그려줄 수 있도록하여 해결했다.
