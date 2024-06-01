import { TouchableOpacityProps } from "react-native";
import { Container, Divider, InformationContent, StatusIndicator, TextDescription, TextTime } from "./styles";
import { MealDTO } from "@storage/meal/meal";

type ItemListProps = TouchableOpacityProps & {
  meal: MealDTO;
};

export function ListItem({ meal, ...rest}: ItemListProps) {
  return(
    <Container {...rest}>
      <InformationContent>
        <TextTime>{meal.time}</TextTime>
        <Divider></Divider>
        <TextDescription>{meal.name}</TextDescription>
      </InformationContent>

      <StatusIndicator type={meal.status}></StatusIndicator>
    </Container>
  );
}