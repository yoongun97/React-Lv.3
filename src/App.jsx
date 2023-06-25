import "./App.css";
import { styled } from "styled-components";
import ButtonArea from "./components/ButtonArea";
import InputArea from "./components/InputArea";
import ModalArea from "./components/ModalArea";
import SelectArea from "./components/SelectArea";

const StLayout = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <StLayout>
      <ButtonArea />
      <InputArea />
      <ModalArea />
      <SelectArea />
    </StLayout>
  );
}

export default App;
