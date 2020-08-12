import express from 'express';
import {createCourse,getCourse,getCourses,updateCourse,getCoursesCount,deleteCourse} from '../controllers/courses';

const api=express.Router();

api.post('/course',createCourse);
api.get('/course/:id',getCourse);
api.get('/course',getCourses);
api.put('/course/:id',updateCourse);
api.get('/courselimit',getCoursesCount)
api.delete('/course/:id',deleteCourse)

module.exports =api;

