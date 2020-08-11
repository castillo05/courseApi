import express from 'express';

const app= express();

app.use(require('./students'));
app.use(require('./courses'))

module.exports=app;