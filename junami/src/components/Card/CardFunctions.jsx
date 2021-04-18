import EditModeCard from "./EditModeCard";
import { useTodoState } from "./CardContext";
import CardList from "./CardList";

function CardFunctions({
  onToggle,
  open,
  setItemCount,
  columnType,
  handleLog,
}) {
  const todos = useTodoState();
  const viewList = todos.filter((todo) => todo.type === columnType);
  setItemCount(viewList.length);

  return (
    <>
      {open && (
        <EditModeCard
          onToggle={onToggle}
          columnType={columnType}
          todo={""}
          handleLog={handleLog}
        ></EditModeCard>
      )}

      {viewList.map((todo, idx) => (
        <CardList
          todo={todo}
          key={idx}
          onToggle={onToggle}
          handleLog={handleLog}
          columnType={columnType}
        />
      ))}
    </>
  );
}

export default CardFunctions;
