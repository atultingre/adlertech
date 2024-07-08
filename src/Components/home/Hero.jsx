import Meteors from "../magicui/meteors";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="relative flex flex-col h-dvh w-full items-center justify-center overflow-hidden ">
      <Meteors number={30} />
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white"></p>
      <h1 className="px-10 font-light text-2xl md:text-4xl text-center">
        <span className="text-gray-800 font-semibold">AdlerTech</span>: Leading
        The Way In Tech Innovations
      </h1>
      <Link
        to={"/contact"}
        className="w-60 mt-8 mx-auto bg-blue-500 text-white hover:bg-blue-300 hover:text-black font-semibold py-3 px-8 rounded-full text-center shadow-lg transition duration-300"
      >
        Contact us
      </Link>
    </div>
  );
}
