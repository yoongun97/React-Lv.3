import React from "react";
import { styled } from "styled-components";
import { useState } from "react";

const StBox = styled.div`
  display: flex;
  border: 1px solid black;
  width: 500px;
  height: 100px;
  overflow: hidden;
`;

const DropdownWrapper = styled.div`
  width: 200px;
  height: 40px;
  border: 1px solid #ccc;
`;

const DropdownHeader = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const DropdownList = styled.div`
  border-top: 1px solid #ccc;
  width: 200px;
  border: 1px solid #ccc;
  background-color: #ffffff;
`;

const DropdownItem = styled.div`
    padding:10pxcursor:pointer;
    &:hover{
        background-color: lightgray;
    }
`;

const SecondSelect = () => {
  const options = ["리액트", "자바", "스프링", "리액트네이티브"];
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsActive(false);
  };

  return (
    <>
      <DropdownWrapper>
        <DropdownHeader
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <span>{selectedOption || "선택하세요"}</span>
          <span>🔽</span>
        </DropdownHeader>
        {isActive && (
          <DropdownList>
            {options.map((option) => (
              <DropdownItem
                key={option}
                onClick={() => {
                  handleOptionClick(option);
                }}
              >
                {option}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownWrapper>
    </>
  );
};

export default SecondSelect;
