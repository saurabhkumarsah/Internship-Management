import collegeModel from "../models/collegeModel.js"
import axios from 'axios'
import { isValid } from "../util/validator.js"

export const createCollege = async (req, res) => {
    try {
        if (Object.keys(req.body).length === 0) return res.status(400).json({ status: false, message: "Please, Provide details" })

        let { name, fullName, logoLink } = req.body

        if (!isValid(name)) return res.status(400).json({ status: false, message: "Please, Name" })
        const reqName = await collegeModel.findOne({ name: name })
        if (reqName) return res.status(400).json({ status: false, message: "Name is already exist" })

        if (!isValid(fullName)) return res.status(400).json({ status: false, message: "Please, Name" })

        await axios.get(logoLink).then(async (response) => {
            if (!isValid(logoLink)) return res.status(400).json({ status: false, message: "Please, Name" })
        }).catch((error) => {
            return res.status(403).json({ status: false, message: "Logo Link is not valid" })
        })

        const data = await collegeModel.create(req.body)
        return res.status(201).json({ status: true, data: data })

    } catch (error) {
        return res.status(500).json({ status: false, message: error.message })
    }

}

export const getCollegeDetails = async (req, res) => {
    try {
        let name = req.query
        if (Object.keys(name).length === 0) return res.status(400).json({ status: false, message: "Please, Provide college name" })
        const data = await collegeModel.findOne(name)
        if (!data) return res.status(404).send({ status: false, message: "Not Found" })
        return res.status(200).send({ status: true, data: data })
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}
