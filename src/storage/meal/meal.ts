
export type StatusMeal = 'INSIDE' | 'OUTSIDE';

export type MealDTO = {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  status: StatusMeal;
}