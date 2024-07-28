import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import connectDB from './Utils/Db.js';
import routes from './routes/Routes.js';


const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload({useTempFiles : true}));

dotenv.config();

const port = process.env.PORT || 3000;

connectDB();

app.use('/', routes);

app.listen(port, ()=>{
    console.log(`Server running on ${port}`);
})
