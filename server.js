const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Разрешаем кросс-доменные запросы
app.use(express.json()); // Для обработки JSON

// Пример данных для API
const ingredients = [
  {
    _id: "643d69a5c3f7b9001cfa093c",
    name: "Краторная булка N-200i",
    type: "bun",
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: "https://code.s3.yandex.net/react/code/bun-02.png"
  },
  // Добавьте остальные ингредиенты сюда...
];

// Эндпоинт для получения ингредиентов
app.get('/api/ingredients', (req, res) => {
  res.json({ success: true, data: ingredients });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
