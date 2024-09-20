import Blog from "../models/blogs.js";


export const getBlog = async (req,res)=>{
    try{
        const customers = await Blog.find() 
        res.status(200).json(customers); 
    }catch(error){
        res.status(404).json({message:error.message});
    }
}

export const postBlog = async (req,res) =>{
    try {
        const { title, body, author } = req.body;

        if (!title || !body || !author) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const newBlog = new Blog({
            title,
            body,
            author  
        });

        // Save Blog to database
        await newBlog.save();

        // Send success response
        res.status(201).json({ message: 'Blog added successfully' });
    } catch (error) {
        console.error('Error saving blog:', error);
        res.status(500).json({ error: 'Failed to create blog' });
    }
}