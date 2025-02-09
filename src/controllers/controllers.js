// Массив для хранения ингредиентов
const ingredients = {
  success: true,
  data: [
    {
      _id: "643d69a5c3f7b9001cfa093c",
      name: "Краторная булка N-200i",
      type: "bun",
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: "https://code.s3.yandex.net/react/code/bun-02.png",
      image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
      __v: 0,
    },
    {
      _id: "643d69a5c3f7b9001cfa0941",
      name: "Биокотлета из марсианской Магнолии",
      type: "main",
      proteins: 420,
      fat: 142,
      carbohydrates: 242,
      calories: 4242,
      price: 424,
      image: "https://code.s3.yandex.net/react/code/meat-01.png",
      image_mobile: "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
      __v: 0,
    },
    {
      _id: "643d69a5c3f7b9001cfa093e",
      name: "Филе Люминесцентного тетраодонтимформа",
      type: "main",
      proteins: 44,
      fat: 26,
      carbohydrates: 85,
      calories: 643,
      price: 988,
      image: "https://code.s3.yandex.net/react/code/meat-03.png",
      image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
      __v: 0,
    },
    {
      _id: "643d69a5c3f7b9001cfa0942",
      name: "Соус Spicy-X",
      type: "sauce",
      proteins: 30,
      fat: 20,
      carbohydrates: 40,
      calories: 30,
      price: 90,
      image: "https://code.s3.yandex.net/react/code/sauce-02.png",
      image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
      __v: 0,
    },
    {
      _id: "643d69a5c3f7b9001cfa0943",
      name: "Соус фирменный Space Sauce",
      type: "sauce",
      proteins: 50,
      fat: 22,
      carbohydrates: 11,
      calories: 14,
      price: 80,
      image: "https://code.s3.yandex.net/react/code/sauce-04.png",
      image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
      __v: 0,
    },
    {
      _id: "643d69a5c3f7b9001cfa093f",
      name: "Мясо бессмертных моллюсков Protostomia",
      type: "main",
      proteins: 433,
      fat: 244,
      carbohydrates: 33,
      calories: 420,
      price: 1337,
      image: "https://code.s3.yandex.net/react/code/meat-02.png",
      image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
      __v: 0,
    },
    {
      _id: "643d69a5c3f7b9001cfa0940",
      name: "Говяжий метеорит (отбивная)",
      type: "main",
      proteins: 800,
      fat: 800,
      carbohydrates: 300,
      calories: 2674,
      price: 3000,
      image: "https://code.s3.yandex.net/react/code/meat-04.png",
      image_mobile: "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/meat-04-large.png",
      __v: 0,
    },
    {
      _id: "643d69a5c3f7b9001cfa093d",
      name: "Флюоресцентная булка R2-D3",
      type: "bun",
      proteins: 44,
      fat: 26,
      carbohydrates: 85,
      calories: 643,
      price: 988,
      image: "https://code.s3.yandex.net/react/code/bun-01.png",
      image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
      __v: 0,
    },
    {
      _id: "643d69a5c3f7b9001cfa0944",
      name: "Соус традиционный галактический",
      type: "sauce",
      proteins: 42,
      fat: 24,
      carbohydrates: 42,
      calories: 99,
      price: 15,
      image: "https://code.s3.yandex.net/react/code/sauce-03.png",
      image_mobile: "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
      __v: 0,
    },
    {
      _id: "643d69a5c3f7b9001cfa0945",
      name: "Соус с шипами Антарианского плоскоходца",
      type: "sauce",
      proteins: 101,
      fat: 99,
      carbohydrates: 100,
      calories: 100,
      price: 88,
      image: "https://code.s3.yandex.net/react/code/sauce-01.png",
      image_mobile: "https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/sauce-01-large.png",
      __v: 0,
    },
    {
      _id: "643d69a5c3f7b9001cfa0946",
      name: "Хрустящие минеральные кольца",
      type: "main",
      proteins: 808,
      fat: 689,
      carbohydrates: 609,
      calories: 986,
      price: 300,
      image: "https://code.s3.yandex.net/react/code/mineral_rings.png",
      image_mobile:
        "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
      image_large:
        "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
      __v: 0,
    },
    {
      _id: "643d69a5c3f7b9001cfa0947",
      name: "Плоды Фалленианского дерева",
      type: "main",
      proteins: 20,
      fat: 5,
      carbohydrates: 55,
      calories: 77,
      price: 874,
      image: "https://code.s3.yandex.net/react/code/sp_1.png",
      image_mobile: "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/sp_1-large.png",
      __v: 0,
    },
    {
      _id: "643d69a5c3f7b9001cfa0948",
      name: "Кристаллы марсианских альфа-сахаридов",
      type: "main",
      proteins: 234,
      fat: 432,
      carbohydrates: 111,
      calories: 189,
      price: 762,
      image: "https://code.s3.yandex.net/react/code/core.png",
      image_mobile: "https://code.s3.yandex.net/react/code/core-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/core-large.png",
      __v: 0,
    },
    {
      _id: "643d69a5c3f7b9001cfa0949",
      name: "Мини-салат Экзо-Плантаго",
      type: "main",
      proteins: 1,
      fat: 2,
      carbohydrates: 3,
      calories: 6,
      price: 4400,
      image: "https://code.s3.yandex.net/react/code/salad.png",
      image_mobile: "https://code.s3.yandex.net/react/code/salad-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/salad-large.png",
      __v: 0,
    },
    {
      _id: "643d69a5c3f7b9001cfa094a",
      name: "Сыр с астероидной плесенью",
      type: "main",
      proteins: 84,
      fat: 48,
      carbohydrates: 420,
      calories: 3377,
      price: 4142,
      image: "https://code.s3.yandex.net/react/code/cheese.png",
      image_mobile: "https://code.s3.yandex.net/react/code/cheese-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/cheese-large.png",
      __v: 0,
    },
  ],
};

