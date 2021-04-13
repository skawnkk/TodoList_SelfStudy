import { useState } from "react";
import styled from "styled-components";
import { HiX, HiOutlinePlusSm } from "react-icons/hi";
import CardFunctions from "../Card/CardFunctions";

const TemplateColumnBlock = styled.div`
  width: 308px;
  margin-right: 1em;
`;

const ColumnTitleBlock = styled.div`
  /* text */

  position: static;
  height: 26px;
  left: 0px;
  top: 0px;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;

  /* identical to box height */
  display: flex;
  justify-content: space-between;

  /* Black */
  color: #010101;
  border: 1px solid #bdbdbd;

  /* Inside Auto Layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 8px;
`;

const CountBadge = styled.div`
  display: inline-block;
  width: 26px;
  height: 26px;
  border-radius: 50%;

  font-weight: bold;
  font-size: 14px;
  line-height: 25px;
  text-align: center;

  color: #010101;
  background: #bdbdbd;

  margin: 0px 10px;
`;

export function Column({ children, onLog }) {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);
  let type;
  if (children === "해야할 일") type = "todo";
  if (children === "하고 있는 일") type = "doing";
  if (children === "완료한 일") type = "done";

  return (
    <TemplateColumnBlock>
      <ColumnTitleBlock>
        <div>
          {children}
          <CountBadge>2</CountBadge>
        </div>
        <div>
          <HiOutlinePlusSm
            className={open ? "icon-add-open" : "icon-add-close"}
            onClick={onToggle}
            open={open}
          />
          <HiX className="icon-delete" />
        </div>
      </ColumnTitleBlock>
      <CardFunctions
        onToggle={onToggle}
        open={open}
        section={type}
      ></CardFunctions>
    </TemplateColumnBlock>
  );
}

export default Column;
