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

function App() {
  return (
    <StLayout>
      <h1>Button</h1>
      <div>
        <StLargeBtn borderColor="#ACB57E">Large Primary Button</StLargeBtn>
        <StMediumBtn backgroundColor="#ACB57E">Medium</StMediumBtn>
        <StSmallBtn backgroundColor="#ACB57E">Small</StSmallBtn>
      </div>
      <div>
        <StLargeBtn borderColor="#D7806C">Large Negative Button</StLargeBtn>
        <StMediumBtn backgroundColor="#D7806C">Medium</StMediumBtn>
        <StSmallBtn backgroundColor="#D7806C">Small</StSmallBtn>
      </div>

      <h1>Input</h1>
      <StInputBox>
        <StInputTitle>이름</StInputTitle>
        <StInputValue></StInputValue>
        <StInputTitle>가격</StInputTitle>
        <StInputValue value="0"></StInputValue>
        <StSmallBtn backgroundColor="#ACB57E">저장</StSmallBtn>
      </StInputBox>

      <h1>Modal</h1>
      <StSmallBtn backgroundColor="#ACB57E">open modal</StSmallBtn>
      <StLargeBtn borderColor="#D7806C">open modal</StLargeBtn>

      <div>
        <h1>Select</h1>
      </div>
    </StLayout>
  );
}

export default App;
