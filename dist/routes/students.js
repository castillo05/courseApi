"use strict";

var _express = _interopRequireDefault(require("express"));

var _students = require("../controllers/students");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const api = _express.default.Router();

api.post('/singup', _students.createStudents);
api.post('/login', _students.login);
api.get('/student/:id', _students.getstudent);
api.get('/student', _students.getStudents);
api.put('/student/:id', _students.updateStudent);
module.exports = api;