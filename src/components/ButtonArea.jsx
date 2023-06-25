import { styled } from "styled-components";

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

  border: none;
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

const ButtonContainer = ({ children, ...rest }) => {
  return (
    <>
      <StLargeBtn {...rest}>
        {children}
        {rest.rightIcon}
      </StLargeBtn>
    </>
  );
};

const ButtonArea = () => {
  const PrimaryBtnClick = () => alert("버튼을 만들어보세요.");

  const NegativBtnClick = () => prompt("어렵나요?");
  return (
    <>
      <h1>Button</h1>
      <div>
        <ButtonContainer
          borderColor="#ACB57E"
          onClick={PrimaryBtnClick}
          rightIcon="😊"
        >
          Large Primary Button
        </ButtonContainer>
        <StMediumBtn backgroundColor="#ACB57E">Medium</StMediumBtn>
        <StSmallBtn backgroundColor="#ACB57E">Small</StSmallBtn>
      </div>
      <div>
        <ButtonContainer borderColor="#D7806C" onClick={NegativBtnClick}>
          Large Negative Button
        </ButtonContainer>
        <StMediumBtn backgroundColor="#D7806C">Medium</StMediumBtn>
        <StSmallBtn backgroundColor="#D7806C">Small</StSmallBtn>
      </div>
    </>
  );
};

export default ButtonArea;
