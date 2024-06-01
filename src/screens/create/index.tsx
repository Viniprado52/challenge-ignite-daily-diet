import { Alert, Keyboard } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

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
import { mealAdd } from "@storage/meal/mealAdd";
import { HeaderBack } from "@components/header-back";
import { ButtonOption } from "@components/button-option";
import { MealDTO, StatusMeal } from "@storage/meal/meal";
import { formatDateMask, formatTimeMask } from "@utils/masks";
import { replace } from "lodash";

export function Create() {

  const [mealName, setMealName] = useState('');
  const [mealDescription, setMealDescription] = useState('');
  const [mealDate, setMealDate] = useState('');
  const [mealTime, setMealTime] = useState('');
  const [buttonActiveNo, setButtonActiveNo]   = useState(false);
  const [buttonActiveYes, setButtonActiveYes] = useState(false);
  const [mealStatus, setMealStatus] = useState<StatusMeal>('OUTSIDE');

  const navigator = useNavigation();

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

  async function handleNewMeal() {
    try {
      if (!validateFieldsRequired()) {
        return Alert.alert('Nova refeição', 'É necessários informar todos os campos')
      }
      const newMeal: MealDTO = {
        id: `${mealName}${mealDate}${mealTime}`,
        name: mealName,
        description: mealDescription,
        date: mealDate,
        time: mealTime,
        status: mealStatus
      };

      await mealAdd(newMeal);
      navigator.navigate('created', { type: mealStatus });
    } catch (error) {
      if(error instanceof AppError) {
        Alert.alert('Nova refeição', error.description);
      } else {
        Alert.alert('Novo refeição', 'Não foi possível registrar a refeição.');
        console.log(error);
      }
    }
  }

  return(
    <Container>
      <HeaderContent>
        <HeaderBack
          title="Nova refeição"
          goBack={handleGoHome}
          type='DEFAULT'
        />
      </HeaderContent>

      <CreateContent>
        <InputTitle>Nome</InputTitle>
        <InputField 
          value={mealName} 
          onChangeText={setMealName} 
          autoCorrect={false} 
          onSubmitEditing={handleCloseKeyboard} 
        />

        <InputTitle>Descrição</InputTitle>
        <InputFieldDecription
          value={mealDescription}
          onChangeText={setMealDescription}
          clearTextOnFocus
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
            title="Cadastrar refeição"
            onPress={handleNewMeal}
          />
        </ButtonAddContent>
      </CreateContent>
    </Container>
  );
}