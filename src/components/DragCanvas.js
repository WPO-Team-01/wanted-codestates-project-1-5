import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const DragCanvas = styled.canvas`
  background: no-repeat center/100% url("/assets/sampleImage.jpg");
`;

const DragConvas = () => {
  const [registerItems, setRegisterItems] = useState(
    JSON.parse(localStorage.getItem("registerItems"))
  );
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState();
  const [draw, setDraw] = useState(false);

  const [startX, setStartX] = useState();
  const [startY, setStartY] = useState();
  const [endX, setEndX] = useState();
  const [endY, setEndY] = useState();

  useEffect(() => {
    const canvas = canvasRef.current;
    setCtx(canvas?.getContext("2d"));

    if (ctx) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      if (!registerItems) {
        localStorage.setItem("registerItems", JSON.stringify([]));
        setRegisterItems(JSON.parse(localStorage.getItem("registerItems")));
      } else {
        let initRegisterItems = JSON.parse(
          localStorage.getItem("registerItems")
        );

        initRegisterItems.forEach((elem) => {
          ctx.strokeStyle = "rgb(34, 180, 250)";
          ctx.lineWidth = 0.8;
          ctx.strokeRect(
            elem.itemStartX,
            elem.itemStartY,
            elem.itemEndX - elem.itemStartX,
            elem.itemEndY - elem.itemStartY
          );
          ctx.fillStyle = "rgba(235, 212, 0, 0.2)";
          ctx.fillRect(
            elem.itemStartX,
            elem.itemStartY,
            elem.itemEndX - elem.itemStartX,
            elem.itemEndY - elem.itemStartY
          );
        });
      }
    }
  }, [ctx, registerItems, draw]);

  const drawStart = (e) => {
    setDraw(true);
    setStartX(e.clientX - ctx.canvas.offsetLeft);
    setStartY(e.clientY - ctx.canvas.offsetTop);
  };

  const drawMove = (e) => {
    if (draw) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      setEndX(e.clientX - ctx.canvas.offsetLeft);
      setEndY(e.clientY - ctx.canvas.offsetTop);

      ctx.strokeStyle = "red";
      ctx.lineWidth = 0.5;
      ctx.strokeRect(startX, startY, endX - startX, endY - startY);

      ctx.fillStyle = "rgba(200, 0, 100, 0.2)";
      ctx.fillRect(startX, startY, endX - startX, endY - startY);
    }
  };

  const drawEnd = () => {
    if (endX && endY) {
      let registerItem = window.prompt("영역의 이름은 무엇인가요?");
      if (registerItem) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        let getRegisterItems = JSON.parse(
          localStorage.getItem("registerItems")
        );

        let item = {
          itemName: registerItem,
          itemStartX: startX,
          itemStartY: startY,
          itemEndX: endX,
          itemEndY: endY,
        };

        getRegisterItems.push(item);
        localStorage.setItem("registerItems", JSON.stringify(getRegisterItems));
        setRegisterItems((registerItems) => [...registerItems, item]);
      }
    }
    setDraw(false);
    setStartX();
    setStartY();
    setEndX();
    setEndY();
  };

  const drawOut = () => {
    if (draw) {
      setDraw(false);
      setStartX();
      setStartY();
      setEndX();
      setEndY();
    }
  };

  return (
      <DragCanvas
        ref={canvasRef}
        width={720}
        height={900}
        onMouseDown={(e) => drawStart(e)}
        onMouseMove={(e) => drawMove(e)}
        onMouseUp={drawEnd}
        onMouseOut={drawOut}
      />
  );
};

export default DragConvas;
