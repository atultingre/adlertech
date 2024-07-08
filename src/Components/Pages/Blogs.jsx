import BlogCard from "../Reusable/BlogCard";
import blogs from "../Data/blogs.json";

const Blogs = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold text-start mb-5">Blogs</h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            description={blog.description}
            buttonText={blog.buttonText}
            imageSrc={blog.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
