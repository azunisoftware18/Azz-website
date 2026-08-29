import React from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Code2,
  Palette,
  Cloud,
  Database,
  ArrowRight,
  GraduationCap,
  CreditCard,
  Megaphone,
  Building2,
  Landmark,
  Briefcase,
  CheckCircle,
} from "lucide-react";
import Header from "../components/Header/Header";

function WWD() {
  const services = [
    {
      icon: <Globe size={40} />,
      title: "Website Development",
      description:
        "Modern, responsive, and SEO-friendly websites built for businesses and startups.",
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for Android and iOS.",
    },
    {
      icon: <ShoppingCart size={40} />,
      title: "E-Commerce Solutions",
      description:
        "Complete online store development with payment gateway integration.",
    },
    {
      icon: <Database size={40} />,
      title: "CRM & ERP Systems",
      description:
        "Custom management systems that streamline business operations.",
    },
    {
      icon: <Palette size={40} />,
      title: "UI / UX Design",
      description:
        "Beautiful and user-friendly interfaces focused on customer experience.",
    },
    {
      icon: <Cloud size={40} />,
      title: "Verification Services",
      description:
        "Deployment, automation, hosting, and cloud infrastructure solutions.",
    },
    {
      icon: <GraduationCap size={40} />,
      title: "School ERP Software",
      description:
        "Comprehensive ERP solutions tailored for educational institutions.",
    },
    {
      icon: <CreditCard size={40} />,
      title: "Bill & Recharge",
      description:
        "Streamlined billing and recharge systems for utilities and services.",
    },
    {
      icon: <Megaphone size={40} />,
      title: "Marketing Services",
      description:
        "Digital marketing strategies to boost brand visibility and engagement.",
    },
    {
      icon: <Code2 size={40} />,
      title: "IT & Development",
      description:
        "End‑to‑end IT consulting and custom software development services.",
    },
    {
      icon: <Landmark size={40} />,
      title: "Banking & Collection",
      description:
        "Secure banking and automated collection systems for financial institutions.",
    },
    {
      icon: <Briefcase size={40} />,
      title: "Finance Software",
      description:
        "Robust financial management and accounting software solutions.",
    },
    {
      icon: <Building2 size={40} />,
      title: "Business Software",
      description:
        "Tailor‑made business software to optimise operations and productivity.",
    },
  ];

  const benefits = [
    "Experienced Development Team",
    "Modern Technologies & Frameworks",
    "Agile Development Process",
    "Dedicated Support & Maintenance",
    "SEO & Performance Optimized Solutions",
    "Enterprise Grade Security",
  ];


return (
  <>
    <Header />

    {/* ===== HERO ===== */}
    <section className="relative overflow-hidden bg-[#f3f4fb] py-28 lg:py-36">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#3557ff]/10 blur-[140px]" />
        <div className="absolute -right-20 bottom-0 h-[450px] w-[450px] rounded-full bg-[#10154d]/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#3557ff]" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#3557ff]">
            WHAT WE DO
          </span>
          <span className="h-px w-10 bg-[#3557ff]" />
        </div>

        <h1 className="text-5xl font-light leading-tight tracking-tight text-[#10154d] sm:text-6xl md:text-7xl lg:text-8xl">
          What We{" "}
          <span className="font-medium text-[#3557ff]">Do</span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#3c3c3c] sm:text-xl md:text-2xl">
          We empower businesses with innovative digital products, scalable
          technologies, and exceptional user experiences. From websites to
          enterprise software, we transform ideas into reality.
        </p>

        <Link
          to="/contact"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#10154d] px-10 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#3557ff] hover:shadow-xl"
        >
          Let's Work Together

          <ArrowRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>

    {/* ===== ABOUT BLURB ===== */}
    <section className="relative overflow-hidden bg-[#f5f5f5] py-20 lg:py-24">
      {/* Background Decoration */}
      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#3557ff]/5 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#10154d]/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#3557ff]" />

          <span className="text-xs font-semibold tracking-[0.2em] text-[#3557ff]">
            OUR EXPERTISE
          </span>

          <span className="h-px w-8 bg-[#3557ff]" />
        </div>

        <h2 className="text-4xl font-light tracking-tight text-[#10154d] sm:text-5xl md:text-6xl">
          Helping Businesses{" "}
          <span className="font-medium text-[#3557ff]">Grow Digitally</span>
        </h2>

        <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-[#3c3c3c] md:text-xl">
          Our company specializes in delivering high-quality software
          development services tailored to startups, enterprises, and growing
          businesses. We combine creativity, technology, and strategy to build
          products that drive measurable success.
        </p>
      </div>
    </section>

    {/* ===== SERVICES GRID ===== */}
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#3557ff]" />

            <span className="text-xs font-semibold tracking-[0.2em] text-[#3557ff]">
              OUR SERVICES
            </span>

            <span className="h-px w-10 bg-[#3557ff]" />
          </div>

          <h2 className="text-4xl font-light tracking-tight text-[#10154d] sm:text-5xl md:text-6xl">
            We Offer a Wide Variety of{" "}
            <span className="font-medium text-[#3557ff]">IT Services</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-[#3c3c3c]">
            Everything your business needs under one roof.
          </p>
        </div>

        {/* Services */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[2rem] border border-[#10154d]/10 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#3557ff]/30 hover:shadow-[0_25px_60px_rgba(16,21,77,0.12)]"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3557ff]/0 via-transparent to-[#3557ff]/0 opacity-0 transition-opacity duration-500 group-hover:from-[#3557ff]/5 group-hover:to-[#3557ff]/10 group-hover:opacity-100" />

              {/* Icon */}
              <div className="relative flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f3f4fb] text-[#3557ff] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#3557ff] group-hover:text-white">
                  {service.icon}
                </div>

                {/* Arrow */}
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#10154d]/10 text-[#10154d] transition-all duration-500 group-hover:border-[#3557ff] group-hover:bg-[#3557ff] group-hover:text-white">
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-500 group-hover:translate-x-1"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative mt-8">
                <h3 className="text-2xl font-medium tracking-tight text-[#10154d] transition-colors duration-300 group-hover:text-[#3557ff]">
                  {service.title}
                </h3>

                <div className="mt-5 h-px w-12 bg-[#3557ff] transition-all duration-500 group-hover:w-full" />

                <p className="mt-5 leading-8 text-[#3c3c3c]">
                  {service.description}
                </p>
              </div>

              {/* Learn More */}
              <div className="relative mt-7 flex items-center text-sm font-medium text-[#3557ff] opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span>Learn More</span>

                <ArrowRight
                  size={17}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ===== WHY CHOOSE US ===== */}
    <section className="relative overflow-hidden bg-[#e8edf6] py-24 lg:py-28">
      {/* Background Decoration */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#3557ff]/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#10154d]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#3557ff]" />

              <span className="text-xs font-semibold tracking-[0.2em] text-[#3557ff]">
                WHY CHOOSE US
              </span>
            </div>

            <h2 className="text-4xl font-light tracking-tight text-[#10154d] sm:text-5xl md:text-6xl">
              Why Businesses{" "}
              <span className="font-medium text-[#3557ff]">Choose Us</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#3c3c3c]">
              We don't just build software—we create scalable digital
              ecosystems that help businesses improve efficiency, engage
              customers, and increase revenue.
            </p>

            <ul className="mt-10 space-y-5">
              {benefits.map((item, idx) => (
                <li
                  key={idx}
                  className="group flex items-start gap-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#3557ff] shadow-sm transition-all duration-300 group-hover:bg-[#3557ff] group-hover:text-white">
                    <CheckCircle size={20} />
                  </span>

                  <span className="pt-1 text-lg text-[#3c3c3c] transition-colors duration-300 group-hover:text-[#10154d]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="group relative">
            <div className="absolute -inset-3 rounded-[44px] bg-[#3557ff]/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white p-2 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
                alt="Team collaboration"
                className="h-[400px] w-full rounded-[1.5rem] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-2 rounded-[1.5rem] bg-gradient-to-t from-[#10154d]/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ===== CTA ===== */}
    <section className="relative overflow-hidden bg-[#10154d] py-28 text-center">
      {/* Decorative Elements */}
      <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#3557ff]/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#3557ff]/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#7f96ff]" />

          <span className="text-xs font-semibold tracking-[0.25em] text-[#9eafff]">
            LET'S BUILD TOGETHER
          </span>

          <span className="h-px w-10 bg-[#7f96ff]" />
        </div>

        <h2 className="text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Ready to Build Something{" "}
          <span className="font-medium text-[#7f96ff]">Amazing?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
          Let's discuss your project and create a solution that accelerates
          your business growth.
        </p>

        <Link
          to="/contact"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#3557ff] px-12 py-5 font-semibold text-white shadow-[0_12px_40px_-8px_rgba(53,87,255,0.5)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#10154d]"
        >
          Get Started Today

          <ArrowRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  </>
);
};

export default WWD;
