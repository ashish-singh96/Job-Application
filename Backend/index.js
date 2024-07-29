import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import connectDB from './Utils/Db.js';
import routes from './routes/Routes.js';
import cookieParser from 'cookie-parser';
import {v2 as cloudinary} from 'cloudinary';


const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload({useTempFiles : true}));

dotenv.config();

const port = process.env.PORT || 3000;

connectDB();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

app.use('/', routes);

app.listen(port, ()=>{
    console.log(`Server running on ${port}`);
})
