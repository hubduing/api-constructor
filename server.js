const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

// Импорт данных о ингредиентах
const ingredients = require('./ingredients');

// Эндпоинт для получения ингредиентов
app.get('/ingredients', (req, res) => {
  res.json(ingredients); // Отправляем данные, которые уже содержат success: true
});

// Главная страница
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
