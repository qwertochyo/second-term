export interface IReplaceItem {
  key: string
  value: string
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