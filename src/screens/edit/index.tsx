import { useEffect, useState } from "react";
import { Alert, Keyboard } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { isEmpty, isNil, replace } from "lodash";

import { 
  ButtonAddContent, 
  ButtonOptionContent, 
  Container, 
  CreateContent, 
  DateTimeContent, 
  HeaderContent, 
  HourContent, 
  InputField, 
  InputFieldDecription, 
  InputTitle, 
  SpaceButton, 
  TimeContent
 } from "./styles";

import { Button } from "@components/button";
import { AppError } from "@utils/app-error";
import { Loading } from "@components/loading";
import { HeaderBack } from "@components/header-back";
import { mealGetAll } from "@storage/meal/mealGetAll";
import { ButtonOption } from "@components/button-option";
import { MealDTO, StatusMeal } from "@storage/meal/meal";
import { mealEditById } from "@storage/meal/mealEditById";
import { formatDateMask, formatTimeMask } from "@utils/masks";

type RouteParam = {
  id: string;
}

export function Edit() {

  const [isLoading, setIsLoading] = useState(false);
  const [mealName, setMealName] = useState('');
  const [mealDescription, setMealDescription] = useState('');
  const [mealDate, setMealDate] = useState('');
  const [mealTime, setMealTime] = useState('');
  const [buttonActiveNo, setButtonActiveNo]   = useState(false);
  const [buttonActiveYes, setButtonActiveYes] = useState(false);
  const [mealStatus, setMealStatus] = useState<StatusMeal>('OUTSIDE');

  const navigator = useNavigation();

  const route = useRoute();
  const { id } = route.params as RouteParam;

  function handleGoHome(): void {
    navigator.navigate('home');
  }

  function handleCloseKeyboard(): void {
    Keyboard.dismiss();
  }

  function validateFieldsRequired(): boolean {
    return (
      mealName !== '' && 
      mealDate !== '' && 
      mealTime !== '' && 
      mealDescription !== '' &&
      ( buttonActiveNo || buttonActiveYes)
    );
  }

  function handleSelectOption(type: StatusMeal): void {
    if (type == 'INSIDE') {
      setButtonActiveYes(true);
      setButtonActiveNo(false);
    } else {
      setButtonActiveNo(true);
      setButtonActiveYes(false);
    }
    setMealStatus(type);
  }

  function applyMaskTime(value: string): void {
    let valueFormatted: string = '';

    value = replace(value, ':', '');

    if (value.length > 4) {
      return;
    }
    valueFormatted = formatTimeMask(value);
    setMealTime(valueFormatted);

    if (value.length === 4) {
      Keyboard.dismiss();
    }
  }

  function applyMaskDate(value: string): void {
    let valueFormatted: string = '';

    value = value.replaceAll('/', '');

    if (value.length > 8) {
      return
    }
    valueFormatted = formatDateMask(value);
    setMealDate(valueFormatted);

    if (value.length === 8) {
      Keyboard.dismiss();
    }
  }

  async function handleSaveMeal() {
    try {
      if (!validateFieldsRequired()) {
        return Alert.alert('Editar refeição', 'É necessários informar todos os campos');
      }
      const newMeal: MealDTO = {
        id: id,
        name: mealName,
        description: mealDescription,
        date: mealDate,
        time: mealTime,
        status: mealStatus
      };

      await mealEditById(newMeal);
      navigator.navigate('detail', { id: newMeal.id });
    } catch (error) {
      if(error instanceof AppError) {
        Alert.alert('Nova refeição', error.description);
      } else {
        Alert.alert('Novo refeição', 'Não foi possível registrar a refeição.');
        console.log(error);
      }
    }
  }

  async function fetchMeal() {
    try {
      setIsLoading(true);
      const data = await mealGetAll();
      const mealEdit = data.filter(item => item.id === id)[0];

      if (!isEmpty(mealEdit) && !isNil(mealEdit)) {
        setMealName(mealEdit.name);
        setMealDate(mealEdit.date);
        setMealTime(mealEdit.time);
        setMealStatus(mealEdit.status);
        setMealDescription(mealEdit.description);
        setButtonActiveYes(mealEdit.status === 'INSIDE');
        setButtonActiveNo(mealEdit.status === 'OUTSIDE');
      }
    } catch (error) {
      Alert.alert('Refeições', 'Não foi possível carregar os dados da refeição');
      console.log(error);
    } finally {
      setIsLoading(false);
    } 
  }

  useEffect(() => {
    fetchMeal();
  }, []);

  return(
    <Container>
      <HeaderContent>
        <HeaderBack
          title="Editar refeição"
          goBack={handleGoHome}
          type='DEFAULT'
        />
      </HeaderContent>

      {isLoading ? <Loading /> :
        <CreateContent>
          <InputTitle>Nome</InputTitle>
          <InputField 
            value={mealName} 
            onChangeText={setMealName} 
            autoCorrect={false} 
            onSubmitEditing={handleCloseKeyboard} 
            numberOfLines={1}
          />

          <InputTitle>Descrição</InputTitle>
          <InputFieldDecription
            value={mealDescription}
            onChangeText={setMealDescription}
            autoCorrect={false} 
            onSubmitEditing={handleCloseKeyboard}
          />

          <DateTimeContent>
            <TimeContent>
              <InputTitle>Data</InputTitle>
              <InputField 
                keyboardType="numeric"
                value={mealDate} 
                onChangeText={applyMaskDate}
                autoCorrect={false} 
                onSubmitEditing={handleCloseKeyboard} 
              />
            </TimeContent>
            
            <HourContent>
              <InputTitle>Hora</InputTitle>
              <InputField
                keyboardType="numeric"
                value={mealTime} 
                onChangeText={applyMaskTime}
                autoCorrect={false}
                onSubmitEditing={handleCloseKeyboard} 
              />
            </HourContent>
          </DateTimeContent>

          <InputTitle>Está dentro da dieta?</InputTitle>
          <ButtonOptionContent>
            <ButtonOption
              active={buttonActiveYes}
              type="INSIDE"
              text="Sim"
              onPress={() => handleSelectOption('INSIDE')}
            />
            <SpaceButton></SpaceButton>
            <ButtonOption
              active={buttonActiveNo}
              type="OUTSIDE"
              text="Não"
              onPress={() => handleSelectOption('OUTSIDE')}
            />
          </ButtonOptionContent>

          <ButtonAddContent>
            <Button
              title="Salvar alterações"
              onPress={handleSaveMeal}
            />
          </ButtonAddContent>
        </CreateContent>
      }
    </Container>
  );
}