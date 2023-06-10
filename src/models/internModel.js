import mongoose from "mongoose";
const { Schema, model } = mongoose
const ObjectId = mongoose.Types.ObjectId

const internSchema = Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        mobile: {
            type: String,
            require: true,
            unique: true
        },
        collegeId: {
            type: ObjectId,
            ref: "College"
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    }
)

export default model("Intern", internSchema)