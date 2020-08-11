"use strict";

var _express = _interopRequireDefault(require("express"));

var _students = require("../controllers/students");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const api = _express.default.Router();

api.post('/singup', _students.createStudents);
module.exports = api;