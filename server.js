const express = require('express');
const path = require('path');
const ingredients = require('./src/controllers/ingredients'); // Импортируем данные

// Создаем экземпляр приложения
const app = express();
const PORT = process.env.PORT || 3000;

// Настройка статической папки для обслуживания файлов
app.use(express.static(path.join(__dirname, 'src', 'views')));

// Обработка маршрутов
app.get('/api/ingredients', (req, res) => {
    res.json(ingredients); // Возвращаем данные напрямую
});
// Другие маршруты
app.get('/api/orders/all', getOrders); 
app.post('/api/auth/login', getAuth);
app.post('/api/auth/register', getRegister);

// Главная страница
app.get('/api/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на https://api-constructor.onrender.com/api/`);
});
