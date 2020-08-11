import express from 'express';
import {createCourse,getCourse,getCourses,updateCourse,getCoursesCount} from '../controllers/courses';

const api=express.Router();

api.post('/course',createCourse);
api.get('/course/:id',getCourse);
api.get('/course',getCourses);
api.put('/course/:id',updateCourse);
api.get('/courselimit',getCoursesCount)

module.exports =api;

