const express = require('express');
const path = require('path');
const getIngredients = require('./src/controllers/ingredients');
const getOrders = require('./src/controllers/orders/all'); 
const getAuth = require('./src/controllers/auth/login');
const getRegister = require('./src/controllers/auth/register');

// Создаем экземпляр приложения
const app = express();
const PORT = process.env.PORT || 3000;

// Настройка статической папки для обслуживания файлов
app.use(express.static(path.join(__dirname, 'src', 'views')));

// Обработка маршрутов
app.get('/api/ingredients', getIngredients);
app.get('/api/orders/all', getOrders); 
app.post('/api/auth/login', getAuth);
app.post('/api/auth/register', getRegister);

// Главная страница
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на https://api-constructor.onrender.com/`);
});
