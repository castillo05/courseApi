"use strict";

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./routes/index"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.urlencoded({
  extended: true
}));
app.use(_express.default.json()); //configurar cabeceras http

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY,Origin,X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
app.get('/api', (req, res) => {
  res.status(200).send({
    message: 'Welcome to Api'
  });
}); //Cargamos una ruta estatica que es la carpeta client

app.use('/', _express.default.static('dist/client', {
  redirect: false
}));
app.use('/api', _index.default);
app.get('*', function (req, res, next) {
  res.sendFile(_path.default.resolve('dist/client/index.html'));
});
module.exports = app;