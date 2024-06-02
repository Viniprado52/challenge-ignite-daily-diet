import { useCallback, useState } from "react";
import { Alert, Modal } from "react-native";

import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";

import { 
  ButtonCancelContent,
  ButtonConfirmContent,
  ButtonContent,
  ButtonModalContent,
  Container, 
  CreateContent, 
  DateTimeDecription, 
  DateTimeLabel, 
  Description, 
  HeaderContent,
  ModalBoxConfirm,
  ModalContent,
  TagContent, 
  Title,
  TitleModalDelete
} from "./styles";

import { MealDTO } from "@storage/meal/meal";
import { mealGetAll } from "@storage/meal/mealGetAll";

import { Button } from "@components/button";
import { HeaderBack } from "@components/header-back";
import { StatusInfo } from "@components/status-info";
import { ButtonModal } from "@components/button-modal";
import { isEmpty, isNil } from "lodash";
import { mealDeleteById } from "@storage/meal/mealDeleteById";
import { Loading } from "@components/loading";

type RouteParam = {
  id: string;
}

export function Detail() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [meal, setMeal] = useState<MealDTO>({
    id:'',
    date: '',
    description: '',
    name: '',
    time: '',
    status: 'INSIDE'
  });

  const route = useRoute();
  const { id } = route.params as RouteParam;

  const navigator = useNavigation();

  function handleGoHome(): void {
    navigator.navigate('home');
  }

  function handleGoEditMeal(): void {
    navigator.navigate('edit', { id });
  }

  function handleOpenDeleteMeal(): void {
    setIsVisibleModal(true);
  }

  async function handleCancelDeleteMeal() {
    try {
      await mealDeleteById(id);
      setIsVisibleModal(false);
      navigator.navigate('home');
    } catch(error) {
      Alert.alert('Excluir refeição', 'Não foi possível excluir a refeição');
      console.log(error);
    }
  }

  function handleCloseModalDeleteMeal() {
    setIsVisibleModal(false);
  }

  async function fetchMeal() {
    try {
      setIsLoading(true);
      const data = await mealGetAll();
      const mealDetail = data.filter(item => item.id === id)[0];

      if (!isEmpty(mealDetail) && !isNil(mealDetail)) {
        setMeal(mealDetail);
      }
      setIsLoading(false);
    } catch (error) {
      Alert.alert('Refeições', 'Não foi possível carregar os dados da refeição');
      console.log(error);
      setIsLoading(false);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchMeal();
  },[]));

  return(
    <Container type={meal.status}>
      <Modal 
        animationType="fade"
        transparent={true}
        visible={isVisibleModal}
        onRequestClose={() => setIsVisibleModal(false)}
      >
        <ModalContent>
          <ModalBoxConfirm>
            <TitleModalDelete>
              Deseja realmente excluir o registro da refeição?
            </TitleModalDelete>
            <ButtonModalContent>
              <ButtonCancelContent>
                <ButtonModal 
                  title="Cancelar" 
                  type="OUTLINED" 
                  onPress={handleCloseModalDeleteMeal}
                />
              </ButtonCancelContent>
              <ButtonConfirmContent>
                <ButtonModal 
                  title="Sim, excluir" 
                  type="DEFAULT" 
                  onPress={handleCancelDeleteMeal}
                />
              </ButtonConfirmContent>
            </ButtonModalContent>
          </ModalBoxConfirm>
        </ModalContent>
      </Modal>
      <HeaderContent>
        <HeaderBack
          title="Refeição"
          goBack={handleGoHome}
          type={meal.status}
        />
      </HeaderContent>

      {isLoading ? <Loading /> :
        <CreateContent>
          <Title>{meal.name}</Title>
          <Description>{meal.description}</Description>

          <DateTimeLabel>Data e hora</DateTimeLabel>
          <DateTimeDecription>{`${meal.date} às ${meal.time}`}</DateTimeDecription>

          <TagContent>
            <StatusInfo
              description={meal.status === 'INSIDE' ? "dentro da dieta" : 'fora da dieta'}
              type={meal.status}
            />
          </TagContent>

          <ButtonContent>
            <Button
              title="Editar refeição"
              type="EDIT"
              onPress={handleGoEditMeal}
            />
            <Button 
              title="Excluir refeição"
              type="DELETE"
              onPress={handleOpenDeleteMeal}
            />
          </ButtonContent>
        </CreateContent>
      }
    </Container>
  );
}