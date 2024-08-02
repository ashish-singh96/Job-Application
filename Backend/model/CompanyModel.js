import mongoose from 'mongoose';
const companySchema = new mongoose.Schema({
    name:{
        type:String,
       
    },
    description:{
        type:String,
        
    },
    website:{
        type:String,
       
    },
    location:{
        type:String,
       
    },
    logo:{
        public_id:{
            type:String,
        },
        url:{
            type:String,
        }
    },
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'user',
        
    }
}, {timestamps:true});
const Company = mongoose.model("company", companySchema);
export default Company;