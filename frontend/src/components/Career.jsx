import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Career() {
  return (
    <section className="min-h-screen bg-[#0A0A0D] p-2 md:p-4">
      <div className="mx-auto min-h-[calc(100vh-2rem)] max-w-[1700px] px-2 md:px-4">
        <div className="grid min-h-[calc(100vh-3rem)] grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col justify-center py-10 lg:py-16 lg:pr-12">
            {/* Badge */}
            <span className="w-fit rounded-md bg-[#221B63] px-4 py-1 text-sm font-medium text-white">
              Careers
            </span>

            {/* Heading */}
            <h2 className="mt-6 max-w-3xl text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Build your future with Azzunique
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              The next-generation AI, digital and cloud-first partner, we stand
              at the forefront of business evolution.
            </p>

            {/* Button */}
            <Link
              to="/careers"
              className="
                group
                mt-8
                flex
                w-fit
                items-center
                gap-3
                rounded-xl
                bg-white
                px-5
                py-3
                text-base
                font-medium
                text-black
                transition-all
                duration-300
                hover:scale-105
                hover:bg-gray-200
              "
            >
              Explore Careers
              <ArrowUpRight
                size={20}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>
          </div>

          {/* Right Image */}
          <div className="min-h-[450px] overflow-hidden rounded-[34px] lg:min-h-0">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600"
              alt="Careers"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
