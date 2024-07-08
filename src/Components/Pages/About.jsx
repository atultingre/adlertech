import { lazy, Suspense } from 'react';

// Lazy load the Layout component
const Layout = lazy(() => import('../Dashboard/Layout'));

const About = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <div className="pt-10">
          <h1 className="text-3xl font-semibold text-start mb-5">About Us</h1>
          <div className="py-5 flex flex-col md:flex-row gap-3 md:gap-10 justify-between w-full">
            <div>
              <p className="text-lg mb-4 text-justify">
                Welcome to <strong>AdlerTech</strong>, your trusted partner in the
                digital world. We specialize in providing top-notch services in
                digital marketing, web development, graphic design, and app
                development. Our mission is to empower businesses with
                cutting-edge technology and innovative solutions that drive growth
                and success.
              </p>
              <p className="text-lg mb-4 text-justify">
                At <strong>AdlerTech</strong>, we understand the dynamic nature of
                the digital landscape. Our team of experts is dedicated to staying
                ahead of the curve, constantly exploring new trends and
                technologies to deliver exceptional results for our clients.
                Whether you are looking to enhance your online presence, create a
                stunning website, design captivating graphics, or develop a
                user-friendly app, we have the expertise to make it happen.
              </p>
            </div>
            <img
              loading="lazy"
              src="./herosection.jpeg" // Ensure this image is converted to WebP and optimized
              alt="TechAdler"
              className="md:w-1/2 lg:w-1/3 rounded-lg shadow-lg mb-6"
            />
          </div>
        </div>
      </Layout>
    </Suspense>
  );
};

export default About;
