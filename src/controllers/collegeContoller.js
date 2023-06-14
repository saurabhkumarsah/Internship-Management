// import collegeModel from "../models/collegeModel.js"
import axios from 'axios'
import { isValid } from "../util/validator.js"
import internModel from "../models/internModel.js"

export const createCollege = async (req, res) => {
    try {
        if (Object.keys(req.body).length === 0) return res.status(400).json({ status: false, message: "Please, Provide details" })

        let { name, fullName, logoLink } = req.body
        // if (!name) return res.status(400).json({ status: false, message: "Please, Name" })
        if (!isValid(name)) return res.status(400).json({ status: false, message: "Please, Provide Name" })
        // req.body.name = req.body.name.toLowerCase()
        const reqName = await collegeModel.findOne({ name: name })
        if (reqName) return res.status(400).json({ status: false, message: "Name is already exist" })

        if (!isValid(fullName)) return res.status(400).json({ status: false, message: "Please, Name" })
        if (!logoLink) return res.status(400).json({ status: false, message: "Please, Name" })

        await axios.get(logoLink).then(async (response) => {
            if (!isValid(logoLink)) return res.status(400).json({ status: false, message: "Please, Name" })
        }).catch((error) => {
            return res.status(400).json({ status: false, message: "Logo Link is not valid" })
        })

        const data = await collegeModel.create(req.body)
        return res.status(201).json({ status: true, data: data })

    } catch (error) {
        // return res.status(500).send({ status: false, message: "error.message" })
    }

}

export const getCollegeDetails = async (req, res) => {
    try {

        let name = req.query
        if (Object.keys(name).length === 0) return res.status(404).json({ status: false, message: "Please, Provide college name" })
        // if (Object.keys(name).length > 1) return res.status(400).json({ status: false, message: "Please, Provide Only college name" })
        // name.name = name.name.toLowerCase()

        let collegeData = await collegeModel.findOne({ name: name.collegeName }).select({ name: 1, fullName: 1, logoLink: 1 })
        // if (!collegeData) return res.status(404).send({ status: false, message: "Not Found" })

        let internData = await internModel.find({ collegeId: collegeData._id }).select({ name: 1, email: 1, mobile: 1 })

        // const newObj = { ...collegeData._doc }
        // delete newObj._id
        // newObj.interns = internData

        return res.status(200).json({ status: true, data: collegeData })

    } catch (error) {
        // return res.send(500).send({ status: false, message: "error.message" })
    }
}