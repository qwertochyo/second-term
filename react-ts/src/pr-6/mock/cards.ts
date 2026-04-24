import type { ICard } from "../types/types";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";
import Image4 from "../assets/image4.jpg";
import Image5 from "../assets/image5.jpg";
import Image6 from "../assets/image6.jpg";
import Image7 from "../assets/image7.jpg";
import Image8 from "../assets/image8.jpg";
import Image9 from "../assets/image9.jpg";
import Image10 from "../assets/image10.jpg";

export const cards: ICard[] = [
  {
    id: 1,
    title: "Салат Цезарь",
    image: Image1,
    description: ["Куриное филе", "Салат романо", "Пармезан", "Сухарики", "Соус Цезарь"]
  },
  {
    id: 2,
    title: "Борщ",
    image: Image2,
    description: [
      "Свекла — основа вкуса и цвета",
      "Капуста — придаёт объём и текстуру",
      "Говядина — делает бульон наваристым",
      "Картофель — добавляет сытность",
      "Морковь — даёт лёгкую сладость"
    ]
  },
  {
    id: 3,
    title: "Пицца Маргарита",
    image: Image3,
    description: ["Тесто", "Томатный соус", "Моцарелла", "Базилик"]
  },
  {
    id: 4,
    title: "Паста Карбонара",
    image: Image4,
    description: ["Спагетти", "Бекон", "Яйца", "Пармезан", "Перец"]
  },
  {
    id: 5,
    title: "Крутое блюдо",
    image: Image5,
    description: ["Яйца", "Молоко", "Помидоры", "Перец", "Зелень"]
  },
  {
    id: 6,
    title: "Шашлык",
    image: Image6,
    description: [
      "Свинина — сочное и мягкое мясо",
      "Лук — основа маринада",
      "Маринад — делает мясо нежным",
      "Специи — придают аромат и вкус"
    ]
  },
  {
    id: 7,
    title: "Рыба запеченная",
    image: Image7,
    description: ["Филе рыбы", "Лимон", "Чеснок", "Травы"]
  },
  {
    id: 8,
    title: "Овсяная каша",
    image: Image8,
    description: ["Овсяные хлопья", "Молоко", "Мед", "Ягоды"]
  },
  {
    id: 9,
    title: "Гречка с грибами",
    image: Image9,
    description: [
      "Рассыпчатая гречка — основа блюда и источник сытности",
      "Шампиньоны — придают насыщенный грибной вкус и аромат",
      "Лук — добавляет сладость и глубину вкуса при обжарке",
      "Масло — делает блюдо мягким и более ароматным"
    ]
  },
  {
    id: 10,
    title: "Блины с вареньем",
    image: Image10,
    description: [
      "Мука — основа тонких и нежных блинов",
      "Молоко — делает тесто мягким и эластичным",
      "Яйца — связывают ингредиенты и придают структуру",
      "Сахар — лёгкая сладость в тесте",
      "Варенье — сладкая начинка с фруктовым вкусом"
    ]
  }
];