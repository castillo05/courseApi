import express from 'express';

const app= express();

app.use(require('./students'));
app.use(require('./courses'));
app.use(require('./course_student'));

module.exports=app;