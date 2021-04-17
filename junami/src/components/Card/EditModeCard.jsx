import styled from "styled-components";
import { useState, useRef } from "react";
import { useTodoDispatch, useTodoNextId } from "./CardContext";

function EditModeCard({ onToggle, todo, columnType, handleDoubleClick }) {
  const [title, setTitleValue] = useState(todo.title);
  const [content, setContentValue] = useState(todo.content);

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();
  const btnDom = useRef();
  const onBtnChange = (target) => {
    if (target > 0) {
      btnDom.current.classList.add("edit-btn");
      btnDom.current.classList.remove("enroll-btn");
    } else {
      btnDom.current.classList.add("enroll-btn");
      btnDom.current.classList.remove("edit-btn");
    }
  };

  const handleTitleChange = ({ target }) => {
    setTitleValue(target.value);
    onBtnChange(target.value.length);
  };

  const handleContentChange = ({ target }) => {
    setContentValue(target.value);
    onBtnChange(target.value.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const targetBtn = e.target.defaultValue;
    if (targetBtn === "등록") {
      dispatch({
        type: "CREATE",
        todo: {
          id: nextId.current,
          title: title,
          content: content,
          type: columnType,
        },
      });
      onToggle();
    } else {
      dispatch({
        type: "EDIT",
        todo: {
          id: todo.id,
          title: title,
          content: content,
          type: columnType,
        },
      });
      handleDoubleClick();
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    const targetBtn = e.target.nextSibling.defaultValue;
    if (targetBtn === "등록") onToggle();
    else handleDoubleClick();
  };

  return (
    <CardBlock className="card-input-box">
      <div className="card-input-section">
        <input
          className="card-input-title"
          placeholder="제목을 입력하세요"
          onChange={handleTitleChange}
          value={title}
        ></input>
        <input
          className="card-input-content"
          placeholder="내용을 입력하세요"
          maxLength="500"
          onChange={handleContentChange}
          value={content}
        ></input>
      </div>
      <div className="card-btn-section">
        <input
          className="btn cancle-btn"
          type="submit"
          value="취소"
          onClick={handleCancel}
        />
        <input
          className="btn enroll-btn"
          id="enrollBtn"
          type="submit"
          value={todo ? "수정" : "등록"}
          ref={btnDom}
          onClick={handleSubmit}
        />
      </div>
    </CardBlock>
  );
}

export default EditModeCard;

const CardBlock = styled.div`
  // display: flex;
  background-color: #fff;
  border: 1px solid #0075de;
  border-radius: 5px;
  margin-top: 1em;
  padding: 1em;
`;
