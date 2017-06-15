'use strict';

import express from 'express'
import student from '../controller/v1/student'

const router = express.Router();

router.get('/getStudent', student.getStudent);
router.post('/addStudent', student.addStudent);
router.post('/updateStudent', student.updateStudent);
router.post('/deleteStudent', student.deleteStudent);

export default router