import express from 'express'
import { createCollege, getCollegeDetails } from '../controllers/collegeContoller.js'
import { createIntern } from '../controllers/internController.js'
export const router = express.Router()

router.get('/test', (req, res) => {
    res.send("hello")
})

router.post('/create', createCollege)
router.get('/collegeDetails', getCollegeDetails)

router.post('/createIntern', createIntern)


// { name, mobile, email, collegeName }
