import About from "../Pages/About";
import Service from "./Service";
import Blogs from "./Blogs";
import MarqueeDemo from "../Pages/Reviews";
import { Hero } from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <About />
      <Blogs />
      <MarqueeDemo />
    </div>
  );
};

export default Home;
