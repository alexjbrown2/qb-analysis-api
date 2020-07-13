const gameinfo = (sequelize, DataTypes) => {
  const GameInfo = sequelize.define('gameinfo', {
    gameid: {
      type: DataTypes.STRING,
      validate: { notEmpty: true },
    },
    home: {
      type: DataTypes.STRING,
      validate: { notEmpty: true },
    },
    away: {
      type: DataTypes.STRING,
      validate: { notEmpty: true },
    },
    gameDate: {
      type: DataTypes.STRING,
      validate: { notEmpty: true },
    },
    gameTime: {
      type: DataTypes.STRING,
      validate: { notEmpty: true },
    },
    weather: {
      type: DataTypes.STRING,
      validate: { notEmpty: true },
    },
    roof: {
      type: DataTypes.STRING,
      validate: { notEmpty: true },
    },
    surface: {
      type: DataTypes.STRING,
      validate: { notEmpty: true },
    },
  });

  return GameInfo;
};

module.exports = gameinfo;