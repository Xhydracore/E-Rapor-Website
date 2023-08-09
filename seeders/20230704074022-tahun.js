"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Tahuns",
      [
        {
          tahun: "2018-2019",
          kepala_sekolah: "kepala sekolah",
          nip: "14141241241",
          tgl_raport: new Date(),
          semester: "Satu",
          status: "Active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tahun: "2018-2019",
          status: "Nonactive",
          kepala_sekolah: "kepala sekolah",
          nip: "14141241241",
          semester: "Dua",
          tgl_raport: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tahun: "2019-2020",
          status: "Nonactive",
          kepala_sekolah: "kepala sekolah",
          nip: "14141241241",
          semester: "Satu",
          tgl_raport: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tahuns", null, {});
  },
};
