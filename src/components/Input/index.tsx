import { ElementType, InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: ElementType;
}

export const Input = ({ icon: Icon, ...props }: InputProps) => {
  return (
    <Container>
      {Icon && <Icon size={20} />}

      <input {...props} />
    </Container>
  );
};
