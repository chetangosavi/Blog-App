import { Blog } from "../schemas/blog.Schema.js";

export const create = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.user.id;

    const newBlog = new Blog({ title, description, user: userId });
    await newBlog.save();

    return res
      .status(201)
      .json({ message: "Blog created successfully", newBlog });
  } catch (error) {
    console.error("Error creating blog:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();

    if (blogs.length === 0) {
      return res.status(404).json({ message: "No blogs found" });
    }

    return res
      .status(200)
      .json({ message: "Blogs fetched successfully", blogs });
  } catch (error) {
    console.error("Error fetching blogs:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};



export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blogToDelete = await Blog.findByIdAndDelete(id);

    if (!blogToDelete) {
      return res
        .status(400)
        .json({ message: "Error Deleting Blog or Blog Not Found" });
    }

    return res
      .status(200)
      .json({ message: "Blog Deleted Successfully", blogToDelete });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error Deleting Blog!", error: error.message });
  }
};
