import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./Components/Dashboard/NavigationBar";
import About from "./Components/Pages/About";
import Services from "./Components/Pages/Services";
import Blog from "./Components/Pages/Blogs";
import Contact from "./Components/Pages/Contact";
import SocialMediaMarketing from "./Components/Tech/SocialMediaMarketing";
import GraphicsDesign from "./Components/Tech/GraphicsDesign";
import WebDevelopment from "./Components/Tech/WebDevelopment";
import Home from "./Components/home/Home";
import NotFound from "./Components/Pages/NotFound";

function App() {
  return (
    <Router>
      <div className="pb-10">
        <NavigationBar />
      </div>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/social-media-marketing"
            element={<SocialMediaMarketing />}
          />
          <Route path="/graphics-design" element={<GraphicsDesign />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/" element={< />} />
          <Route path="/" element={< />} /> */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
