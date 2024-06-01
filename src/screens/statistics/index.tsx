import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { 
  TextPercent, 
  CardContentRow, 
  TextDescription, 
  StatisticsContent, 
  CardContentRowFail, 
  TitleStatisticsBody,
  CardContentRowSuccess, 
  StatisticsCardContent, 
  StatusInfoHeaderContent, 
  Container, HeaderContent
} from "./styles";

import { MealDTO } from "@storage/meal/meal";
import { HeaderBack } from "@components/header-back";
import { mealGetAll } from "@storage/meal/mealGetAll";
import { StatisticsCard } from "@components/statistic-card";
import { TypeCardStyleProps } from "@components/status-card/styles";
import { Loading } from "@components/loading";
import { filter, forEach, groupBy } from "lodash";

const CUT_PERCENTAGE: number = 50;

type RouteParams = {
  percent: number;
}

export function Statistics() {
  let typeStatus: TypeCardStyleProps = 'DEFAULT';

  const [isLoading, setIsLoading] = useState(false);
  const [mealInside, setMealInside] = useState(0);
  const [mealOutside, setMealOutside] = useState(0);
  const [mealTotal, setMealTotal] = useState(0);
  const [sequenceInsideDate, setSequenceInsideDate] = useState(0);

  const navigator = useNavigation();
  const route = useRoute()
  const { percent } = route.params as RouteParams;

  typeStatus = mealTotal === 0 ? 'DEFAULT' : percent > CUT_PERCENTAGE ? 'INSIDE' : 'OUTSIDE';

  function handleGoHome(): void {
    navigator.navigate('home');
  }

  function loadMetrics(data: Array<MealDTO>): void {
    const mealInsideList = groupBy(filter(data, (item) => item.status === 'INSIDE'), 'date');
    let sequenceInsideDate: number = 0;

    forEach(mealInsideList, (item) => {
      if (item.length > sequenceInsideDate) {
        sequenceInsideDate = item.length;
      }
    });

    const mealTotal: number = data.length;
    const mealInside: number = data.filter(item => item.status === 'INSIDE').length;
    const mealOutside: number = data.filter(item => item.status === 'OUTSIDE').length;

    setMealTotal(mealTotal);
    setMealInside(mealInside);
    setMealOutside(mealOutside);
    setSequenceInsideDate(sequenceInsideDate);
  }

  async function fetchMeal() {
    try {
      setIsLoading(true);
      const data = await mealGetAll();
      loadMetrics(data);
    } catch (error) {
      Alert.alert('Métricas', 'Não foi possível carregar as métricas');
      console.log(error);
    } finally {
      setIsLoading(false);
    } 
  }

  useEffect(() => {
    fetchMeal();
  }, [])
  
  return(
    <Container typeStatus={typeStatus}>
      <HeaderContent>
        <HeaderBack type={typeStatus} goBack={handleGoHome} />

        <StatusInfoHeaderContent>
          <TextPercent>
              { `${percent.toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 2 })}%` }
          </TextPercent>

          <TextDescription>
            das refeições dentro da dieta
          </TextDescription>
        </StatusInfoHeaderContent>
      </HeaderContent>
      
      { isLoading ? <Loading /> :
        <StatisticsContent>
          <TitleStatisticsBody>Estatísticas gerais</TitleStatisticsBody>

          <StatisticsCardContent>
            <StatisticsCard 
              title={`${sequenceInsideDate}`}
              subTitle="melhor sequência de pratos dentro da dieta"
              type="DEFAULT"
            />

            <StatisticsCard 
              title={`${mealTotal}`}
              subTitle="refeições registradas"
              type="DEFAULT"
            />
          </StatisticsCardContent>

          <CardContentRow>
            <CardContentRowSuccess>
              <StatisticsCard 
                title={`${mealInside}`}
                subTitle="refeições dentro da dieta"
                type="SUCCESS"
              />
            </CardContentRowSuccess>
            
            <CardContentRowFail>
              <StatisticsCard 
                title={`${mealOutside}`}
                subTitle="refeições fora da dieta"
                type="FAIL"
              />
            </CardContentRowFail>
          </CardContentRow>
        </StatisticsContent>
      }
      
    </Container>
  );
}