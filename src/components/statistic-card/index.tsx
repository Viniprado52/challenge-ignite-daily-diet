import { CardType, Container, SubTitle, Title } from "./styles";

type StatisticsCardProps = {
  title: string;
  subTitle: string;
  type: CardType;
}

export function StatisticsCard({ title, subTitle, type}: StatisticsCardProps) {
  return(
    <Container type={type}>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>  
  );
}