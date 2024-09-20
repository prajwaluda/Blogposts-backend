import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv  from "dotenv";
import helmet from "helmet";
import morgan from "morgan";


import blogRoutes from "./routes/blogs.js"
//data imports
import Blog from "./models/blogs.js";


const app= express();
dotenv.config();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors()); //some error

app.use("/blog",blogRoutes);

 

const PORT=process.env.PORT|| 9000;
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT,()=>
        console.log(`Listening Server Port ${PORT}`
        ))
    // User.insertMany(dataUser);
    // Product.insertMany(dataProduct);
}).catch((error)=>console.log(`${error} did not connect`));