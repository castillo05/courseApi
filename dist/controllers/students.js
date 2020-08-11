"use strict";

var _models = _interopRequireDefault(require("../models"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createStudents = async (req, res) => {
  const {
    name,
    lastName,
    age,
    email,
    password
  } = req.body;

  _models.default.students.findAll({
    where: {
      email: email
    }
  }).then(student => {
    if (student.length >= 1) return res.status(200).send({
      message: 'Lo sentimos este Email ya esta registrado'
    });
    if (password === '') return res.status(200).send({
      message: 'Introduzca la contraseña'
    });

    _bcrypt.default.hash(password, 10).then(hash => {
      _models.default.students.create({
        name: name,
        lastName: lastName,
        age: age,
        email: email,
        password: hash
      }).then(student => {
        res.status(200).send({
          student: student
        });
      }).catch(error => {
        console.log(error);
      });
    }).catch(error => {
      console.log(error);
    });
  }).catch(error => {
    console.log(error);
  });
};

const login = async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body;
    const students = await _models.default.students.findOne({
      where: {
        email: email
      }
    });

    if (students === null) {
      res.status(200).send({
        message: 'Usuario no existe'
      });
    } else {
      const pass = await _bcrypt.default.compare(password, students.password);

      if (pass) {
        res.status(200).send({
          student: students
        });
      } else {
        res.status(200).send({
          message: 'Contraseña Incorrecta'
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const getstudent = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await _models.default.students.findByPk(id);

    if (student) {
      res.status(200).send({
        student: student
      });
    } else {
      res.status(200).send({
        message: 'Este usuario no existe'
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createStudents,
  login,
  getstudent
};