import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

const Container = styled.div`
  #canvas {
    width: 700px;
    height: 900px;
    background-image: url("/img/fashion-unsplash.jpeg");
    background-size: cover;
  }
`;

const ImageDragPage = () => {
  // let question = confirm("영역 이름은 무엇인가요?");
  // if(question) {
  //     //영역이름 한쪽에 저장하기
  //     //영역 표시하기
  // } else {
  //     //아무것도 저장되지 않음
  // }
  let startX, startY, endX, endY, stX, stY;
  const canvasRef = useRef(null);
  const [draw, setDraw] = useState(false);
  const [ctx, setCtx] = useState(null);
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#ff0000";
    setCtx(ctx);
  }, [canvasRef.current]);

  const onMouseDown = (event) => {
    mDown(event);
  };

  const onMouseMove = (event) => {
    mMove(event);
  };

  const onMouseUp = (event) => {
    mUp(event);
  };

  const onMouseOut = (event) => {
    mOut(event);
  };

  function mMove(event) {
    if (!draw) {
      return;
    }
    //마우스를 움직일 때마다 X좌표를 nowX에 담음
    var nowX = event.nativeEvent.offsetX;
    //마우스를 움직일 때마다 Y좌표를 nowY에 담음
    var nowY = event.nativeEvent.offsetY;
    //실질적으로 캔버스에 그림을 그리는 부분
    canvasDraw(nowX, nowY);
    //마우스가 움직일때마다 X좌표를 stX에 담음
    stX = nowX;
    //마우스가 움직일때마다 Y좌표를 stY에 담음
    stY = nowY;
    //console.log(nowX, nowY);

    // const box = {
    //   startX: nowX,
    //   startY: nowY,
    //   width: 0,
    //   height: 0,
    // };
    // setBoxes([...boxes, box]);
    // console.log(boxes);
  }

  //스타트 x,y 담기
  function mDown(event) {
    const box = {
      startX: event.nativeEvent.offsetX,
      startY: event.nativeEvent.offsetY,
      width: 0,
      height: 0,
    };
    setDraw(true); //그림 그리기는 그리는 상태로 변경
    setBoxes([...boxes, box]);
  }
  //엔드 x,y 담기
  function mUp(event) {
    endX = event.nativeEvent.offsetX;
    endY = event.nativeEvent.offsetY;
    // ctx.strokeRect(startX,startY,endX-startX,endY-startY)
    setDraw(false); //마우스를 떼었을 때 그리기 중지
    canvasDraw(endX, endY);
  }
  function mOut(event) {
    setDraw(false); //마우스가 캔버스 밖으로 벗어났을 때 그리기 중지
  }

  function canvasDraw(currentX, currentY) {
    const width = currentX;
    const height = currentY;
    const box = {
      ...boxes,
      width: currentX - startX,
      height: currentY - startY,
    };
    setBoxes([...boxes, box]);

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); //설정된 영역만큼 캔버스에서 지움
    ctx.strokeRect(...boxes); //시작점과 끝점의 좌표 정보로 사각형을 그려준다.
    console.log(startX, startY, currentX, currentY);
  }
  console.log(boxes);

  return (
    <Container>
      <canvas
        id="canvas"
        width="700"
        height="900"
        ref={canvasRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseOut={onMouseOut}
      ></canvas>
    </Container>
  );
};

export default ImageDragPage;
