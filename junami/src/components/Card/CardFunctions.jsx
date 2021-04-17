import EditModeCard from "./EditModeCard";
import { useTodoState } from "./CardContext";
import CardList from "./CardList";

function CardFunctions({ onToggle, open, setItemCount, columnType }) {
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
        ></EditModeCard>
      )}

      {viewList.map((todo, idx) => (
        <CardList todo={todo} key={idx} onToggle={onToggle} />
      ))}
    </>
  );
}

export default CardFunctions;
