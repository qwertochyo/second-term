export interface IReplaceItem {
  key: string,
  value: string,
}

export type TGroup = {
  "id": number, 
  "Группа": string | number, 
  "Минимальная высота": number , 
  "Максимальная высота": number , 
  "Средняя высота": number,
};

export type TSelect = "Страна" | "Год" | "Тип";

export type TSeries = {
  'Максимальная высота': boolean,
  'Средняя высота': boolean,
  'Минимальная высота': boolean,
}

export interface ITask {
  id: string;
  question: string,
  answer: string,
}

export interface IQuiz {
  id: number,
  type: "M" | "S",
  title: string,
  tasks: ITask[],
}

export interface IReslt {
  correct: number,
  total: number,
}