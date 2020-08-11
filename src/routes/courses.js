import express from 'express';
import {createCourse} from '../controllers/courses';

const api=express.Router();

api.post('/course',createCourse);

module.exports =api;

