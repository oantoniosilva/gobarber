import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 16px;
  margin-top: 16px;

  border: 0;
  border-radius: 10px;

  background: #ff9000;
  font-weight: 500;
  color: #312e38;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, "#ff9000")};
  }
`;
