import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['student', 'recruiter'],
        required: true,
    },
    profile: {
        bio: { tpye: String },
        skills: [{ type: String }],
        resume: {
            public_id: {
                type: String,
            },
            url: {
                type: String,
            }
        },
        resumeOriginalName: { type: String },
        company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
        profilePhoto: {
            public_id: {
                type: String,
            },
            url: {
                type: String,
            }
        },
    }
}, { timestamps: true });
const user = mongoose.model('user', userSchema);
export default user;