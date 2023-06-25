import { styled } from "styled-components";
import { useState, useEffect, useRef } from "react";

const StModal = styled.div`
  position: fixed;
  z-index: 200;
  top: 20%;
  left: 30%;
  width: 40%;
  background: white;
  padding: 1rem;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
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

const ModalArea = () => {
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);

  // 모달2 외부영역 참조
  const modal2Ref = useRef(null);

  // 모달 여닫기
  const openModal1 = () => {
    setIsModal1Open(true);
  };

  const openModal2 = () => {
    setIsModal2Open(true);
  };

  const closeModal1 = () => {
    setIsModal1Open(false);
  };

  const closeModal2 = () => {
    setIsModal2Open(false);
  };

  // 외부 영역 클릭 이벤트
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modal2Ref.current && !modal2Ref.current.contains(event.target)) {
        setIsModal2Open(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <h1>Modal</h1>
      <StSmallBtn backgroundColor="#ACB57E" onClick={openModal1}>
        open modal
      </StSmallBtn>
      {isModal1Open && (
        <StModal>
          <h5>
            닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
            않아요.
          </h5>
          <StSmallBtn backgroundColor="#D7806C" onClick={closeModal1}>
            닫기
          </StSmallBtn>
          <StSmallBtn backgroundColor="#ACB57E">확인</StSmallBtn>
        </StModal>
      )}
      <StLargeBtn borderColor="#D7806C" onClick={openModal2}>
        open modal
      </StLargeBtn>
      {isModal2Open && (
        <StModal ref={modal2Ref}>
          <h5>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</h5>
          <StSmallBtn backgroundColor="#D7806C" onClick={closeModal2}>
            닫기
          </StSmallBtn>
        </StModal>
      )}
    </>
  );
};

export default ModalArea;
