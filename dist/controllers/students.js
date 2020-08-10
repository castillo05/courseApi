"use strict";

var _models = _interopRequireDefault(require("../models"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createStudents = async () => {
  const {
    name,
    lastName,
    age,
    email,
    password,
    id_course
  } = req.body;

  _models.default.findAll({
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
        password: hash,
        id_course: id_course
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

module.exports = {
  createStudents
};