"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(require('./students'));
app.use(require('./courses'));
app.use(require('./course_student'));
module.exports = app;