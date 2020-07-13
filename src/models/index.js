const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
  },
);

const models = {
  User: require('./user')(sequelize, DataTypes),
  Message: require('./message')(sequelize, DataTypes),
  GameInfo: require('./gameinfo')(sequelize, DataTypes)
};

console.log(models)

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;