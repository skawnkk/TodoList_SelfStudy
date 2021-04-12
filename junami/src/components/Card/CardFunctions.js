import { useState, useRef } from "react";
import Card from "./Card";
import { useTodoDispatch, useTodoNextId } from "./CardContext";
import ViewModeCard from "./ViewModeCard";

function CardFunctions({ onToggle, section, open }) {
  const [title, setTitleValue] = useState("");
  const [content, setContentValue] = useState("");
  const btnDom = useRef();
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const handleTitleChange = ({ target }) => {
    setTitleValue(target.value);
    onBtnChange(target.value.length);
  };
  const handleContentChange = ({ target }) => {
    setContentValue(target.value);
  };

  const onBtnChange = (target) => {
    if (target > 0) {
      btnDom.current.classList.add("edit-btn");
      btnDom.current.classList.remove("enroll-btn");
    } else {
      btnDom.current.classList.add("enroll-btn");
      btnDom.current.classList.remove("edit-btn");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        title: title,
        content: content,
        type: section,
      },
    });
    setTitleValue("");
    setContentValue("");
    nextId.current += 1;
    onToggle();
  };

  return (
    <>
      <Card
        onSubmit={handleSubmit}
        onTitleChange={handleTitleChange}
        onContentChange={handleContentChange}
        onToggle={onToggle}
        section={section}
        btnDom={btnDom}
        open={open}
      ></Card>
      <ViewModeCard section={section}></ViewModeCard>
    </>
  );
}

export default CardFunctions;
