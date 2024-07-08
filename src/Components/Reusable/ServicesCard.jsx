import { Link } from "react-router-dom";

const ServicesCard = ({ card }) => {
  return (
    <div
      className={`rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 group p-6 h-50 bg-gradient-to-r ${card?.background} bg-opacity-60 flex flex-col h-full group-hover:bg-opacity-0 transition-all duration-500`}
    >
      <h2 className="text-xl font-semibold text-white mb-2">{card?.title}</h2>
      <p className="text-gray-100 mb-4">{card?.description}</p>
      <div className="flex-grow"></div>
      <Link
        to={card?.path}
        className="bg-white w-full text-center text-gray-800 font-bold py-2 px-4 mt-auto rounded hover:bg-gray-300 hover:text-black transition-colors"
      >
        {card?.buttonText}
      </Link>
    </div>
  );
};

export default ServicesCard;
