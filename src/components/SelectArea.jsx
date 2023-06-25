import React from "react";
import { styled } from "styled-components";
import { useState } from "react";
import SecondSelect from "./SecondSelect";
import FirstSelect from "./FirstSelect";

const StBox = styled.div`
  display: flex;
  border: 1px solid black;
  width: 500px;
  height: 100px;
  overflow: hidden;
`;

const SelectArea = () => {
  const options = ["리액트", "자바", "스프링", "리액트네이티브"];
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsActive(false);
  };

  return (
    <>
      <h2> Select</h2>
      <StBox>
        <FirstSelect />
        <SecondSelect />
      </StBox>
    </>
  );
};

export default SelectArea;
