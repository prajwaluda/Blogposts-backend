import mongoose from "mongoose";

const Blogschema= new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            min:2,
            max:200,
        },
        body:{
            type:String,
            required:true,
            min:10,
            max:1000,   
        },
        author:{
            type:String,
            required:true,
            min:10,
            max:100,   
        },
    },{timestamps:true}
)

const Blog=mongoose.model("Blogbody",Blogschema);

export default Blog;