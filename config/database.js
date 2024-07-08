import Sequelize from 'sequelize';

import * as models from '../models';

const {
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_DIALECT
} = process.env;

const db = {};
// Creating a new Sequelize instance to connect to the PostgreSQL database
const sequelize = new Sequelize(POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, {
  host: POSTGRES_HOST,
  dialect: POSTGRES_DIALECT,
  port: POSTGRES_PORT,
  dialectOptions: {
    connectTimeout: 50000
  },
  pool: {
    max: 150,
    min: 0,
    idle: 10000
  },
  define: {
    timestamps: true
  },
  logging: false
});

sequelize.authenticate()
  .then(() => {
    console.log('DB Connected Successfully!.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Loading each model and associating them to the `db` object
Object.keys(models).forEach((modelName) => {
  const model = models[modelName](sequelize);
  db[model.name] = model;
});

// Adding the Sequelize instance and Sequelize library to the `db` object
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Synchronizing all defined models with the database
sequelize.sync();

export default db;
