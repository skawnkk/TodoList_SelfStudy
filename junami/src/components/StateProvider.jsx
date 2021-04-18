import React, { useState } from "react";
import NavBar from "./NavBar/NavBar";
import Column from "./Column/Column";
import styled from "styled-components";

const TemplateBoard = styled.div`
  display: flex;
`;

function StateProvider() {
  const [log, setLog] = useState([
    {
      cardTitle: "HTML/CSS 공부하기",
      columnTitle: "하고 있는 일",
      modeType: "add",
      publishedTime: Date.now(),
      start: true,
    },
  ]);

  const handleLog = ({
    cardTitle,
    columnTitle,
    modeType,
    publishedTime,
    start,
  }) => {
    setLog(
      log.concat({
        cardTitle,
        columnTitle,
        modeType,
        publishedTime,
        start,
      })
    );
  };

  return (
    <>
      <NavBar logs={log} />

      <TemplateBoard>
        <Column handleLog={handleLog}>해야할 일</Column>
        <Column handleLog={handleLog}>하고 있는 일</Column>
        <Column handleLog={handleLog}>완료한 일</Column>
      </TemplateBoard>
    </>
  );
}

export default StateProvider;
