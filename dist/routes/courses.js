"use strict";

var _express = _interopRequireDefault(require("express"));

var _courses = require("../controllers/courses");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const api = _express.default.Router();

api.post('/course', _courses.createCourse);
api.get('/course/:id', _courses.getCourse);
api.get('/course', _courses.getCourses);
api.put('/course/:id', _courses.updateCourse);
module.exports = api;