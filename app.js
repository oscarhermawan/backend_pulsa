const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const Sequelize = require('sequelize');
const sequelize = new Sequelize('neocellular', 'admin', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
});

app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let provider = require('./routes/provider')

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


app.use('/', provider);


app.listen(3000)
