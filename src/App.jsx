import "./App.css";
import { styled } from "styled-components";

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
  border-width: 4px;
`;

const StMediumBtn = styled.button`
  width: 150px;
  height: 50px;

  margin-left: 10px;
  margin-top: 10px;

  border-radius: 10px;

  background-color: ${(props) => props.backgroundColor};
`;

const StSmallBtn = styled.button`
  width: 100px;
  height: 45px;

  margin-left: 10px;
  margin-right: 10px;

  border-radius: 10px;

  background-color: ${(props) => props.backgroundColor};
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

function App() {
  const PrimaryBtnClick = () => alert("버튼을 만들어보세요.");

  const NegativBtnClick = () => prompt("어렵나요?");
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
        <StInputValue></StInputValue>
        <StInputTitle>가격</StInputTitle>
        <StInputValue type="number" value="0"></StInputValue>
        <StSmallBtn backgroundColor="#ACB57E">저장</StSmallBtn>
      </StInputBox>

      <h1>Modal</h1>
      <StSmallBtn backgroundColor="#ACB57E">open modal</StSmallBtn>
      <StLargeBtn borderColor="#D7806C">open modal</StLargeBtn>

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
