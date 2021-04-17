const ButtonWrapper = styled.div`
  ${(open) => {
    open
      ? css`
          background-color: red;
          color: #0075de;
        `
      : css`
          color: #bdbdbd;
        `;
  }}
`;
