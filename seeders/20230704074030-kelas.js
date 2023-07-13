"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Kelas",
      [
        {
          tingkat: "7",
          nama: "VII a",
          kouta: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tingkat: "8",
          nama: "VIII a",
          kouta: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tingkat: "9",
          nama: "IX a",
          kouta: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tingkat: "7",
          nama: "VII b",
          kouta: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tingkat: "8",
          nama: "VIII b",
          kouta: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tingkat: "9",
          nama: "IX b",
          kouta: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Kelas", null, {});
  },
};
