import EditModeCard from "./EditModeCard";
import ViewModeCard from "./ViewModeCard";
import { useState } from "react";

function CardList({ onToggle, todo, columnType }) {
  const [editMode, setEditMode] = useState(false);
  const handleDoubleClick = () => setEditMode(!editMode);

  return (
    <div onDoubleClick={handleDoubleClick}>
      {editMode ? (
        <EditModeCard todo={todo} onToggle={onToggle} columnType={columnType} />
      ) : (
        <ViewModeCard
          todo={todo}
          onToggle={onToggle}
          setEditMode={setEditMode}
        />
      )}
    </div>
  );
}

export default CardList;
