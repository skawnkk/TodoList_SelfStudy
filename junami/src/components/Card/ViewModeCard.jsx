import styled from "styled-components";
import { useTodoDispatch } from "./CardContext";
import { HiX } from "react-icons/hi";

function ViewModeCard({ todo, handleLog, columnType }) {
  const { id, title, content } = todo;
  const dispatch = useTodoDispatch();
  const onRemove = (id) => {
    dispatch({ type: "REMOVE", id });
    handleLog({
      cardTitle: title,
      columnTitle: columnType,
      modeType: "delete",
      publishedTime: Date.now(),
    });
  };

  return (
    <ViewModeCardBlock id={id}>
      <div>
        <CardTitle>{title}</CardTitle>
        <CardContent>{content}</CardContent>
      </div>
      <div>
        <HiX className="icon_add_delete" onClick={() => onRemove(id)}></HiX>
      </div>
    </ViewModeCardBlock>
  );
}

export default ViewModeCard;
const ViewModeCardBlock = styled.div`
  align-items: flex-start;
  padding: 16px;
  height: 108px;
  box-shadow: 0px 1px 30px rgba(224, 224, 224, 0.3);
  border-radius: 6px;

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
