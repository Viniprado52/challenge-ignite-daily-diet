import { StatusMeal } from "@storage/meal/meal";
import { Container, Description, StatusTag } from "./styles";

type StatusInfoProps = {
  description: string;
  type: StatusMeal;
}

export function StatusInfo({ description, type }: StatusInfoProps) {

  return(
    <Container>
        <StatusTag type={type}></StatusTag>
        <Description>{description}</Description>
    </Container>
  );
}