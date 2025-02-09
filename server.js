const express = require('express');
const path = require('path');
const { getIngredients, getOrders, createOrder, getAuth, getRegister } = require('./src/controllers/controllers');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'src', 'views')));

app.get('/api/ingredients', getIngredients);
app.get('/api/orders/all', getOrders);
app.post('/api/orders', createOrder);
app.post('/api/auth/login', getAuth);
app.post('/api/auth/register', getRegister);

app.get('/api/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на https://api-constructor.onrender.com/api/`);
});
