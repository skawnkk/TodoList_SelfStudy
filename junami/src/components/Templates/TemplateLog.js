import styled from "styled-components";
import { HiX } from "react-icons/hi";
import crong from "./crong.jpg";

const LogStorageBlock = styled.div`
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

const LogBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
  position: static;
  width: 332px;
  height: 137px;
  left: 0px;
  top: 0px;

  background: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: auto auto;
`;

const IconX = styled.div`
  position: absolute;
  right: 80px;
  top: 50px;
`;

const UserImg = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${crong});
  background-size: cover;
`;

function TemplateLog({ LogStorageDom }) {
  return (
    <>
      <LogStorageBlock className="logStorage appear" ref={LogStorageDom}>
        <IconX>
          <HiX></HiX>
        </IconX>

        <LogBlock>
          <UserImg />
          dkssud?
        </LogBlock>
        <LogBlock>dkssud?</LogBlock>
        <LogBlock>dkssud?</LogBlock>
      </LogStorageBlock>
      ;
    </>
  );
}

export default TemplateLog;
