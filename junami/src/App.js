import "./App.css";
import styled from "styled-components";
import TemplateHead from "./components/Templates/TemplateHead";
import TemplateColumn from "./components/Templates/TemplateColumn";
import { TodoProvider } from "./components/Card/CardContext";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
    margin-left: 100px;
    margin-right: 100px;
    font-family: Noto Sans KR;
    font-style: normal;
  }
`;

const TemplateBoard = styled.div`
  display: flex;
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TemplateHead />
      <TemplateBoard>
        <TemplateColumn>해야할 일</TemplateColumn>
        <TemplateColumn>하고 있는 일</TemplateColumn>
        <TemplateColumn>완료한 일</TemplateColumn>
      </TemplateBoard>
    </TodoProvider>
  );
}

export default App;
