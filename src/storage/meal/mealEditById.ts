
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MealDTO } from './meal';
import { mealGetAll } from './mealGetAll';
import { mealDeleteById } from './mealDeleteById';

import { AppError } from '@utils/app-error';

import { MEAL_COLLECTION } from '@storage/storageConfigs';

export async function mealEditById(newMeal: MealDTO) {
  try {
    const storedMeals: Array<MealDTO> = await mealGetAll();
    const mealAlreadyExists = storedMeals.filter(meal => meal.id === newMeal.id);

    if(mealAlreadyExists.length === 0) {
      throw new AppError('Refeição inexistente');
    }

    await mealDeleteById(newMeal.id);
    const storedWithoutDeleted = storedMeals.filter(meal => meal.id !== newMeal.id);
    const storage = JSON.stringify([...storedWithoutDeleted, newMeal]);
    await AsyncStorage.setItem(`${MEAL_COLLECTION}`, storage);
  } catch (error) {
    throw error;
  }
}