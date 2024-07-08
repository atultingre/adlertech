const Card = ({ image, title, description }) => {
  return (
    <div className="p-6 bg-white shadow-lg text-center rounded-lg overflow-hidden border border-black">
      <div className="flex justify-center items-center pb-5">
        <img src={image} alt={title} className=" object-cover h-[100px] " />
      </div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Card;
