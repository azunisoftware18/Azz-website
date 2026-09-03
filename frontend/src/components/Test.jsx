import React from "react";

function Test() {
  const testimonials = [
    {
      text: "Azzunique helped us build a professional digital presence that truly represents our brand. The team understood our requirements and delivered exactly what we needed.",
      name: "Arti",
      // role: "Founder & CEO",
      image: "/images/arti.jpg",
    },
    {
      text: "The development team was highly responsive and professional throughout the project. They delivered a clean, user-friendly solution while keeping everything aligned with our business needs.",
      name: "Rahul Saini",    
      image: "/images/rahul.jpg",
    },
    {
      text: "We had a great experience working with Azzunique. Their attention to detail, modern design approach, and technical expertise helped us create a much better digital experience for our customers.",
      name: "Birender",      
      image: "/images/birendar.jpg",
    },
    {
      text: "Azzunique made the entire development process smooth and straightforward. The team was easy to communicate with, understood our vision, and delivered a polished product on time.",
      name: "Kartik kumawat",      
      image: "/images/kartik.jpg",
    },
    {
      text: "What impressed us most was the combination of design quality and functionality. Azzunique created a solution that looks professional and works seamlessly across devices.",
      name: "Shyam Singh",      
      image: "/images/shyam.jpg",
    },
    {
      text: "Working with Azzunique significantly improved our digital workflow. Their team provided the right technical guidance and delivered a reliable solution that supports our business goals.",
      name: "Dr. R. K. Tailor",
      image: "/images/rk.jpg",
    },
  ];

  // Two rows: first 3 testimonials, last 3 testimonials
  const rows = [
    { start: 0, end: 3, className: "animate-scroll" },
    { start: 3, end: 6, className: "animate-scroll-reverse" },
  ];

  // Render a single testimonial card
  const renderCard = (testimonial, index) => (
    <div
      key={index}
      className="bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-6 shrink-0 w-[340px] md:w-[380px] shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Stars */}
      <div className="flex mb-4 gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="#eece00"
            stroke="#eece00"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-star"
            aria-hidden="true"
          >
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
          </svg>
        ))}
      </div>

      {/* Text */}
      <p className="text-neutral-700 text-sm leading-relaxed mb-6 line-clamp-4">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-slate-100"
        />
        <div>
          <p className="font-semibold text-neutral-800 text-sm">
            {testimonial.name}
          </p>
          {/* <p className="text-neutral-500 text-xs">
            {testimonial.role || "Client"}
          </p> */}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
          * {
            font-family: "Geist", sans-serif;
          }

          /* 🔥 FIX: Use 3 copies → move by 1/3 of total width */
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.33%);
            }
          }

          @keyframes scrollReverse {
            0% {
              transform: translateX(-33.33%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-scroll {
            animation: scroll 18s linear infinite;
            will-change: transform;
            backface-visibility: hidden;
            transform-style: preserve-3d;
          }

          .animate-scroll-reverse {
            animation: scrollReverse 18s linear infinite;
            will-change: transform;
            backface-visibility: hidden;
            transform-style: preserve-3d;
          }

          /* Hover pause */
          .animate-scroll:hover,
          .animate-scroll-reverse:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <section className="bg-[#FAFAFA] py-16 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <div className="inline-block bg-neutral-100 border border-neutral-300 rounded-full px-5 py-1.5 mb-4">
              <span className="text-xs font-medium text-neutral-600 tracking-wide">
                Loved by clients
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#0E0A42] mb-3">
              What people are saying
            </h2>
            <p className="text-neutral-500 text-sm max-w-md mx-auto">
              Real feedback from founders, developers, and teams building
              production-ready products.
            </p>
          </div>

          {/* Carousel rows */}
          <div className="space-y-6">
            {rows.map((row, rowIndex) => {
              const slice = testimonials.slice(row.start, row.end);

              // 🔥 3 copies for seamless loop
              const tripled = [...slice, ...slice, ...slice];

              return (
                <div key={rowIndex} className="relative overflow-hidden">
                  {/* Fade gradients */}
                  <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

                  <div className={`flex gap-6 ${row.className}`}>
                    {tripled.map((testimonial, idx) =>
                      renderCard(testimonial, idx),
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Test;
