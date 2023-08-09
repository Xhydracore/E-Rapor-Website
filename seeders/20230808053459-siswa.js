'use strict';

const fs = require('fs');
const csv = require('csv-parser');
const Siswa = require('../models/siswa');
const { resolve } = require('path');
const { rejects } = require('assert');
const { error } = require('console');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const results = []
    await new Promise((resolve, rejects) => {
      fs.createReadStream('./data/data_siswas_csv.csv')
        .pipe(csv())
        .on('data', (data) => {
          results.push(data);
        })
        .on('end', () => {
          Siswa.bulkCreate(results)
            .then(() => {
              resolve();
            })
            .catch((error) => {
              console.error(error);
              rejects(error);
            });
        });
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('siswa', null, {});
  }
};
