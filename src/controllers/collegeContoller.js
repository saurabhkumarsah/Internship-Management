import collegeModel from "../models/collegeModel"
import { isValid } from "../util/validator"
import axios from 'axios'

export const createCollege = async (req, res) => {
    try {
        let { name, fullName, logoLink } = req.body
        if (Object.keys(clientData).length === 0) return res.status(400).json({ status: false, message: "Please, Provide details" })
        if (!isValid(name)) return res.status(400).json({ status: false, message: "Please, Name" })
        const reqName = await collegeModel.findOne({ name: name })
        if (!reqName) return res.status(400).json({ status: false, message: "Name is already exist" })
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


// POST / functionup / colleges
// Create a college - a document for each member of the group

// The logo link will be provided to you by the mentors.This link is a s3(Amazon's Simple Service) url. Try accessing the link to see if the link is public or not.

// Endpoint: BASE_URL / functionup / colleges