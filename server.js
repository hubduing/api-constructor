const express = require('express');
const path = require('path');
const { getIngredients, getOrders, createOrder, getAuth, getRegister } = require('./src/controllers/controllers');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'src', 'views')));

app.get('/ingredients', getIngredients);
app.get('/orders/all', getOrders);
app.post('/orders', createOrder);
app.post('/auth/login', getAuth);
app.post('/auth/register', getRegister);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на https://api-constructor.onrender.com/`);
});
