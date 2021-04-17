import "./App.css";
import StateProvider from "./components/StateProvider";
import { TodoProvider } from "./components/Card/CardContext";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
    margin-left: 100px;
    margin-right: 100px;
    font-family: Noto Sans KR;
    font-style: normal;
    overflow:hidden;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <StateProvider />
    </TodoProvider>
  );
}

export default App;
