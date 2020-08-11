"use strict";

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createCourse = async (req, res) => {
  try {
    const {
      name,
      schedule,
      dateStart,
      dateEnd,
      numberStudents
    } = req.body;

    _models.default.courses.create({
      name: name,
      schedule: schedule,
      dateStart: dateStart,
      dateEnd: dateEnd,
      numberStudents: numberStudents
    }).then(course => {
      res.status(200).send({
        course: course
      });
    }).catch(error => {
      console.log(error);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createCourse
};