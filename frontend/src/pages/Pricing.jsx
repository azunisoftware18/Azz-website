import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";

function Pricing() {
  const [service, setService] = useState("website");

  const services = [
    { id: "website", label: "Website" },
    { id: "mobile", label: "Mobile App" },
    { id: "ecommerce", label: "E-Commerce" },
    { id: "crm", label: "CRM" },
  ];

  const pricingData = {
    website: [
      {
        title: "Basic",
        price: "₹30,000",
        features: [
          "5 Pages Website",
          "Responsive Design",
          "Contact Form",
          "Basic SEO",
        ],
      },
      {
        title: "Professional",
        price: "₹60,000",
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
        price: "₹50,000",
        features: [
          "Android or iOS",
          "User Authentication",
          "Basic API Integration",
          "Responsive UI",
        ],
      },
      {
        title: "Professional",
        price: "₹1,20,000",
        features: [
          "Android + iOS",
          "Payment Gateway",
          "Admin Dashboard",
          "Push Notifications",
        ],
      },
    ],

    ecommerce: [
      {
        title: "Starter",
        price: "₹80,000",
        features: [
          "Product Catalog",
          "Cart & Checkout",
          "Payment Gateway",
          "Order Tracking",
        ],
      },
      {
        title: "Advanced",
        price: "₹1,80,000",
        features: ["Multi Vendor", "Inventory", "Coupons", "Reports"],
      },
    ],

    crm: [
      {
        title: "Starter",
        price: "₹1,00,000",
        features: [
          "Lead Management",
          "Dashboard",
          "Reports",
          "Role Management",
        ],
      },
      {
        title: "Business",
        price: "₹2,50,000",
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
      <section className="bg-[#eef2f7] py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-5xl font-bold text-[#0E0A42]">Pricing Plans</h2>

            <p className="mt-4 text-gray-600 text-lg">
              Select a service to view pricing.
            </p>
          </div>

          {/* Service Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {services.map((item) => (
              <button
                key={item.id}
                onClick={() => setService(item.id)}
                className={`px-8 py-3 rounded-full transition-all duration-300 ${
                  service === item.id
                    ? "bg-[#1B0A42] text-white"
                    : "bg-white text-[#1B0A42] border hover:bg-[#1B0A42] hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-3xl font-semibold text-[#0E0A42]">
                  {plan.title}
                </h3>

                <div className="mt-6 text-5xl font-bold text-[#1B0A42]">
                  {plan.price}
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>

                {/* // with bg-whtie card  */}

                <Link
                  to="/contact"
                  state={{ service }}
                  className="mt-10 w-full flex items-center justify-center py-4 rounded-xl bg-white text-[#1B0A42] font-semibold hover:bg-gray-200 transition"
                >
                  Contact Us
                </Link>
              </div>
            ))}

            {/* Enterprise */}
            <div className="bg-[#1B0A42] rounded-3xl p-8 text-white shadow-lg hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-3xl font-semibold">Enterprise</h3>

              <div className="mt-6 text-5xl font-bold">Custom</div>

              <p className="mt-2 text-xl">Pricing</p>

              <ul className="mt-8 space-y-4">
                <li>✓ Unlimited Features</li>
                <li>✓ Dedicated Team</li>
                <li>✓ Priority Support</li>
                <li>✓ Scalable Architecture</li>
                <li>✓ SLA & Maintenance</li>
              </ul>

              {/* Button with background image */}

              <Link
                to="/contact"
                state={{ service }}
                className="group relative mt-10 w-full flex items-center justify-center overflow-hidden rounded-xl border-2 border-[#b7b1c5] bg-[#1B0A42] py-4 font-semibold text-white"
              >
                <span className="absolute right-full top-0 h-full w-[140%] skew-y-10 bg-[#ffffff] transition-all duration-500 group-hover:right-[-20%]"></span>

                <span className="relative -10 transition-colors duration-300 group-hover:text-black">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{ font-family: "Geist", sans-serif; }
                `}
      </style>
      <section className="bg-white  w-full flex flex-col items-center justify-center py-20 px-4">
        <div className="w-full max-w-5xl">
          <div className="mb-12">
            <h2 className="text-5xl font-medium text-black text-center">
              FAQ&apos;s
            </h2>
            <p className="text-black max-w-[540px] text-base/6 text-center mx-auto mt-5">
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

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-y-0">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-4">
                {column.map((faq) => (
                  <details
                    key={faq.question}
                    name="faq-accordion"
                    className="group rounded-lg border border-neutral-800 bg-white transition-all duration-300 hover:bg-gray-200"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-3.5 [&::-webkit-details-marker]:hidden">
                      <span className="text-sm font-medium text-black">
                        {faq.question}
                      </span>
                      <div className="shrink-0 rounded p-1 text-black transition-colors ">
                        <svg
                          className="block group-open:hidden"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                        <svg
                          className="hidden group-open:block"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                        </svg>
                      </div>
                    </summary>
                    <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-in-out group-open:grid-rows-[1fr] group-open:opacity-100">
                      <div className="overflow-hidden">
                        <p className="px-3.5 pb-3.5 text-sm leading-relaxed text-black">
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
    </>
  );
}

export default Pricing;
