import { useState } from "react";
import Layout from "../Dashboard/Layout";
import ServicesCard from "../Reusable/ServicesCard";
import { services } from "../Data/services";

const Services = () => {
  const [visibleCards, setVisibleCards] = useState(3);

  return (
    <Layout>
      <div className="py-10">
        <h1 className="text-3xl font-semibold mb-6 text-start">Services</h1>

        <div className="pt-3 grid md:grid-cols-3 w-full gap-4">
          {services?.slice(0, visibleCards).map((card, index) => (
            <ServicesCard card={card} key={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Services;
