"use strict";

var _app = _interopRequireDefault(require("./app"));

var _models = _interopRequireDefault(require("./models"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const port = 9000;

_dotenv.default.config();

(async () => {
  try {
    await _models.default.sequelize.authenticate();

    _app.default.listen(port, () => {
      console.log('Server running ' + port);
    });
  } catch (error) {
    console.log(error);
  }
})();