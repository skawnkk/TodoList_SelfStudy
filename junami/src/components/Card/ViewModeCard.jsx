import styled from "styled-components";
import { useTodoState, useTodoDispatch } from "./CardContext";
import { HiX } from "react-icons/hi";

const ViewModeCardBlock = styled.div`
  align-items: flex-start;
  padding: 16px;
  height: 108px;
  background: #ffffff;
  box-shadow: 0px 1px 30px rgba(224, 224, 224, 0.3);
  border-radius: 6px;

  /* Inside Auto Layout */
  display: flex;
  justify-content: space-between;
  order: 2;
  flex-grow: 0;
  margin: 16px 0px;
`;

const CardTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  color: #010101;
  display: block;
`;

const CardContent = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #010101;
  height: 20px;
  margin: 8px 0px;
  over-flow: hidden;
`;

function ViewModeCard({ section }) {
  const todos = useTodoState();
  const viewList = todos.filter((todo) => todo.type === section);
  const dispatch = useTodoDispatch();
  const onRemove = (id) => {
    dispatch({ type: "REMOVE", id });
  };
  return (
    <div>
      {viewList.map((todo, idx) => (
        <ViewModeCardBlock id={todo.id} key={idx}>
          <div>
            <CardTitle>{todo.title}</CardTitle>
            <CardContent>{todo.content}</CardContent>
          </div>
          <div>
            <HiX
              className="icon_add_delete"
              onClick={() => onRemove(todo.id)}
            ></HiX>
          </div>
        </ViewModeCardBlock>
      ))}
    </div>
  );
}

export default ViewModeCard;
