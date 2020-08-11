"use strict";

var _models = _interopRequireDefault(require("../models"));

require("./courses");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const addCourseStudent = async (req, res) => {
  try {
    const {
      id_student,
      id_course
    } = req.body;
    const addCourse = await _models.default.course_students.create({
      id_course: id_course,
      id_student: id_student
    });

    if (addCourse) {
      const getCourse = await _models.default.courses.findByPk(addCourse.id_course);
      let numbersStudents = getCourse.numbersStudents;
      let sumCourse = numbersStudents + 1;
      const update = await _models.default.courses.update({
        numbersStudents: sumCourse
      }, {
        where: {
          id: id_course
        }
      });
      update ? res.status(200).send({
        message: 'Suscrito con exito'
      }) : res.status(200).send({
        message: 'Error'
      }); // res.status(200).send({suscription:addCourse})
    } else {}
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addCourseStudent
};