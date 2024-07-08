import Marquee from "../magicui/marquee";
import { cn } from "../../lib/utils";
import testimonials from "../Data/testimonials.json";
import Layout from "../Dashboard/Layout";

const firstRow = testimonials;
// const secondRow = testimonials.slice(testimonials.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border border-black p-4",
        "border-gray-950/[.1] border border-black bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="40" height="40" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm text-center">{body}</blockquote>
    </figure>
  );
};

const MarqueeDemo = () => {
  return (
    <Layout>
      <div className="py-10 bg-background">
        <h1 className="text-3xl font-semibold text-start mb-5">
          Client Opinions Matters
        </h1>
        <div className="relative py-5 flex h-full flex-col items-center justify-center overflow-hidden rounded-lg">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </div>
    </Layout>
  );
};

export default MarqueeDemo;
