import styled from "styled-components";

const CardBlock = styled.div`
  // display: flex;
  background-color: #fff;
  border: 1px solid #0075de;
  border-radius: 5px;
  margin-top: 1em;
  padding: 1em;
`;

function Card({
  onSubmit,
  onTitleChange,
  onContentChange,
  onToggle,
  section,
  btnDom,
  open,
}) {
  return (
    <>
      {open && (
        <CardBlock className="card-input-box">
          <div className="card-input-section">
            <input
              className="card-input-title"
              placeholder="제목을 입력하세요"
              onChange={onTitleChange}
            ></input>
            <input
              className="card-input-content"
              placeholder="내용을 입력하세요"
              maxLength="500"
              onChange={onContentChange}
            ></input>
          </div>
          <div className="card-btn-section">
            <input
              className="btn cancle-btn"
              type="submit"
              value="취소"
              onClick={onToggle}
            />
            <input
              className="btn enroll-btn"
              id="enrollBtn"
              type="submit"
              value="등록"
              ref={btnDom}
              onClick={onSubmit}
            />
          </div>
        </CardBlock>
      )}
    </>
  );
}

export default Card;
