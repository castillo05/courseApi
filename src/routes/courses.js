import express from 'express';
import {createCourse,getCourse} from '../controllers/courses';

const api=express.Router();

api.post('/course',createCourse);
api.get('/course/:id',getCourse);

module.exports =api;

