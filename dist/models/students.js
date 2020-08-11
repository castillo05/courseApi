"use strict";

module.exports = (sequelize, DataTypes) => {
  const students = sequelize.define('students', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});

  students.associate = function (models) {
    //Asociaciones
    students.belongsToMany(models.courses, {
      through: 'course_students',
      foreignKey: 'id_student'
    });
  };

  return students;
};