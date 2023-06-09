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
    }
)

export default model("Intern", internSchema)