const BlogCard = ({ title, description, buttonText, imageSrc }) => {
  return (
    <div className="border border-black bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
      <img
        loading="lazy"
        className="w-full h-40 object-fill object-center"
        src={imageSrc}
        alt={title}
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-gray-900 font-bold text-lg mb-2">{title}</h2>
        <p className="text-gray-700 text-sm flex-grow">{description}</p>
        <button className="mt-3 w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline inline-block self-end">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
