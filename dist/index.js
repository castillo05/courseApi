"use strict";

var _app = _interopRequireDefault(require("./app"));

var _models = _interopRequireDefault(require("./models"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

(async () => {
  try {
    await _models.default.sequelize.authenticate();

    _app.default.listen(3002, () => {
      console.log('Server running ');
    });
  } catch (error) {
    console.log(error);
  }
})();