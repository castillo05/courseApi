"use strict";

module.exports = (sequelize, DataTypes) => {
  const course_student = sequelize.define('course_student', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_student: DataTypes.INTEGER,
    id_course: DataTypes.INTEGER
  }, {});
  return course_student;
};