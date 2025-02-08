// const express = require('express');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 3000;
// const ingredients = require('./src/controllers/ingredients');
// // Настройка статической папки для обслуживания файлов
// app.use(express.static(path.join(__dirname, 'src', 'views')));

// // Обработка маршрутов
// app.get('/api/ingredients', (req, res) => {
//     // Здесь будет логика для получения ингредиентов
//     res.send(ingredients);
// });

// app.get('/api/orders/all', (req, res) => {
//     // Здесь будет логика для получения всех заказов
//     res.send('Логика для получения всех заказов');
// });

// app.post('/api/auth/login', (req, res) => {
//     // Здесь будет логика для обработки входа
//     res.send('Логика для входа');
// });

// app.post('/api/auth/register', (req, res) => {
//     // Здесь будет логика для обработки регистрации
//     res.send('Логика для регистрации');
// });

// // Главная страница
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'src', 'views', 'index.html'));
// });

// // Запуск сервера
// app.listen(port, () => {
//   console.log(`Сервер запущен на https://api-constructor.onrender.com/`);
// });