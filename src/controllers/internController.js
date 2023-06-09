import eValidator from 'email-validator'
import collegeModel from "../models/collegeModel.js"
import internModel from "../models/internModel.js"
import { isValid, isValidMN } from "../util/validator.js"

export const createIntern = async (req, res) => {
    try {

        if (Object.keys(req.body).length === 0) return res.status(400).json({ status: false, message: "Please, Provide details" })
        let { name, email, mobile, collegeName } = req.body

        if (!isValid(name)) return res.status(400).json({ status: false, message: "Please, Provide Name" })

        if (!isValid(email)) return res.status(400).json({ status: false, message: "Please, Provide Email" })
        if (!eValidator.validate(email)) return res.status(400).json({ status: false, message: "Invalid Email" })
        const DbEmail = await internModel.findOne({ email: email })
        if (DbEmail) return res.status(400).json({ status: false, message: "Email is already exist" })

        if (!isValid(mobile)) return res.status(400).json({ status: false, message: "Please, Provide Mobile No." })
        if (!isValidMN(mobile)) return res.status(400).json({ status: false, message: "Invalid Mobile Number" })
        const DbMobile = await internModel.findOne({ mobile: mobile })
        if (DbMobile) return res.status(400).json({ status: false, message: "Mobile Number is already exist" })

        if (!isValid(collegeName)) return res.status(400).json({ status: false, message: "Please, Provide College Name" })

        const dbCollegeId = await collegeModel.findOne({ name: collegeName }).select({ _id: 1 })
        if (!dbCollegeId) return res.status(404).json({ status: false, message: "College not found" })

        req.body.collegeId = dbCollegeId._id

        const saveData = await internModel.create(req.body)
        return res.status(201).json({ status: true, data: saveData })

    } catch (error) {
        return res.status(500).json({ status: false, message: error.message })
    }
}












// POST / functionup / interns
// Create a document for an intern.
// Also save the collegeId along with the document.Your request body contains the following fields - { name, mobile, email, collegeName }
// Return HTTP status 201 on a succesful document creation.Also return the document.The response should be a JSON object like this
// Return HTTP status 400 for an invalid request with a response body like this