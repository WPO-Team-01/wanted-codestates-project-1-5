import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Container = styled.div`
  display: flex;

  #canvas {
    width: 700px;
    height: 900px;
    background-image: url("https://wpo-team-01.github.io/wanted-codestates-project-1-5/img/fashion-unsplash.jpeg");
    background-size: cover;
  }
`;

const MemoArea = styled.div`
  background-color: #f5f5f5;
  padding: 10px 20px;
  margin: 20px;
  height: fit-content;
  text-align: left;
`;

const MemoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const MemoText = styled.p`
  margin: 10px 20px 10px 0;
  flex-grow: 1;
`;

const getNewBox = (startX, startY) => {
  return {
    startY,
    startX,
    width: 0,
    height: 0,
  };
};

const ImageDragPage = () => {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState(null);
  const [itemBoxes, setItemBoxes] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [isEntered, setIsEntered] = useState(false);

  const setItem = (itemBox) => {
    window.localStorage.setItem("itemBox", JSON.stringify(itemBox));
  };
  const getItem = () => {
    return JSON.parse(window.localStorage.getItem("itemBox"));
  };

  useEffect(() => {
    const newItemBoxes = getItem();
    if (newItemBoxes) {
      setItemBoxes(newItemBoxes);
    }
  }, []);

  useEffect(() => {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    itemBoxes.forEach((box) => {
      ctx.strokeStyle = "#1ed5e2";
      ctx.fillStyle = "rgba(148,245,96,0.3)";
      if (!box.name) {
        ctx.strokeStyle = "#ef2e77";
        ctx.fillStyle = "rgba(239,45,116,0.3)";
      }
      ctx.fillRect(box.startX, box.startY, box.width, box.height);
      ctx.strokeRect(box.startX, box.startY, box.width, box.height);

      if (box.name) {
        ctx.fillStyle = "#000";
        ctx.font = "bold 16px Roboto";
        if (box.width < 0) {
          if (box.height < 0) {
            ctx.fillText(
              box.name,
              box.startX + 5 + box.width,
              box.startY + 20 + box.height
            );
          } else {
            ctx.fillText(box.name, box.startX + 5 + box.width, box.startY + 20);
          }
        } else if (box.width > 0) {
          if (box.height < 0) {
            ctx.fillText(
              box.name,
              box.startX + 5,
              box.startY + 20 + box.height
            );
          } else {
            ctx.fillText(box.name, box.startX + 5, box.startY + 20);
          }
        }
      }
    });
  }, [itemBoxes, ctx]);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#f22672";
    ctx.fillStyle = "#F2267230";
    setCtx(ctx);
  }, []);

  const onMouseDown = (event) => {
    const startX = event.nativeEvent.offsetX;
    const startY = event.nativeEvent.offsetY;
    const newBox = getNewBox(startX, startY);
    setItemBoxes([...itemBoxes, newBox]);
    setIsClicked(true);
  };

  // const activeArea = (id) => {
  //   console.log(id, itemBoxes);
  //   itemBoxes.map((box, index) => {
  //     if (index === id) {
  //       ctx.strokeStyle = "#ef2e77";
  //       ctx.fillStyle = "rgba(239,45,116,0.3)";
  //       ctx.fillRect(box.startX, box.startY, box.width, box.height);
  //     }
  //     return box;
  //   });
  // };

  const onMouseMove = (event) => {
    if (!isClicked) {
      return;
    }

    const currentX = event.nativeEvent.offsetX;
    const currentY = event.nativeEvent.offsetY;

    const cloneBoxes = [...itemBoxes];
    const currentBox = cloneBoxes[cloneBoxes.length - 1];

    const width = currentX - currentBox.startX;
    const height = currentY - currentBox.startY;

    currentBox.width = width;
    currentBox.height = height;

    setItemBoxes([...cloneBoxes]);
  };

  const onMouseUp = (event) => {
    let endX = event.nativeEvent.offsetX;
    let endY = event.nativeEvent.offsetY;

    const cloneBoxes = [...itemBoxes];
    const currentBox = cloneBoxes[cloneBoxes.length - 1];

    if (currentBox.startX === endX || currentBox.startY === endY) {
      cancelDraw();
      return;
    }
    const name = prompt("영역의 이름은 무엇인가요?");
    if (!name) {
      cancelDraw();
      return;
    }
    currentBox.name = name;
    setItemBoxes([...cloneBoxes]);
    setItem([...cloneBoxes]);
    setIsClicked(false);
  };

  const onMouseOut = () => {
    if (isClicked) {
      cancelDraw();
    }
  };

  const cancelDraw = () => {
    const cloneBoxes = [...itemBoxes];
    cloneBoxes.pop();
    setItemBoxes([...cloneBoxes]);
    setIsClicked(false);
  };

  const editItemBoxName = (id) => {
    console.log(id);
    const changeName = prompt("변경할 이름을 적어주세요");
    if (changeName) {
      const newItems = itemBoxes.map((box, index) => {
        if (index === id) {
          const newBox = {
            ...box,
            name: changeName,
          };
          return newBox;
        } else {
          return box;
        }
      });
      setItemBoxes(newItems);
    }
  };

  const deleteItemBox = (id) => {
    const check = window.confirm("삭제하시겠습니까?");
    if (check) {
      const deleteItem = itemBoxes.filter((box, index) => index !== id);
      setItemBoxes(deleteItem);
      setItem(deleteItem);
    }
  };

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
      {itemBoxes && itemBoxes.length > 0 && (
        <MemoArea>
          {itemBoxes &&
            itemBoxes?.map((itemBox, id) => (
              <div key={id}>
                {itemBox.name && (
                  <MemoWrapper>
                    <MemoText>{itemBox.name}</MemoText>
                    <EditIcon onClick={() => editItemBoxName(id)} />
                    <DeleteIcon onClick={() => deleteItemBox(id)} />
                  </MemoWrapper>
                )}
              </div>
            ))}
        </MemoArea>
      )}
    </Container>
  );
};

export default ImageDragPage;
