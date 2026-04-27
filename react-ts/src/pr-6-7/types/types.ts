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

export type TGroup = {
  id: number, 
  group: string | number, 
  minKcal: number , 
  maxKcal: number , 
  avgKcal: number,
};

export type TSelect = "Время готовки" | "Количество порций" | "Популярность";

export type TSeries = {
  maxKcal: boolean,
  avgKcal: boolean,
  minKcal: boolean,
}

export interface ITask {
  id: string,
  question: string,
  answer: string,
}

export type TTaskType = "M" | "S" | "C";

export interface IQuiz {
  id: number,
  type: TTaskType,
  title: string,
  tasks: ITask[],
}

export interface IReslt {
  correct: number,
  total: number,
}