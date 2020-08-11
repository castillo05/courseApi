import express from 'express';
import {createStudents,login, getstudent,getStudents,updateStudent} from '../controllers/students';

const api=express.Router();

api.post('/singup',createStudents);
api.post('/login',login);
api.get('/student/:id',getstudent);
api.get('/student',getStudents);
api.put('/student/:id',updateStudent);

module.exports =api;

