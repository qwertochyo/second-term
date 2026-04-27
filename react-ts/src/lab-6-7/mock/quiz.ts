import type { IQuiz } from "../types/types";

export const quiz: IQuiz[] = [
  {
    id: 1,
    type: "M",
    title: "Сопоставьте сооружение и город, в котором оно расположено.",
    tasks: [
      {
        id: "1",
        question: "Башня Аль-Хамра",
        answer: "Кувейт"
      },
      {
        id: "2",
        question: "Башня CITIC",
        answer: "Гуанчжоу"
      },
      {
        id: "3",
        question: "Телебашня «Коктобе»",
        answer: "Алматы"
      },
      {
        id: "4",
        question: "Си-Эн Тауэр",
        answer: "Торонто"
      },
    ]
  },
  {
    id: 2,
    type: "M",
    title: "Сопоставьте сооружение и его высоту.",
    tasks: [
      {
        id: "1",
        question: "Tokyo Skytree",
        answer: "634"
      },
      {
        id: "2",
        question: "Бурдж-Халифа",
        answer: "838"
      },
      {
        id: "3",
        question: "Эмпайр-стейт-билдинг",
        answer: "448.7"
      },
      {
        id: "4",
        question: "Останкинская башня",
        answer: "540.1"
      },
      {
        id: "5",
        question: "Lotte World Tower",
        answer: "555"
      }
    ]
  },
  {
    id: 3,
    type: "S",
    title: "Отсортировать здания по убыванию их высоты.",
    tasks: [
      {
        id: "1",
        question: "Бурдж-Халифа",
        answer: "1"
      },
      {
        id: "2",
        question: "Tokyo Skytree",
        answer: "2"
      },
      {
        id: "3",
        question: "Lotte World Tower",
        answer: "3"
      },
      {
        id: "4",
        question: "Останкинская башня",
        answer: "4"
      },
      {
        id: "5",
        question: "Эмпайр-стейт-билдинг",
        answer: "5"
      },
    ]
  },
]