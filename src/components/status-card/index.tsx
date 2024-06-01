import { useNavigation } from "@react-navigation/native";
import { ArrowGoIcon, Container, TextDescription, TextPercent } from "./styles";

const CUT_PERCENTAGE: number = 50;

type StatusCardProps = {
  percentage: number;
  total: number;
}

export function StatusCard({percentage, total}: StatusCardProps) {

  const navigator = useNavigation();

  function handleOpenStatistics(): void {
    navigator.navigate('statistic', {percent: percentage});
  }
  return(
    <Container 
      onPress={handleOpenStatistics} 
      type={ total === 0 ? 'DEFAULT' : percentage > CUT_PERCENTAGE ? 'INSIDE' : 'OUTSIDE' }
      >
        <TextPercent>
            { `${percentage.toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 2 })}%` }
        </TextPercent>

        <TextDescription>
          das refeições dentro da dieta
        </TextDescription>

        <ArrowGoIcon 
          type={ total === 0 ? 'DEFAULT' : percentage > CUT_PERCENTAGE ? 'INSIDE' : 'OUTSIDE'} 
        />
    </Container>
  );
}