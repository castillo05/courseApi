import express from 'express';
import {createStudents,login, getstudent} from '../controllers/students';

const api=express.Router();

api.post('/singup',createStudents);
api.post('/login',login);
api.get('/student/:id',getstudent);

module.exports =api;

