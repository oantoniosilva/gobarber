import { Container, Content, Background, Form } from "./styles";
import { FiLock, FiLogIn, FiMail } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const SignIn = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form>
          <h1>Faça seu logon</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input name="password" icon={FiLock} placeholder="Senha" />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="logon">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};
