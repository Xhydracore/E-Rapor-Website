'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.beforeCreate(user=>{
      user.username = user.username.toUpperCase();
    })
    // associations can be defined here
  };
  return User;
};