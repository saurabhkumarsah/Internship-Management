import mongoose from "mongoose";
const { Schema, model } = mongoose
const ObjectId = Schema.Types.ObjectId

const internSchema = Schema(
    {
        name: {
            type: String,
            require: true,
            unique: true
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        mobile: {
            type: String,
            require: true
        },
        collegeId: {
            type: ObjectId,
            ref: "collegeModel"
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    },
    { timestamp: true }
)

export default model("Intern", internSchema)