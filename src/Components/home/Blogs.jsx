import { useState } from "react";
import blogs from "../Data/blogs.json";
import BlogCard from "../Reusable/BlogCard";
import Layout from "../Dashboard/Layout";
const Blogs = () => {
  const [visibleCards, setVisibleCards] = useState(3);

  return (
    <Layout>
      <div className="py-10">
        <h1 className="text-3xl font-semibold text-start mb-5">Blogs</h1>

        <div className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs?.slice(0, visibleCards).map((blog, index) => (
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
    </Layout>
  );
};

export default Blogs;
