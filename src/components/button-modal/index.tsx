import { TouchableOpacityProps } from "react-native";
import { ButtonModalType, Container, TitleButton } from "./styles";

type ButtonModalProps = TouchableOpacityProps & {
  title: string;
  type: ButtonModalType;
}

export function ButtonModal({ title, type, ...rest } : ButtonModalProps) {

  return(
    <Container type={type} {...rest}>
      <TitleButton type={type}>
        {title}
      </TitleButton>
    </Container>
  );
}