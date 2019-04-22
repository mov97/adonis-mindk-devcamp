require('dotenv').config();
const mysql = require('mysql');
const util = require('util');

global.db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

global.db.query = util.promisify(global.db.query);

        //Получаем всех пользователей
        (async function() {
                const allUsers = await User.loadAll();
        })();

        // Создать нового пользователя
        (async function () {
                const createUser = new User();
                createUser.data = {
                        first_name: 'Alex',
                        last_name: 'Matiash',
                        age: 21,
                        gender: 'F'
                };
                await createUser.save();
        })();

        // Изменить имя пользователю
        (async function () {
                createUser.data.first_name = 'Nikolay'
                await createUser.save();
        })();
        
        
        // Удалить пользователя
        (async function () {
                await createUser.delete();
        })();

        // Добавить пользователю новую машину
        (async function () {
        const newCar = new Car();
        newCar.data = {
          model: 'BMW',
          year: 2007
        };
      
        const newUser = await User.load(1);
        await newUser.addCar(newCar);
        console.log(newUser);
      })();