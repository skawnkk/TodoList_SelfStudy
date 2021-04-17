import EditModeCard from "./EditModeCard";
import { useTodoState } from "./CardContext";
import CardList from "./CardList";

function CardFunctions({ onToggle, open, setItemCount, columnType, onLog }) {
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
          onLog={onLog}
        ></EditModeCard>
      )}

      {viewList.map((todo, idx) => (
        <CardList todo={todo} key={idx} onToggle={onToggle} onLog={onLog} />
      ))}
    </>
  );
}

export default CardFunctions;
