'use strict';
const fs = require('fs');
const path = require('path');
const csv = require('csv');

const filename = '../qb-analysis/data/game_info/2019_game_info.csv'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    var myData
    var parser = csv.parse({}, function (err, data) {    
       myData = data.map((record) => {
          return {
            gameid: record[0], 
            home: record[1],
            away: record[2],
            gameDate: record[3],
            gameTime: record[4],
            weather: record[5],
            roof: record[6],
            surface: record[7],
            createdAt: new Date(),
            updatedAt: new Date()
          }
        })    
    })
    const stream = fs.createReadStream(filename).pipe(parser);
    stream.on('end', () => {
      queryInterface.bulkInsert('gameinfos', myData, {})
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
