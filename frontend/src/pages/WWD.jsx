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
} from "lucide-react";
import Header from "../components/Header/Header";

function WWD() {
  const services = [
    {
      icon: <Globe size={42} />,
      title: "Website Development",
      description:
        "Modern, responsive, and SEO-friendly websites built for businesses and startups.",
    },
    {
      icon: <Smartphone size={42} />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for Android and iOS.",
    },
    {
      icon: <ShoppingCart size={42} />,
      title: "E-Commerce Solutions",
      description:
        "Complete online store development with payment gateway integration.",
    },
    {
      icon: <Database size={42} />,
      title: "CRM & ERP Systems",
      description:
        "Custom management systems that streamline business operations.",
    },
    {
      icon: <Palette size={42} />,
      title: "UI / UX Design",
      description:
        "Beautiful and user-friendly interfaces focused on customer experience.",
    },
    {
      icon: <Cloud size={42} />,
      title: "Cloud & DevOps",
      description:
        "Deployment, automation, hosting, and cloud infrastructure solutions.",
    },
    {
      icon: <Code2 size={42} />,
      title: "Custom Software",
      description:
        "Tailor-made software solutions designed specifically for your business.",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0E0A42] via-[#1B0A42] to-[#30206B] py-32">

        <div className="absolute -left-32 top-10 w-96 h-96 rounded-full bg-blue-500/20 blur-[120px] animate-pulse"></div>

        <div className="absolute right-0 bottom-0 w-[450px] h-[450px] rounded-full bg-purple-500/20 blur-[120px] animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">

          <span className="px-5 py-2 rounded-full bg-white/10 text-white">
            Digital Solutions Company
          </span>

          <h1 className="text-6xl lg:text-8xl font-bold text-white mt-8">
            What We Do
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-gray-300 mt-8 leading-9">
            We empower businesses with innovative digital products,
            scalable technologies, and exceptional user experiences.
            From websites to enterprise software, we transform ideas
            into reality.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-full bg-white text-[#1B0A42] font-semibold hover:scale-105 duration-300"
          >
            Let's Work Together
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* About */}

      <section className="py-24 bg-[#F8FAFC]">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold text-[#0E0A42]">
            Helping Businesses Grow Digitally
          </h2>

          <p className="mt-8 text-gray-600 text-lg leading-9 max-w-4xl mx-auto">
            Our company specializes in delivering high-quality software
            development services tailored to startups, enterprises,
            and growing businesses. We combine creativity,
            technology, and strategy to build products that drive
            measurable success.
          </p>
        </div>
      </section>

      {/* Services Grid */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-[#0E0A42]">
              Our Services
            </h2>

            <p className="mt-5 text-gray-600 text-lg">
              Everything your business needs under one roof.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-10 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#EEF3FA] flex items-center justify-center text-[#1B0A42] group-hover:rotate-12 transition duration-500">
                  {service.icon}
                </div>

                <h3 className="text-3xl font-bold text-[#0E0A42] mt-8">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-8 mt-5">
                  {service.description}
                </p>

                <button className="mt-8 flex items-center gap-2 text-[#1B0A42] font-semibold group-hover:gap-4 transition-all">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}

      <section className="bg-[#EEF3FA] py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <h2 className="text-5xl font-bold text-[#0E0A42]">
                Why Businesses Choose Us
              </h2>

              <p className="mt-8 text-gray-600 leading-9 text-lg">
                We don't just build software—we create scalable
                digital ecosystems that help businesses improve
                efficiency, engage customers, and increase revenue.
              </p>

              <ul className="space-y-5 mt-10">

                <li> Experienced Development Team</li>

                <li> Modern Technologies & Frameworks</li>

                <li> Agile Development Process</li>
                <li> Dedicated Support & Maintenance</li>

                <li>SEO & Performance Optimized Solutions</li>

                <li>Enterprise Grade Security</li>

              </ul>
            </div>

            <div>

              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
                alt="Team"
                className="rounded-[40px] shadow-2xl hover:scale-105 transition duration-700"
              />

            </div>

          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-28 bg-[#0E0A42] text-center">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-5xl lg:text-6xl font-bold text-white">
            Ready to Build Something Amazing?
          </h2>

          <p className="mt-8 text-gray-300 text-xl leading-9">
            Let's discuss your project and create a solution that
            accelerates your business growth.
          </p>

          <Link
            to="/contact"
            className="inline-flex mt-10 px-10 py-5 rounded-full bg-white text-[#0E0A42] font-semibold hover:scale-105 transition duration-300"
          >
            Get Started Today
          </Link>

        </div>
      </section>
    </>
  );
}

export default WWD;
