import express from 'express';
import {createStudents} from '../controllers/students';

const api=express.Router();

api.post('/singup',createStudents);

module.exports =api;

