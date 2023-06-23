import "./App.css";
import { styled } from "styled-components";
import { useRef } from "react";

const StLayout = styled.div`
  padding: 20px;
`;

const StLargeBtn = styled.button`
  width: 200px;
  height: 50px;

  margin-top: 10px;

  background-color: white;

  border-radius: 10px;
  border-color: ${(props) => props.borderColor};
  border-width: 4px;80%

  cursor: pointer;

`;

const StMediumBtn = styled.button`
  width: 150px;
  height: 50px;

  margin-left: 10px;
  margin-top: 10px;

  border-radius: 10px;

  background-color: ${(props) => props.backgroundColor};

  cursor: pointer;
`;

const StSmallBtn = styled.button`
  width: 100px;
  height: 45px;

  margin-left: 10px;
  margin-right: 10px;

  border-radius: 10px;

  background-color: ${(props) => props.backgroundColor};

  cursor: pointer;
`;

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

const StSelectContainer = styled.div`
  border: 4px solid #dddddd;
  height: 200px;

  margin-top: 50px;

  overflow: hidden;
`;

const StSelectBox = styled.select`
  height: 40px;

  border-radius: 10px;

  margin-right: 20px;

  padding: 5px;
`;

const Modal = styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 50%; /* Could be more or less, depending on screen size */
`;

function App() {
  const PrimaryBtnClick = () => alert("버튼을 만들어보세요.");

  const NegativBtnClick = () => prompt("어렵나요?");

  // const SaveBtnClick = () => alert(`name: ${name}, price: ${price}`);

  // Modal(num) => {
  //   return () => {

  //   }
  // }

  return (
    <StLayout>
      <h1>Button</h1>
      <div>
        <StLargeBtn borderColor="#ACB57E" onClick={PrimaryBtnClick}>
          Large Primary Button
        </StLargeBtn>
        <StMediumBtn backgroundColor="#ACB57E">Medium</StMediumBtn>
        <StSmallBtn backgroundColor="#ACB57E">Small</StSmallBtn>
      </div>
      <div>
        <StLargeBtn borderColor="#D7806C" onClick={NegativBtnClick}>
          Large Negative Button
        </StLargeBtn>
        <StMediumBtn backgroundColor="#D7806C">Medium</StMediumBtn>
        <StSmallBtn backgroundColor="#D7806C">Small</StSmallBtn>
      </div>

      <h1>Input</h1>
      <StInputBox>
        <StInputTitle>이름</StInputTitle>
        <StInputValue id="name"></StInputValue>
        <StInputTitle>가격</StInputTitle>
        <StInputValue id="price" type="number" value="0"></StInputValue>
        <StSmallBtn backgroundColor="#ACB57E">저장</StSmallBtn>
      </StInputBox>

      <h1>Modal</h1>
      <StSmallBtn backgroundColor="#ACB57E" ref={openBtn}>
        open modal
      </StSmallBtn>

      <Modal ref={Modal}>
        <ModalContent>
          <h5>
            닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
            않아요.
          </h5>
          <StSmallBtn backgroundColor="#D7806C" ref={closeBtn}>
            닫기
          </StSmallBtn>
          <StSmallBtn backgroundColor="#ACB57E">확인</StSmallBtn>
        </ModalContent>
      </Modal>

      <StLargeBtn borderColor="#D7806C" ref={openBtn}>
        open modal
      </StLargeBtn>

      <Modal>
        <ModalContent>
          <h5>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</h5>
          <StSmallBtn backgroundColor="#D7806C" ref={closeBtn}>
            닫기
          </StSmallBtn>
        </ModalContent>
      </Modal>

      <StSelectContainer>
        <h1>Select</h1>
        <StSelectBox>
          <option key="react" value="react">
            리액트
          </option>
          <option key="java" value="java">
            자바
          </option>
          <option key="spring" value="spring">
            스프링
          </option>
          <option key="reactNative" value="reactNative">
            리액트네이티브
          </option>
        </StSelectBox>
        <StSelectBox>
          <option key="react" value="react">
            리액트
          </option>
          <option key="java" value="java">
            자바
          </option>
          <option key="spring" value="spring">
            스프링
          </option>
          <option key="reactNative" value="reactNative">
            리액트네이티브
          </option>
        </StSelectBox>
      </StSelectContainer>
    </StLayout>
  );
}

export default App;