// Массив для хранения заказов
let orders = [];

// Массив для хранения пользователей (для аутентификации)
let users = [];

// Контроллер для получения всех ингредиентов
// const getIngredients = (req, res) => {
//     res.json(ingredients);
// };

const getIngredients = (req, res) => {
  res.json({
    success: true,
    data: ingredients,
  });
};

// Контроллер для получения всех заказов
const getOrders = (req, res) => {
  res.json({ success: true, data: orders });
};

// Контроллер для создания нового заказа
const createOrder = (req, res) => {
  const { ingredients } = req.body;
  const newOrder = {
    id: orders.length + 1,
    ingredients,
    createdAt: new Date(),
  };
  orders.push(newOrder);
  res.status(201).json({ success: true, order: newOrder });
};

// Контроллер для аутентификации пользователя
const getAuth = (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    res.json({ success: true, message: "Успешная аутентификация" });
  } else {
    res
      .status(401)
      .json({ success: false, message: "Неверные учетные данные" });
  }
};

// Контроллер для регистрации нового пользователя
const getRegister = (req, res) => {
  const { email, name, password } = req.body;
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return res
      .status(400)
      .json({
        success: false,
        message: "Пользователь с таким email уже существует",
      });
  }
  const newUser = { email, name, password };
  users.push(newUser);
  res
    .status(201)
    .json({
      success: true,
      message: "Пользователь зарегистрирован",
      user: { email, name },
    });
};

// Контроллер для обновления токена
const refreshToken = (req, res) => {
  // Логика для обновления токена
  res.json({ success: true, message: "Токен обновлен" });
};

// Контроллер для сброса пароля
const forgotPassword = (req, res) => {
  const { email } = req.body;
  // Логика для обработки сброса пароля (например, отправка ссылки на email)
  res.json({
    success: true,
    message: "Ссылка для сброса пароля отправлена на email",
  });
};

// Контроллер для установки нового пароля
const resetPassword = (req, res) => {
  const { email, newPassword } = req.body;
  // Логика для установки нового пароля
  const user = users.find((u) => u.email === email);
  if (user) {
    user.password = newPassword; // Обновляем пароль
    res.json({ success: true, message: "Пароль успешно обновлен" });
  } else {
    res.status(404).json({ success: false, message: "Пользователь не найден" });
  }
};

// Экспортируем контроллеры
module.exports = {
  getIngredients,
  getOrders,
  createOrder,
  getAuth,
  getRegister,
  refreshToken,
  forgotPassword,
  resetPassword,
};
