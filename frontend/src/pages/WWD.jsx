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
      <section className="relative overflow-hidden bg-white py-28 lg:py-36">
        {/* Subtle background blobs (same as before, but cleaned) */}
        <div className="absolute -left-32 top-10 w-96 h-96 rounded-full bg-blue-500/10 blur-[140px]"></div>
        <div className="absolute right-0 bottom-0 w-[450px] h-[450px] rounded-full bg-purple-500/10 blur-[140px]"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#0E0A42] leading-tight">
            What We Do
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-700 mt-6 leading-relaxed">
            We empower businesses with innovative digital products, scalable
            technologies, and exceptional user experiences. From websites to
            enterprise software, we transform ideas into reality.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-10 px-10 py-4 rounded-full bg-[#0E0A42] text-white font-semibold hover:bg-[#1a1b55] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Let's Work Together
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* ===== ABOUT BLURB ===== */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0E0A42]">
            Helping Businesses Grow Digitally
          </h2>
          <p className="mt-6 text-gray-600 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            Our company specializes in delivering high-quality software
            development services tailored to startups, enterprises, and growing
            businesses. We combine creativity, technology, and strategy to build
            products that drive measurable success.
          </p>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0E0A42]">
              We Offer a Wide Variety of IT Services
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Everything your business needs under one roof.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-blue-100"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#EEF3FA] flex items-center justify-center text-[#0E0A42] group-hover:bg-[#0E0A42] group-hover:text-white transition-colors duration-300 group-hover:rotate-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0E0A42] mt-6">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mt-4">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-[#0E0A42] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn More</span>
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-24 bg-[#EEF3FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0E0A42]">
                Why Businesses Choose Us
              </h2>
              <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                We don't just build software—we create scalable digital
                ecosystems that help businesses improve efficiency, engage
                customers, and increase revenue.
              </p>
              <ul className="space-y-4 mt-10">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle
                      size={22}
                      className="text-[#0E0A42] flex-shrink-0 mt-1"
                    />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
                alt="Team collaboration"
                className="rounded-[40px] shadow-2xl hover:scale-105 transition duration-700 object-cover w-full h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-28 bg-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-[#0E0A42]">
            Ready to Build Something Amazing?
          </h2>
          <p className="mt-6 text-gray-700 text-xl leading-relaxed max-w-2xl mx-auto">
            Let's discuss your project and create a solution that accelerates
            your business growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex mt-10 px-12 py-5 rounded-full bg-[#0E0A42] text-white font-semibold hover:bg-[#1a1b55] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
}

export default WWD;