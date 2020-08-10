import express from 'express';
import {createStudents} from '../controllers/students';

const api=express.Router();

api.get('login',createStudents);

module.exports =api;

