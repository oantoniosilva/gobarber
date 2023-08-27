import logoImg from "../../assets/logo.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Background, Container, Content, Form } from "./styles";
import { FiLock, FiArrowLeft, FiUser, FiMail } from "react-icons/fi";

export const SignUp = () => {
  return (
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form>
          <h1>Faça seu cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="name" icon={FiMail} placeholder="E-mail" />
          <Input name="password" icon={FiLock} placeholder="Senha" />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="logon">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};
