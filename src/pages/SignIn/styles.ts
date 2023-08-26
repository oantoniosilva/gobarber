import styled from "styled-components";

import signInBackgroundImg from "../../assets/sign-in-background.png";
import { shade } from "polished";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  form {
    width: 340px;
    margin: 80px 0;
    text-align: center;

    h1 {
      font-size: 24px;
      margin-bottom: 24px;
    }

    input {
      width: 100%;

      margin-bottom: 8px;
      padding: 16px;

      border: 2px solid #232129;
      border-radius: 10px;
      background: #232129;
      color: #f4ede8;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
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
    }

    a {
      display: block;
      margin-top: 24px;
      color: #f4ede8;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, "#f4ede8")};
      }
    }
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    margin-top: 24px;

    color: #ff9000;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, "#ff9000")};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
