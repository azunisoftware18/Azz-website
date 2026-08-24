import { useRef, useState } from "react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MdArrowOutward } from "react-icons/md";
import TechStack from "../components/TechStack";
import Test from "../components/Test";
import Services from "../components/Services";
import Career from "../components/Career";
import TiltCard from "../components/TiltCard.jsx";
import Header from "../components/Header/Header.jsx";

const slides = [
  {
    id: 1,
    title:
      "Infosys is the Fastest Growing IT Services Brand Globally with a CAGR of 15% in Brand Value",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
  },
  {
    id: 2,
    title:
      "Artificial Intelligence is Reshaping the Future of Enterprise Solutions",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
  },
  {
    id: 3,
    title: "Cloud Technologies Continue to Accelerate Digital Transformation",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200",
  },
  {
    id: 4,
    title:
      "The Rise of Modern Software Engineering Practices Across Industries",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
  },
  {
    id: 5,
    title: "Technology Brands Experience Record Growth in Global Rankings",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200",
  },
  {
    id: 6,
    title:
      "Innovation Drives New Opportunities for Digital Businesses Worldwide",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200",
  },
];

const cards = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1747134392471-831ea9a48e1e?q=80&w=2000&auto=format&fit=crop",
    title: "Interactive City Card",
    description:
      "Move your cursor over this card to experience a smooth 3D tilt animation.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    title: "Mountain View",
    description: "A beautiful mountain landscape with a tilt animation.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200",
    title: "Technology",
    description: "Modern workspace with immersive interaction.",
  },
];

function Home() {
  const swiperRef = useRef(null);
  const [current, setCurrent] = useState(1);

  return (
    <>
      <Header videoSrc="https://www.infosys.com//content/dam/infosys-web/en/hero-video/leon-navigate-ai.mp4" />

      {/* Top Stories */}
      <section className="bg-[#d9dde8] py-12 overflow-hidden">
        <div className="max-w-[1700px] mx-auto">
          {/* Heading */}
          <div className="flex justify-between items-center px-8 lg:px-16 mb-12">
            <h2 className="text-sm md:text-xl font-semibold tracking-wide text-[#0E0A42]">
              TOP STORIES
            </h2>

            <div className="flex items-center gap-4">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-11 h-10 rounded-xl border border-[#1a1b55] flex items-center justify-center hover:bg-white transition"
              >
                <ChevronLeft size={15} />
              </button>

              <span className="text-sm md:text-lg text-[#1a1b55]">
                {current} / {slides.length}
              </span>

              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-11 h-10 rounded-xl border border-[#1a1b55] flex items-center justify-center hover:bg-white transition"
              >
                <ChevronRight size={15} />
              </button>
            </div>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Navigation]}
            centeredSlides
            loop
            spaceBetween={30}
            slidesPerView={1.15}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
              },
              768: {
                slidesPerView: 1.35,
              },
              1024: {
                slidesPerView: 1.55,
              },
              1440: {
                slidesPerView: 1.7,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setCurrent(swiper.realIndex + 1);
            }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                {({ isActive }) => (
                  <div
                    className={`rounded-[30px] overflow-hidden bg-[#eef0f5] transition-all duration-500 ${
                      isActive ? "scale-100 opacity-100" : "scale-95 opacity-70"
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-[38%]">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full min-h-[340px] object-cover"
                        />
                      </div>

                      <div className="flex-1 p-8 lg:p-14 flex flex-col justify-center">
                        <h3 className="text-2xl lg:text-4xl font-medium text-[#0E0A42]">
                          {slide.title}
                        </h3>

                        <button className="group relative mt-10 inline-block w-fit text-lg font-medium text-[#0E0A42]">
                          Read More
                          <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-current scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <TechStack />
      <Test />
      <Services />
      <Career />
    </>
  );
}

export default Home;
