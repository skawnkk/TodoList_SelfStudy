import styled from "styled-components";
import { HiMenu } from "react-icons/hi";
import { useState, useRef } from "react";
import TemplateLog from "./TemplateLog";

const TemplateHeadBlock = styled.div`
  width: 1440px;
  height: 112px;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: space-around;
`;
const TitleBlock = styled.div`
  position: absolute;
  width: 200px;
  height: 46px;
  left: 80px;
  top: 33px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 46px;

  /* Black */

  color: #010101;
`;

const LogBtnBlock = styled.div`
  width: 34px;
  height: 22px;
  position: absolute;
  right: 84px;
  top: 40px;
`;

const LogBlock = styled.div`
  position: absolute;
  width: 452px;
  height: 1024px;
  right: -440px;
  top: 0px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(204, 204, 204, 0.5),
    0px 2px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
`;

function TemplateHead() {
  const LogStorageDom = useRef();
  const [appear, setLogViewState] = useState(false);
  console.log(appear);
  const handleLogBtnClick = () => {
    setLogViewState(true); //바로 값이 바뀌지는 않는다.
    if (appear) LogStorageDom.current.classList.add("appear");
  };

  return (
    <>
      <TemplateHeadBlock>
        <TitleBlock>TO-DO LIST</TitleBlock>
        <LogBtnBlock>
          <HiMenu className="icon" onClick={handleLogBtnClick} />
        </LogBtnBlock>
      </TemplateHeadBlock>
      <TemplateLog></TemplateLog>
      <LogBlock className="logStorage" ref={LogStorageDom}></LogBlock>
    </>
  );
}

export default TemplateHead;
