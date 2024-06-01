import { TouchableOpacityProps } from "react-native";

import { ButtonTypes, Container, IconButtonAdd, IconButtonDelete, IconButtonEdit, TextButton } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  type?: ButtonTypes;
  title: string;
}

export function Button({ type = 'TEXT', title, ...rest}: ButtonProps) {
  return(
    <Container type={type} {...rest}>
        <IconButtonAdd type={type} />
        <IconButtonEdit type={type} />
        <IconButtonDelete type={type} />
        <TextButton type={type}>
          {title}
        </TextButton>
    </Container>
  );
}