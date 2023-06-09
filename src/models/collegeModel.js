import mongoose from "mongoose";
const { Schema, model } = mongoose

const collegeModel = Schema(
    {
        name: {
            type: String,
            require: true,
            unique: true
        },
        fullName: {
            type: String,
            require: true
        },
        logoLink: {
            type: String,
            require: true
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

export default model("College", collegeModel)