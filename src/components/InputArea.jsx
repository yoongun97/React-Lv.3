import { styled } from "styled-components";
import { useState } from "react";

const StInputBox = styled.div`
  display: flex;
  align-items: center;
`;

const StInputTitle = styled.span``;

const StInputValue = styled.input`
  height: 30px;

  border-radius: 10px;

  margin-right: 20px;

  padding: 5px;
`;

const StSmallBtn = styled.button`
  width: 100px;
  height: 45px;

  margin-left: 10px;
  margin-right: 10px;

  border-radius: 10px;

  background-color: ${(props) => props.backgroundColor};

  cursor: pointer;

  border: none;
`;

const InputArea = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const newNameHandler = (event) => {
    setName(event.target.value);
  };
  const newPriceHandler = (event) => {
    const newPrice = event.target.value
      .replace(/[^0-9]/g, "") // 숫자 이외의 문자 제거
      .replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 자릿수마다 콤마 추가
    setPrice(newPrice);
  };

  const SaveBtnClick = () => {
    if (name.length === 0) {
      alert("이름을 입력해주세요");
    } else if (price.length === 0) {
      alert("가격을 입력해주세요");
    } else {
      alert(`{name: ${name}, price: ${price.replace(/,/g, "")}}`);
      setName("");
      setPrice("");
    }
  };

  return (
    <>
      <h1>Input</h1>
      <StInputBox>
        <StInputTitle>이름</StInputTitle>
        <StInputValue
          type="text"
          value={name}
          onChange={newNameHandler}
        ></StInputValue>
        <StInputTitle>가격</StInputTitle>
        <StInputValue
          value={price}
          type="text"
          placeholder="0"
          onChange={newPriceHandler}
        ></StInputValue>
        <StSmallBtn backgroundColor="#ACB57E" onClick={SaveBtnClick}>
          저장
        </StSmallBtn>
      </StInputBox>
    </>
  );
};

export default InputArea;
