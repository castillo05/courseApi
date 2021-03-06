"use strict";

module.exports = (sequelize, DataTypes) => {
  const courses = sequelize.define('courses', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    schedule: DataTypes.STRING,
    dateStart: DataTypes.STRING,
    dateEnd: DataTypes.STRING,
    numbersStudents: DataTypes.INTEGER
  }, {});

  courses.associate = function (models) {
    //Asociaciones
    courses.belongsToMany(models.students, {
      through: 'course_students',
      foreignKey: 'id_course'
    });
  };

  return courses;
};