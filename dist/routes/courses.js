"use strict";

var _express = _interopRequireDefault(require("express"));

var _courses = require("../controllers/courses");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const api = _express.default.Router();

api.post('/course', _courses.createCourse);
module.exports = api;