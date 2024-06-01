import AsyncStorage from '@react-native-async-storage/async-storage';

import { mealGetAll } from './mealGetAll';

import { MEAL_COLLECTION } from '@storage/storageConfigs';
import { isEmpty } from 'lodash';

export async function mealDeleteById(mealId: string) {
  try {
    const storedMeal = await mealGetAll();

    const meals = storedMeal.filter(meal => meal.id !== mealId);

    if (!isEmpty(meals)) {
      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals));
    } else {
      await AsyncStorage.removeItem(`${MEAL_COLLECTION}`);
    }
  } catch (error) {
    throw error;
  }
}