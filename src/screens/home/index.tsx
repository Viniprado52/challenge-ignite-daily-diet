import { useCallback, useState } from "react";
import { Alert, SectionList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { get, groupBy, map } from "lodash";

import { 
  Container, 
  ContainerSectionList, 
  TextMealsInclude, 
  TextSectionList
} from "./styles";

import { Button } from "@components/button";
import { MealDTO } from "@storage/meal/meal";
import { Loading } from "@components/loading";
import { ListItem } from "@components/list-item";
import { ListEmpty } from "@components/list-empty";
import { StatusCard } from "@components/status-card";
import { HeaderHome } from "@components/header-home";
import { mealGetAll } from "@storage/meal/mealGetAll";

type SectionListItem = {
  title: string;
  data: Array<MealDTO>;
}

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [percentInside, setPercentInside] = useState(0);
  const [mealsData, setMealsData] = useState<Array<SectionListItem>>([]);

  const navigator = useNavigation();

  function handleGoCreateMeal(): void {
    navigator.navigate('create');
  }

  function handleGoDetailMeal(id: string): void {
    navigator.navigate('detail', { id });
  }

  function createMealsSection(data: Array<MealDTO>): Array<SectionListItem> {
    const mealsAgruppedByDate = groupBy(data, 'date');
    const mealsWithSection = map(mealsAgruppedByDate, (section: any) => {
      return {
        title: get(section[0], 'date'),
        data: section
      }
    });
    return mealsWithSection;
  }

  function setPercentInsideDiet(data: Array<MealDTO>): void {
    const totalMeals: number = data.length;
    const totalInsideMeals = data.filter(item => item.status === 'INSIDE').length;
    const percentInside = Math.round((totalInsideMeals / totalMeals) * 100).toFixed(2);
    setPercentInside(Number.parseFloat(percentInside));
  }

  async function fetchMeals() {
    try {
      setIsLoading(true);
      const data = await mealGetAll();
      
      if (data.length > 0) {
        setPercentInsideDiet(data);
        const dataWithSections = createMealsSection(data);
        setMealsData(dataWithSections);
      } else {
        setMealsData([]);
        setPercentInside(0);
      }
    } catch (error) {
      Alert.alert('Refeições', 'Não foi possível carregar as refeições');
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  
  useFocusEffect(useCallback(() => {
    fetchMeals();
  },[]))

  return (
    <Container>
      <HeaderHome />
      <StatusCard total={mealsData.length} percentage={percentInside} />
      <TextMealsInclude>Refeições</TextMealsInclude>
      <Button type="INCLUDE" title="Nova refeição" onPress={handleGoCreateMeal} />
      
      {isLoading ? <Loading /> :
        <SectionList
          sections={mealsData}
          keyExtractor={(item) => item.id}
          style={[{marginTop: 40}]}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <ListItem
              meal={item}
              onPress={() => handleGoDetailMeal(item.id)}
            />
          )}
          renderSectionHeader={({section: {title}}) => (
            <>
              <ContainerSectionList>
                <TextSectionList>{title.replaceAll('/', '.')}</TextSectionList>
              </ContainerSectionList>
            </>
          )}
          ListEmptyComponent={() => <ListEmpty />}
          contentContainerStyle={mealsData.length === 0 && { flex: 1 }}
        />
      }
    </Container>
  );
}