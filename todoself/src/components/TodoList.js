import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

// flex: 1 자신이 차지 할 수 있는 영역을 꽉 채우도록 설정
const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="프로젝트 생성하기" done={false} />
      <TodoItem text="알고리즘 풀기" done={true} />
      <TodoItem text="리액트 공부하기" done={true} />
      <TodoItem text="일찍잠들기" done={true} />
    </TodoListBlock>
  );
}

export default TodoList;
