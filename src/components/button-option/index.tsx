import { TouchableOpacityProps } from "react-native";
import { Container, Description, StatusButton } from "./styles";
import { StatusMeal } from "@storage/meal/meal";

type ButtonOptionsProps = TouchableOpacityProps & {
  type: StatusMeal;
  text: string;
  active: boolean;
} 

export function ButtonOption({ type, text, active, ...rest }: ButtonOptionsProps) {
  return(
    <Container active={active} type={type} {...rest}>
      <StatusButton active={active} type={type}></StatusButton>
      <Description>{text}</Description>
    </Container>
  );
}