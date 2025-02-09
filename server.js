const express = require('express');
const path = require('path');
const { getIngredients, getOrders, createOrder, getAuth, getRegister, refreshToken, forgotPassword, resetPassword } = require('./src/controllers/controllers');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'src', 'views')));
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

app.get('/ingredients', getIngredients);
app.get('/orders/all', getOrders);
app.post('/orders', createOrder);
app.post('/auth/login', getAuth);
app.post('/auth/register', getRegister);
app.post('/auth/token', refreshToken);
app.post('/password-reset', forgotPassword);
app.post('/password-reset/reset', resetPassword);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на https://api-constructor.onrender.com/`);
});
