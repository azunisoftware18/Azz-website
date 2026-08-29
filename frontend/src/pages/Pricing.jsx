import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import { ArrowUpRight } from "lucide-react";

function Pricing() {
  const [service, setService] = useState("website");

  const services = [
    { id: "website", label: "Website" },
    { id: "mobile", label: "Mobile App" },
    { id: "softwaresolutions", label: "Software Solutions" },
    { id: "digitalmarketing", label: "Digital Marketing" },
  ];

  const pricingData = {
    website: [
      {
        title: "Basic",
        price: "₹4,999",
        features: [
          "5 Pages Website",
          "Responsive Design",
          "Contact Form",
          "Basic SEO",
        ],
      },
      {
        title: "Professional",
        price: "₹19,999",
        features: [
          "15 Pages Website",
          "CMS Integration",
          "Advanced SEO",
          "Analytics",
        ],
      },
    ],

    mobile: [
      {
        title: "Basic",
        price: "₹25,000",
        features: [
          "Android or iOS",
          "User Authentication",
          "Basic API Integration",
          "Responsive UI",
        ],
      },
      {
        title: "Professional",
        price: "₹45,000",
        features: [
          "Android + iOS",
          "Payment Gateway",
          "Admin Dashboard",
          "Push Notifications",
        ],
      },
    ],

    softwaresolutions: [
      {
        title: "Starter",
        price: "₹50,000",
        features: [
          "Product Catalog",
          "Cart & Checkout",
          "Payment Gateway",
          "Order Tracking",
        ],
      },
      {
        title: "Advanced",
        price: "₹99,000",
        features: ["Multi Vendor", "Inventory", "Coupons", "Reports"],
      },
    ],

    digitalmarketing: [
      {
        title: "Starter",
        price: "₹4,999",
        features: [
          "Lead Management",
          "Dashboard",
          "Reports",
          "Role Management",
        ],
      },
      {
        title: "Business",
        price: "₹15,999",
        features: ["Automation", "Workflow", "Analytics", "Multi-user"],
      },
    ],
  };

  const faqs = [
    {
      question: "What features are included in each plan?",
      answer:
        "Each plan includes core workflow tools, analytics, and customer support, with higher tiers unlocking more automation, advanced reporting and collaboration features.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can start with a free trial to explore the platform before choosing a paid plan.",
    },
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer:
        "Yes, you can switch plans whenever your needs change and the update will reflect directly in your billing cycle.",
    },
    {
      question: "Which payment methods are supported?",
      answer:
        "We support major credit and debit cards, along with common online payment options depending on your region.",
    },
    {
      question: "Is my data safe and protected?",
      answer:
        "Your data is protected with secure infrastructure, encrypted connections and regular reliability and security monitoring.",
    },
    {
      question: "Can I connect this platform with other tools?",
      answer:
        "Yes, the platform supports integrations with popular apps so you can connect your existing workflows without extra hassle.",
    },
    {
      question: "Does the platform support team collaboration?",
      answer:
        "Yes, team members can collaborate through shared access, organized workflows and role-based permissions.",
    },
    {
      question: "What makes your platform different?",
      answer:
        "Our platform focuses on simplicity, speed and scalable tools so teams can launch faster and manage work more efficiently.",
    },
  ];
  const mid = Math.ceil(faqs.length / 2);
  const columns = [faqs.slice(0, mid), faqs.slice(mid)];

  // Then access it
  const plans = pricingData[service];

  return (
    <>
      <Header />

      {/* =========================================================
        PRICING SECTION
    ========================================================= */}
      <section className="relative overflow-hidden bg-[#f3f4fb] py-20 lg:py-32">
        {/* Background Decoration */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#3557ff]/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#10154d]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          {/* ================= HEADER ================= */}
          <div className="mb-14 lg:mb-20 grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* Heading */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#3557ff]" />

                <span className="text-xs font-semibold tracking-[0.25em] text-[#3557ff] sm:text-sm">
                  PRICING
                </span>
              </div>

              <h2 className="text-5xl font-light leading-[0.95] tracking-tight text-[#10154d] sm:text-6xl lg:text-7xl">
                Plans That
                <span className="block font-medium text-[#3557ff]">
                  Fit Your Needs.
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="lg:pb-2">
              <p className="max-w-2xl text-lg leading-[1.8] text-[#222] sm:text-xl lg:text-[21px]">
                Flexible pricing plans designed to support businesses at every
                stage. Choose the service that fits your requirements and scale
                with confidence as your business grows.
              </p>
            </div>
          </div>

          {/* ================= SERVICE FILTER ================= */}
          <div className="mb-14 flex flex-wrap gap-3 lg:mb-16">
            {services.map((item) => (
              <button
                key={item.id}
                onClick={() => setService(item.id)}
                className={`rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  service === item.id
                    ? "border-[#10154d] bg-[#10154d] text-white shadow-lg shadow-[#10154d]/15"
                    : "border-[#10154d]/10 bg-white text-[#10154d] hover:border-[#3557ff]/30 hover:bg-[#3557ff] hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* ================= PRICING CARDS ================= */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="group relative flex min-h-[500px] flex-col overflow-hidden rounded-[2rem] border border-[#10154d]/10 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#3557ff]/30 hover:shadow-[0_25px_60px_rgba(16,21,77,0.12)] sm:p-9 lg:p-10"
              >
                {/* Hover Gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#3557ff]/0 via-transparent to-[#3557ff]/0 opacity-0 transition-opacity duration-500 group-hover:from-[#3557ff]/5 group-hover:to-[#3557ff]/10 group-hover:opacity-100" />

                {/* Top */}
                <div className="relative flex items-start justify-between gap-5">
                  <div>
                    <span className="text-xs font-semibold tracking-[0.2em] text-[#3557ff]">
                      {index === 0
                        ? "STARTER"
                        : index === 1
                          ? "PROFESSIONAL"
                          : "ADVANCED"}
                    </span>

                    <h3 className="mt-4 text-2xl font-medium tracking-tight text-[#10154d] sm:text-3xl">
                      {plan.title}
                    </h3>
                  </div>

                  {/* Number */}
                  {/* <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#10154d]/10 bg-[#f3f4fb] text-sm font-medium text-[#10154d] transition-all duration-500 group-hover:border-[#3557ff] group-hover:bg-[#3557ff] group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div> */}
                </div>

                {/* Price */}
                <div className="relative mt-10">
                  <div className="text-4xl font-semibold tracking-tight text-[#10154d] sm:text-5xl">
                    {plan.price}
                  </div>

                  {/* <div className="mt-5 h-px w-12 bg-[#3557ff] transition-all duration-500 group-hover:w-full" /> */}
                </div>

                {/* Features */}
                <div className="relative mt-8 flex-1">
                  <p className="mb-5 text-xs font-semibold tracking-[0.18em] text-[#3557ff]">
                    WHAT'S INCLUDED
                  </p>

                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-[#10154d]/70 transition-colors duration-300 group-hover:text-[#10154d]"
                      >
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f0f3ff] text-xs font-bold text-[#3557ff]">
                          ✓
                        </span>

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  to="/contact"
                  state={{ service }}
                  className="group/btn relative mt-10 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl border border-[#10154d]/10 bg-[#f3f4fb] py-4 text-sm font-semibold text-[#10154d] transition-all duration-300 hover:border-[#3557ff] hover:bg-[#3557ff] hover:text-white"
                >
                  <span className="relative">Contact Us</span>

                  <ArrowUpRight
                    size={18}
                    className="relative transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                  />
                </Link>
              </div>
            ))}

            {/* =====================================================
              ENTERPRISE CARD
          ===================================================== */}
            <div className="group relative flex min-h-[500px] flex-col overflow-hidden rounded-[2rem] bg-[#fafafa] p-7 text-[#10154d] shadow-[0_20px_60px_rgba(16,21,77,0.20)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(16,21,77,0.30)] sm:p-9 lg:p-10">
              {/* Decorative Circles */}
              {/* <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-125" /> */}

              <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />

              {/* Top */}
              <div className="relative flex items-start justify-between gap-5">
                <div>
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#10154d]">
                    FOR ENTERPRISE
                  </span>

                  <h3 className="mt-4 text-2xl font-medium sm:text-3xl">
                    Enterprise
                  </h3>
                </div>

                {/* <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-medium backdrop-blur-md transition-all duration-500 group-hover:rotate-3 group-hover:bg-[#3557ff] group-hover:border-[#3557ff]">
                  04
                </div> */}
              </div>

              {/* Price */}
              <div className="relative mt-10">
                <div className="text-4xl font-semibold tracking-tight sm:text-5xl">
                  Custom
                </div>

                <div className="mt-5 h-px w-12 bg-[#7f96ff] transition-all duration-500 group-hover:w-full" />
              </div>

              {/* Description */}
              <p className="relative mt-7 text-sm leading-7 text-[#10154d]">
                Tailored technology solutions, dedicated resources and
                enterprise-grade support designed around your business needs.
              </p>

              {/* Features */}
              <div className="relative mt-8 flex-1">
                <p className="mb-5 text-xs font-semibold tracking-[0.18em] text-[#10154d]">
                  WHAT'S INCLUDED
                </p>

                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm text-[#10154d]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-xs">
                      ✓
                    </span>
                    Unlimited Features
                  </li>

                  <li className="flex items-center gap-3 text-sm text-[#10154d]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-xs">
                      ✓
                    </span>
                    Dedicated Team
                  </li>

                  <li className="flex items-center gap-3 text-sm text-[#10154d]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-xs">
                      ✓
                    </span>
                    Priority Support
                  </li>

                  <li className="flex items-center gap-3 text-sm text-[#10154d]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-xs">
                      ✓
                    </span>
                    Scalable Architecture
                  </li>

                  <li className="flex items-center gap-3 text-sm text-[#10154d]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-xs">
                      ✓
                    </span>
                    SLA & Maintenance
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <Link
                to="/contact"
                state={{ service }}
                className="group/btn relative mt-10 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl border border-white/20 bg-gray-200 py-4 text-sm font-semibold text-[#10154d] transition-all duration-300"
              >
                <span className="absolute inset-0 -translate-x-full bg-[#3557ff] transition-transform duration-500 group-hover/btn:translate-x-0" />

                <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-white">
                  Contact Us
                </span>

                <ArrowUpRight
                  size={18}
                  className="relative z-10 transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:text-white"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
        FAQ SECTION
    ========================================================= */}
      <section className="relative overflow-hidden bg-[#f5f5f5] px-6 py-20 lg:py-28">
        {/* Background Decoration */}
        <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[#10154d]/5 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#3557ff]/5 blur-3xl" />

        <div className="relative mx-auto w-full max-w-5xl">
          {/* FAQ Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-20">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#3557ff]" />

              <span className="text-xs font-semibold tracking-[0.25em] text-[#3557ff] sm:text-sm">
                FAQ
              </span>

              <span className="h-px w-8 bg-[#3557ff]" />
            </div>

            <h2 className="text-4xl font-light tracking-tight text-[#10154d] sm:text-5xl lg:text-6xl">
              Frequently Asked
              <span className="block font-medium text-[#3557ff]">
                Questions.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#10154d]/65 sm:text-lg">
              Find answers to the most frequently asked questions about our
              platform, features, pricing and how we help businesses grow
              faster.
            </p>
          </div>

          <input
            id="faq-none"
            name="faq-accordion"
            type="radio"
            className="hidden"
            defaultChecked
          />

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-5">
                {column.map((faq) => (
                  <details
                    key={faq.question}
                    name="faq-accordion"
                    className="group overflow-hidden rounded-[1.5rem] border border-[#10154d]/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#3557ff]/30 hover:shadow-[0_15px_40px_rgba(16,21,77,0.08)]"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 sm:px-6 sm:py-6 [&::-webkit-details-marker]:hidden">
                      <span className="text-sm font-medium leading-6 text-[#10154d] sm:text-base">
                        {faq.question}
                      </span>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f3f4fb] text-[#3557ff] transition-all duration-300 group-open:bg-[#3557ff] group-open:text-white">
                        <svg
                          className="transition-transform duration-300 group-open:rotate-45"
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 5v14" />
                          <path d="M5 12h14" />
                        </svg>
                      </span>
                    </summary>

                    <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-in-out group-open:grid-rows-[1fr] group-open:opacity-100">
                      <div className="overflow-hidden">
                        <div className="mx-5 mb-5 h-px bg-[#10154d]/10 sm:mx-6" />

                        <p className="px-5 pb-6 text-sm leading-7 text-[#10154d]/65 sm:px-6">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
        FONT
    ========================================================= */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');

        * {
          font-family: "Geist", sans-serif;
        }
      `}
      </style>
    </>
  );
}
export default Pricing;
