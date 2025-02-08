const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

// Массив с данными о ингредиентах
const ingredients = require('./ingredients');

// Эндпоинт для получения ингредиентов
app.get(`/${ingredients}`, (req, res) => {
  res.json({ success: true, data: ingredients });
});

// Главная страница
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});