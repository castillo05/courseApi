"use strict";

var _express = _interopRequireDefault(require("express"));

var _course_student = require("../controllers/course_student");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const api = _express.default.Router();

api.post('/course-student', _course_student.addCourseStudent);
module.exports = api;