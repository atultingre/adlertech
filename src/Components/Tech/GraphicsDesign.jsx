import Layout from "../Dashboard/Layout";
import { socialMediaMarketing } from "../Data/social-media-marketing";
import Card from "./Card";

const GraphicsDesign = () => {
  return (
    <Layout>
      <div className="pt-10">
        <h1 className="text-3xl font-semibold text-start mb-5">
          Graphics Design
        </h1>

        <div className="py-5 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {socialMediaMarketing?.map((item, index) => (
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

export default GraphicsDesign;
