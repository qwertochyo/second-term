import type { IQuiz } from "../types/types";

export const quiz: IQuiz[] = [
  {
    id: 1,
    type: "M",
    title: "Сопоставьте блюдо и его калорийность (ккал).",
    tasks: [
      { id: "1", question: "Салат Цезарь", answer: "450" },
      { id: "2", question: "Борщ", answer: "300" },
      { id: "3", question: "Пицца Маргарита", answer: "580" },
      { id: "4", question: "Омлет с овощами", answer: "180" }
    ]
  },
  {
    id: 2,
    type: "M",
    title: "Сопоставьте блюдо и его страну происхождения.",
    tasks: [
      { id: "1", question: "Салат Цезарь", answer: "Мексика" },
      { id: "2", question: "Борщ", answer: "Украина" },
      { id: "3", question: "Пицца Маргарита", answer: "Италия" },
      { id: "4", question: "Пельмени", answer: "Россия/Сибирь" }
    ]
  },
  {
    id: 3,
    type: "S",
    title: "Отсортируйте блюда по убыванию популярности (1 — самый популярный, 4 — наименее популярный).",
    tasks: [
      { id: "1", question: "Салат Цезарь", answer: "1" },
      { id: "2", question: "Борщ", answer: "2" },
      { id: "3", question: "Пицца Маргарита", answer: "3" },
      { id: "4", question: "Пельмени", answer: "4" }
    ]
  },
  {
    id: 4,
    type: "S",
    title: "Отсортируйте блюда по возрастанию времени приготовления (1 — самое быстрое, 4 — самое долгое).",
    tasks: [
      { id: "1", question: "Сэндвич с ветчиной", answer: "1" },
      { id: "2", question: "Паста Карбонара", answer: "2" },
      { id: "3", question: "Куриный суп", answer: "3" },
      { id: "4", question: "Шашлык", answer: "4" }
    ]
  },
  {
    id: 5,
    type: "C",
    title: "Выберите правильный ответ (только один вариант). Какое блюдо является итальянским?",
    tasks: [
      { id: "1", question: "Борщ", answer: "0" },
      { id: "2", question: "Пицца Маргарита", answer: "1" },
      { id: "3", question: "Пельмени", answer: "0" },
      { id: "4", question: "Салат Оливье", answer: "0" }
    ]
  },
  {
    id: 6,
    type: "C",
    title: "Выберите правильный ответ (только один вариант). Какое блюдо традиционно подают с хреном и горчицей?",
    tasks: [
      { id: "1", question: "Борщ", answer: "0" },
      { id: "2", question: "Салат Цезарь", answer: "0" },
      { id: "3", question: "Пельмени", answer: "1" },
      { id: "4", question: "Пицца Маргарита", answer: "0" }
    ]
  }
];