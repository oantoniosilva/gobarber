import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 16px;

  margin-bottom: 8px;
  padding: 16px;

  border: 2px solid #232129;
  border-radius: 10px;
  background: #232129;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    color: #f4ede8;
    border: 0;

    &::placeholder {
      color: #666360;
    }

    &:focus {
      outline: none;
    }
  }

  svg {
    color: #666360;
  }
`;
