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
      res.status(200).send({
        suscription: addCourse
      });
    } else {}
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addCourseStudent
};