import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const BaseCanvas = styled.canvas`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: no-repeat center/100% url("/assets/sampleImage.jpg");
`;

const DragCanvas = styled.canvas`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const DragConvas = () => {
  const [registerItems, setRegisterItems] = useState(
    JSON.parse(localStorage.getItem("registerItems"))
  );
  const canvasRef = useRef(null);
  const baseCanvasRef = useRef(null);
  const [ctx, setCtx] = useState();
  const [baseCtx, setBaseCtx] = useState();
  const [draw, setDraw] = useState(false);

  const [startX, setStartX] = useState();
  const [startY, setStartY] = useState();
  const [endX, setEndX] = useState();
  const [endY, setEndY] = useState();

  const [posX, setPosX] = useState();
  const [posY, setPosY] = useState();

  useEffect(() => {
    const canvas = canvasRef.current;
    const baseCanvas = baseCanvasRef.current;
    setCtx(canvas?.getContext("2d"));
    setBaseCtx(baseCanvas?.getContext("2d"));

    setPosX(canvasRef.current.getBoundingClientRect().left);
    setPosY(canvasRef.current.getBoundingClientRect().top);

    if (baseCtx) {
      baseCtx.clearRect(0, 0, baseCtx.canvas.width, baseCtx.canvas.height);
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      if (!registerItems) {
        localStorage.setItem("registerItems", JSON.stringify([]));
        setRegisterItems(JSON.parse(localStorage.getItem("registerItems")));
      } else {
        let initRegisterItems = JSON.parse(
          localStorage.getItem("registerItems")
        );

        initRegisterItems.forEach((elem) => {
          baseCtx.strokeStyle = "rgb(34, 180, 250)";
          baseCtx.lineWidth = 0.8;
          baseCtx.strokeRect(
            elem.itemStartX,
            elem.itemStartY,
            elem.itemEndX - elem.itemStartX,
            elem.itemEndY - elem.itemStartY
          );
          baseCtx.fillStyle = "rgba(235, 212, 0, 0.2)";
          baseCtx.fillRect(
            elem.itemStartX,
            elem.itemStartY,
            elem.itemEndX - elem.itemStartX,
            elem.itemEndY - elem.itemStartY
          );

          const minX = Math.min(elem.itemStartX, elem.itemEndX);
          const minY = Math.min(elem.itemStartY, elem.itemEndY);

          baseCtx.fillStyle = "black";
          baseCtx.font = "normal bold 20px sans-serif";
          baseCtx.fillText(elem.itemName, minX, minY + 20);
        });
      }
    }
  }, [ctx, baseCtx, registerItems, draw]);

  const drawStart = (e) => {
    setDraw(true);

    console.log(e.clientX - posX, e.clientY - posY);

    setStartX(e.clientX - posX);
    setStartY(e.clientY - posY);
    // setStartX(e.clientX - ctx.canvas.offsetLeft);
    // setStartY(e.clientY - ctx.canvas.offsetTop);
  };

  const drawMove = (e) => {
    if (draw) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      setEndX(e.clientX - posX);
      setEndY(e.clientY - posY);
      // setEndX(e.clientX - ctx.canvas.offsetLeft);
      // setEndY(e.clientY - ctx.canvas.offsetTop);

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

        baseCtx.fillStyle = "black";
        baseCtx.fillText(registerItem, startX, startY);
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
    <div>
      <DragCanvas
        ref={canvasRef}
        width={720}
        height={900}
        onMouseDown={(e) => drawStart(e)}
        onMouseMove={(e) => drawMove(e)}
        onMouseUp={drawEnd}
        onMouseOut={drawOut}
      />
      <BaseCanvas ref={baseCanvasRef} width={720} height={900} />
    </div>
  );
};

export default DragConvas;
