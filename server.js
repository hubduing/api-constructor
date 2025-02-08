const express = require('express');
const path = require('path');
const getIngredients = require('./src/controllers/ingredients');
const getOrders = require('./src/controllers/orders/all'); 
const authController = require('./src/controllers/auth');

// Создаем экземпляр приложения
const app = express();
const PORT = process.env.PORT || 3000;

// Настройка статической папки для обслуживания файлов
app.use(express.static(path.join(__dirname, 'src', 'views')));

// Обработка маршрутов
app.get('/api/ingredients', getIngredients);
app.get('/api/orders/all', getOrders); 
app.post('/api/auth/login', authController.login);
app.post('/api/auth/register', authController.register);

// Главная страница
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на https://api-constructor.onrender.com/`);
});
