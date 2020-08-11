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

const getCourse = async (req, res) => {
  try {
    const id = req.params.id;
    const getCourse = await _models.default.courses.findByPk(id, {
      include: [{
        model: _models.default.students,
        as: 'students'
      }]
    });

    if (getCourse === null) {
      res.status(200).send({
        message: 'Curso no encontrado'
      });
    } else {
      res.status(200).send({
        course: getCourse
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getCourses = async (req, res) => {
  try {
    const getCourses = await _models.default.courses.findAll();
    getCourses !== null ? res.status(200).send({
      courses: getCourses
    }) : res.status(200).send({
      message: 'No hay cursos disponibles'
    });
  } catch (error) {
    console.log(error);
  }
};

const updateCourse = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      name,
      schedule,
      dateStart,
      dateEnd
    } = req.body;
    const update = await _models.default.courses.update({
      name: name,
      schedule: schedule,
      dateStart: dateStart,
      dateEnd: dateEnd
    }, {
      where: {
        id: id
      }
    });

    if (update) {
      res.status(200).send({
        message: 'Curso actualizado con exito'
      });
    } else {
      res.status(200).send({
        message: 'Lo sentimos este curso no se puede actualizar'
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createCourse,
  getCourse,
  getCourses,
  updateCourse
};