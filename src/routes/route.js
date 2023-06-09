import express from 'express'
import { createCollege } from '../controllers/collegeContoller.js'
export const router = express.Router()

router.get('/test', (req, res) => {
    res.send("hello")
})

router.post('/create', createCollege)