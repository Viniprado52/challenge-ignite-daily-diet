import { TypeCardStyleProps } from "@components/status-card/styles";
import { Container, IconBack, IconBackButton, Title } from "./styles";

type HeaderProps = {
  title?: string;
  type: TypeCardStyleProps;
  goBack(): void;
}

export function HeaderBack({ title = "", type, goBack }: HeaderProps) {

  return(
    <Container>
      <IconBackButton onPress={goBack}>
        <IconBack type={type} />
      </IconBackButton>
      <Title>{title}</Title>
    </Container>
  );
}