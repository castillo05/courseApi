import express from 'express';
import {addCourseStudent} from '../controllers/course_student';

const api=express.Router();

api.post('/course-student',addCourseStudent);

module.exports =api;

