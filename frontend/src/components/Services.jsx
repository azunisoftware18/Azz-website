import React from "react";
import {
  Globe,
  Smartphone,
  Palette,
  Cloud,
  Brain,
  BarChart3,
  Shield,
  Zap,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      name: "Web Development",
      icon: Globe,
      description:
        "Custom websites and web applications built with modern frameworks for speed, scalability, and seamless user experience.",
    },
    {
      name: "Mobile App Development",
      icon: Smartphone,
      description:
        "Native and cross-platform mobile apps for iOS and Android, designed to engage users and drive business growth.",
    },

    // {
    //   name: "UI/UX Design",
    //   icon: Palette,
    //   description: "User-centric design that combines aesthetics with functionality, ensuring intuitive and delightful experiences.",
    // },

    {
      name: "Verification Services",
      icon: Cloud,
      description:
        "Scalable cloud infrastructure, migration, and management services on AWS, Azure, and Google Cloud.",
    },
    {
      name: "School ERP Software",
      icon: Brain,
      description:
        "Intelligent automation, predictive analytics, and custom AI models to unlock new opportunities for your business.",
    },
    {
      name: "Bill & Recharge",
      icon: BarChart3,
      description:
        "Data-driven marketing strategies, SEO, and social media campaigns to boost your online presence and reach.",
    },
    {
      name: "Marketing Services",
      icon: Shield,
      description:
        "Comprehensive security assessments, penetration testing, and compliance solutions to protect your digital assets.",
    },
    {
      name: "IT & Development",
      icon: Zap,
      description:
        "Speed up your websites and applications with advanced caching, CDN integration, and code optimization techniques.",
    },
    {
      name: "Banking & Collection",
      icon: Zap,
      description:
        "Speed up your websites and applications with advanced caching, CDN integration, and code optimization techniques.",
    },
    // {
    //   name: "Finance Software",
    //   icon: Zap,
    //   description:
    //     "Speed up your websites and applications with advanced caching, CDN integration, and code optimization techniques.",
    // },
    // {
    //   name: "Business Software",
    //   icon: Zap,
    //   description:
    //     "Speed up your websites and applications with advanced caching, CDN integration, and code optimization techniques.",
    // },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#f8faff] via-white to-[#f0f4ff] py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-indigo-100 text-indigo-700 rounded-full mb-6">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0E0A42] leading-tight">
            Innovative <span className="text-indigo-600">Services</span> for
            Your Digital Success
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            We deliver end-to-end solutions that empower businesses to thrive in
            the digital age — from strategy and design to development and
            beyond.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl  border border-gray-100 hover:border-indigo-200 hover:-translate-y-1 hover:scale-[1.02] transform transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center text-indigo-600 group-hover:text-white group-hover:from-indigo-500 group-hover:to-purple-600 transition-all duration-300">
                  <Icon size={28} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-semibold text-[#0E0A42] group-hover:text-indigo-600 transition-colors">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative line */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-3/4 transition-all duration-300" />
              </div>
            );
          })}
        </div>

     
        
      </div>
    </section>
  );
}
