"use strict";

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createCourse = async (req, res) => {
  try {
    const {
      name,
      schedule,
      dateStart,
      dateEnd
    } = req.body;
    if (name === '' || schedule === '' || dateStart === '' || dateEnd === '') return res.status(200).send({
      message: 'Complete todos los campos'
    });

    _models.default.courses.create({
      name: name,
      schedule: schedule,
      dateStart: dateStart,
      dateEnd: dateEnd,
      numberStudents: 0
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

const getCoursesCount = async (req, res) => {
  try {
    const getCourses = await _models.default.courses.findAll({
      limit: 3,
      order: [['numbersStudents', 'DESC']]
    });
    getCourses !== null ? res.status(200).send({
      courses: getCourses
    }) : res.status(200).send({
      message: 'No hay cursos disponibles'
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteCourse = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await _models.default.courses.destroy({
      where: {
        id: id
      }
    });

    if (deleted) {
      res.status(200).send({
        message: 'Curso Eliminado'
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
  updateCourse,
  getCoursesCount,
  deleteCourse
};