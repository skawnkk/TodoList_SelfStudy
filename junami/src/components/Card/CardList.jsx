import EditModeCard from "./EditModeCard";
import ViewModeCard from "./ViewModeCard";
import { useState, useRef } from "react";
function CardList({ onToggle, todo, columnType, handleLog }) {
  const [editMode, setEditMode] = useState(false);
  const [dragging, setDragging] = useState(false);
  const handleDoubleClick = () => setEditMode(!editMode);
  const dragData = { columnType, todo };
  const dragItem = useRef();
  const dragNode = useRef();

  const handleDragStart = (e) => {
    console.log("drag Starting...");

    dragItem.current = { columnType, itemIdx: dragData.todo.id };
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);

    setTimeout(() => {
      setDragging(true);
    }, 0); //->drag중 아이템의 기존스타일을 유지
  };

  const handleDragEnter = (e) => {
    console.log("drag ENTER...");
  };
  const handleDragEnd = (e) => {
    console.log("dragEnd");
    e.stopPropagation();

    dragNode.current.removeEventListener("dragend", handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
    setDragging(false);
  };

  const getStyles = () => {
    const currentItem = dragItem.current;
    if (
      currentItem.itemIdx === dragData.todo.id &&
      currentItem.columnType === dragData.columnType
    ) {
      return "dnd-item current";
    }
    return "dnd-item";
  };

  return (
    <div
      draggable={true}
      onDoubleClick={handleDoubleClick}
      columntype={columnType}
      todoid={todo.Id}
      onDragStart={handleDragStart}
      onDragEnter={
        dragging ? (e) => handleDragEnter(e, todo.type, todo.id) : null
      }
      className={dragging ? getStyles() : "dnd-item"}
    >
      {editMode ? (
        <EditModeCard
          todo={todo}
          onToggle={onToggle}
          columntype={columnType}
          handleDoubleClick={handleDoubleClick}
          handleLog={handleLog}
        />
      ) : (
        <ViewModeCard
          todo={todo}
          onToggle={onToggle}
          handleLog={handleLog}
          columntype={columnType}
        />
      )}
    </div>
  );
}

export default CardList;
