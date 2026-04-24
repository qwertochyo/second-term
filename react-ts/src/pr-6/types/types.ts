type MealType = "Завтрак" | "Обед" | "Ужин";

export interface ICard {
  id: number;
  title: string;
  image: string;
  description: string[];
}

export interface IRecipe {
  id: number;
  title: string;
  popularity: number;
  mealType: MealType;
  servings: number;
  cookingTime: number;
  calories: number;
}