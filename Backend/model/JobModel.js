import mongoose from "mongoose";
const jobSchema = new mongoose.Schema({
    job_overview:{
        type:String,
        required:true,
    },
    job_title:{
        type:String,
        required:true,
    },
    contract_duration:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    positions:{
        type:Number,
        required:true
    },
    job_summary:{type:String, required:true},
    responsibilities:[{type:String}],
    requirements:[{type:String}],
    schedule:[{type:String}],
    supplementalPay:[{type:String}],
    hrEmail:{
        type:String,
        required:true,
    }
})
const Job = mongoose.model('job', jobSchema);
export default Job;