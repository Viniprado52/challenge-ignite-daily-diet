import { Container, IconFood, TextEmpty } from "./styles";


export function ListEmpty() {
  return(
    <Container>
      <IconFood />
      <TextEmpty>
        Cadastre suas refeições para começar
      </TextEmpty>
    </Container>

  );
}