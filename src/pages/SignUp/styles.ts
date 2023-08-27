import styled from "styled-components";
import { shade } from "polished";

import signUpBackgroundImg from "../../assets/sign-up-background.png";

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

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    margin-top: 24px;

    color: #f4ede8;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, "#f4ede8")};
    }
  }
`;

export const Form = styled.div`
  width: 340px;
  margin: 80px 0;
  text-align: center;

  h1 {
    font-size: 24px;
    margin-bottom: 24px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;
