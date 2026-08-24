import { ArrowUpRight } from "lucide-react";

export default function Career() {
  return (
    <section className="bg-[#0A0A0D] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <span className="inline-block rounded-md bg-[#221B63] px-4 py-1 text-sm font-medium text-white">
              Careers
            </span>

            {/* Heading */}
            <h2 className="mt-8 text-5xl text-white">
              Build your future with Azzunique
            </h2>

            {/* Description */}
            <p className="mt-8 max-w-xl text-lg leading-10 text-gray-300">
              The next-generation AI-first, digital-first, cloud-first partner,
              we stand at the forefront of business evolution.
            </p>

            {/* Button */}
            <button
              className="
                group
                mt-12
                flex
                items-center
                gap-3
                rounded-2xl
                bg-white
                px-5
                py-5
                text-xl
                text-black
                shadow-[0_0_35px_rgba(110,90,255,0.35)]
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_45px_rgba(110,90,255,0.55)]
              "
            >
              Explore Careers
              <ArrowUpRight
                size={24}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </div>

          {/* Right Image */}
          <div className="overflow-hidden rounded-[34px]">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200"
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
