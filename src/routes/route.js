import express from 'express'
import { createCollege, getCollegeDetails } from '../controllers/collegeContoller.js'
import { createIntern } from '../controllers/internController.js'
export const router = express.Router()

router.get('/test', (req, res) => {
    res.send("hello")
})


router.post('/colleges', createCollege)
router.get('/collegeDetails', getCollegeDetails)

router.post('/interns', createIntern)