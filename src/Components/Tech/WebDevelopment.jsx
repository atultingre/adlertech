import Layout from "../Dashboard/Layout";
import { webDevelopment } from "../Data/web-development";
import Card from "./Card";

const WebDevelopment = () => {
  return (
    <Layout>
      <div className='pt-10'>
        <h1 className="text-3xl font-semibold text-start mb-5">Web Development</h1>

        <div className="py-5 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {webDevelopment?.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default WebDevelopment;
