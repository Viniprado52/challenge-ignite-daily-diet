import AsyncStorage from '@react-native-async-storage/async-storage';

import { MealDTO } from './meal';
import { MEAL_COLLECTION } from '@storage/storageConfigs';

export async function mealGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: MealDTO[] = storage ? JSON.parse(storage) : [];

    return meals;
  } catch (error) {
    throw error;
  }
}