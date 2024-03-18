import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import {connectDB} from './db/index.js';


const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())


app.get('/', (req, res)=> {
    res.send("Hello World");
})


connectDB()
.then(()=> {
    app.listen(process.env.PORT || 8000, ()=> {
        console.log(`Server is running on port:${process.env.PORT}`);
    })
})
.catch((err)=> {
    console.log('MongoDB connection failed');
})