import React from "react";

function TechStack() {
  const techStacks = [
    // --- Existing ---
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React JS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node JS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Next JS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Express JS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Prisma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    },

    // --- Newly added ---
    {
      name: "Angular",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Vue",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
      name: "HTML 5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },

    // {
    //   name: "WPF",
    //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnet/dotnet-original.svg",
    // }, // .NET as close match

    // {
    //   name: "ASP.NET",
    //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnet/dotnet-original.svg",
    // }, // or 'aspnet'

    {
      name: "iOS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
    },
    {
      name: "Android",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
    },
    {
      name: "React Native",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Xamarin",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg",
    },
    {
      name: "MS SQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "PHP",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    // {
    //   name: "Laravel",
    //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
    // },
    {
      name: "CodeIgniter",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
    },
    {
      name: "C#",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
    {
      name: "Drupal",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg",
    },
    {
      name: "WordPress",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
    },
    // {
    //   name: "Shopify",
    //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg",
    // },
  ];

  // Duplicate array once – we'll render it twice in the JSX
  const duplicated = [...techStacks, ...techStacks];

  return (
    <>
      <style>{`
        .marquee-wrapper {
          overflow: hidden;
          background: white;
          padding: 2.5rem 0;
          position: relative;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
          backface-visibility: hidden;
          transform: translateZ(0);
          animation: marquee-scroll 30s linear infinite;
        }

        .marquee-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin: 0 1rem;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          border: 1px solid #e5e7eb;
          background: #f9fafb;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          white-space: nowrap;
          flex-shrink: 0;
          transition: box-shadow 0.2s, transform 0.2s;
          cursor: default;
        }

        .marquee-item:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transform: scale(1.02);
           
        }

        .marquee-item img {
          width: 2rem;
          height: 2rem;
          display: block;
          flex-shrink: 0;
        }

        .marquee-item span {
          font-weight: 600;
          color: #1f2937;
          font-size: 0.95rem;
        }

        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Fade overlays – using Tailwind-like gradients */
        .marquee-fade-left {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 5rem;
          background: linear-gradient(to right, white, transparent);
          z-index: 10;
          pointer-events: none;
        }

        .marquee-fade-right {
          position: absolute;
          right: 0;
          top: 0;
          height: 100%;
          width: 5rem;
          background: linear-gradient(to left, white, transparent);
          z-index: 10;
          pointer-events: none;
        }

        /* Responsive */
        @media (max-width: 640px) {
          .marquee-item {
            margin: 0 0.5rem;
            padding: 0.5rem 1rem;
          }
          .marquee-item img {
            width: 1.5rem;
            height: 1.5rem;
          }
          .marquee-item span {
            font-size: 0.8rem;
          }
          .marquee-fade-left,
          .marquee-fade-right {
            width: 2.5rem;
          }
        }
      `}</style>

      <section className="marquee-wrapper">
        <div className=" flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-medium text-[#0E0A42] mb-4">Technologies We Work With</h1>
        </div>
        <div className="pt-10 mt-10 marquee-fade-left" />
        <div className="marquee-fade-right" />

        <div className="marquee-track">
          {duplicated.map((tech, index) => (
            <div key={index} className="marquee-item">
              <img src={tech.logo} alt={tech.name} loading="lazy" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default TechStack;
