import { ArrowRight } from "lucide-react";
import { Search, ClipboardList, PlugZap, Rocket } from "lucide-react";
import { ShieldCheck, Zap, LifeBuoy, TrendingUp } from "lucide-react";
import Header from "../components/Header/Header";
import { useState } from "react";

const features = [
  {
    icon: ShieldCheck,
    title: "Bank-Grade Security",
    description:
      "SOC 2 Type II, ISO 27001, and end-to-end encryption on every transaction.",
  },
  {
    icon: Zap,
    title: "Quick Integration",
    description:
      "Go live in under 2 weeks with REST APIs, SDKs, and pre-built connectors.",
  },
  {
    icon: LifeBuoy,
    title: "Dedicated Support",
    description: "A named success manager plus 24/7 engineering on call.",
  },
  {
    icon: TrendingUp,
    title: "Scalable for Any Size",
    description:
      "From 100-student schools to lenders processing millions of payouts a month.",
  },
];

const steps = [
  {
    icon: Search,
    step: "STEP 1",
    title: "Consult",
    desc: "We map your workflows and goals.",
  },
  {
    icon: ClipboardList,
    step: "STEP 2",
    title: "Onboard",
    desc: "KYC, accounts, and team setup in days.",
  },
  {
    icon: PlugZap,
    step: "STEP 3",
    title: "Integrate",
    desc: "Connect banks, ERPs, and channels via APIs.",
  },
  {
    icon: Rocket,
    step: "STEP 4",
    title: "Go Live",
    desc: "Launch, monitor, and scale with confidence.",
  },
];

const testimonials = [
  {
    quote:
      "We replaced four vendors with Unifin and cut our reconciliation time by 80%.",
    name: "Priya Menon",
    role: "CFO, Greenfield Schools Group",
  },
  {
    quote: "Bulk payouts that used to take a day now finish in minutes.",
    name: "Arjun Rao",
    role: "Head of Operations",
  },
  {
    quote: "Our SLA compliance jumped from 72% to 98% in the first quarter.",
    name: "Sara Khan",
    role: "Director of Support",
  },
];

// -------- IMAGE PLACEHOLDERS (picsum.photos with themed IDs) --------
// Each service gets a unique image that matches its theme
// If you have actual images, replace the URL with your own path
const imagePlaceholders = {
  school: "https://picsum.photos/id/1/800/500", // education / office
  loan: "https://picsum.photos/id/20/800/500", // finance / business
  fintech: "https://picsum.photos/id/26/800/500", // technology / dashboard
  ticket: "https://picsum.photos/id/29/800/500", // travel / booking
  payout: "https://picsum.photos/id/36/800/500", // money / payment
};

// -------- SERVICES DATA WITH FALLBACK IMAGES --------
const services = [
  {
    title: "School Management System",
    image: "/images/ERP.png", // <-- Replace with your actual image path
    fallback: imagePlaceholders.school,

    description:
      "An end-to-end platform designed to simplify admissions, academics, fees, attendance, examinations, and school communication. Unifin School brings administrators, teachers, students, and parents onto a single connected platform—replacing manual paperwork and scattered systems with streamlined workflows, real-time information, and better visibility across the institution.",
    features: [
      "Online admissions & enrollment",
      "Fee management & online collection",
      "Attendance & academic tracking",
      "Parent-teacher communication portal",
      "Timetable & exam management",
    ],
    link: "/services/ERP",
  },
  {
    title: "Loan Management System",
    image: "/images/lmsa.png", // <-- Replace with your actual image path
    fallback: imagePlaceholders.loan,
    reverse: true,
    description:
      "A comprehensive, workflow-driven platform designed to manage the complete lending lifecycle from customer onboarding and loan origination to credit assessment, approval, disbursement, collections, and portfolio servicing.",
    features: [
      "Digital loan origination & customer onboarding",
      "e-KYC, document collection & verification",
      "Configurable credit assessment & approval workflows",
      "Multi-level approval & role-based workflows",
      "EMI collections & payment tracking",
    ],
    link: "/lms",
  },

  {
    title: "Ticket Booking Management System",
    image: "/images/ticket.png",
    fallback: imagePlaceholders.ticket,
    description:
      "A comprehensive, scalable platform built to simplify the complete ticketing journey — from searching and seat selection to booking, payment, confirmation, and post-booking management. Unifin Ticket Booking System centralizes inventory, schedules, customer bookings, payments, and operational workflows in one streamlined platform.",
    features: [
      "Online ticket search & real-time availability",
      "Event, travel & schedule management",
      "Seat selection & reservation management",
      "Real-time ticket inventory control",
      "Automated booking confirmation & e-ticket generation",
    ],
    link: "/ticket",
  },

  {
    title: "Fintech Software",
    image: "/images/bankpay.png", // <-- Replace with your actual image path
    fallback: imagePlaceholders.fintech,
    reverse: true,
    description:
      "Power digital payments, settlements, and compliance with a single, secure financial backbone. Unifin Fintech handles transaction processing, KYC, fraud checks, and API integrations so your team can launch new financial products without rebuilding core infrastructure.",
    features: [
      "PCI-DSS compliant digital payments",
      "Real-time settlement & reconciliation",
      "KYC, AML & fraud monitoring",
      "Open APIs & SDKs for fast integration",
      "Transaction-level audit trails",
    ],
    link: "/fintech",
  },
  // {
  //   title: "Payout Management System",
  //   image: "/images/payout.png", // <-- Replace with your actual image path
  //   fallback: imagePlaceholders.payout,
  //   reverse: true,
  //   description:
  //     "Originate, approve, and service loans on a workflow engine built for lenders. Unifin LMS digitizes the full lending lifecycle — from application and credit checks to disbursement and collections — cutting turnaround time from weeks to hours while keeping your portfolio risk and compliance under control.",
  //   features: [
  //     "Digital loan origination & e-KYC",
  //     "Configurable approval workflows",
  //     "Automated credit scoring & checks",
  //     "EMI scheduling & collections",
  //     "Disbursement automation",
  //   ],
  //   link: "/payout",
  // },
];
// -------- IMAGE COMPONENT WITH FALLBACK --------
function ServiceImage({ src, fallback, alt, title }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && fallback) {
      setImgSrc(fallback);
      setHasError(true);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt || title}
      className="block h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
      onError={handleError}
      loading="lazy"
    />
  );
}

function ServicesPage() {
  return (
    <>
      <Header />

      {/* =====================================================
          HERO / SERVICES HEADER
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f3f4fb] py-24 lg:py-32">
        {/* Background Decoration */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-32 h-[500px] w-[500px] rounded-full bg-[#3557ff]/10 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#10154d]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-20 lg:mb-28">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              {/* Heading */}
              <div className="max-w-3xl">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#3557ff]" />

                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#3557ff]">
                    Our Services
                  </span>
                </div>

                <h2 className="text-4xl font-light leading-[1.05] tracking-tight text-[#10154d] sm:text-5xl lg:text-6xl">
                  Solutions that turn
                  <span className="block font-medium text-[#3557ff]">
                    ideas into impact.
                  </span>
                </h2>
              </div>

              {/* Description */}
              <p className="max-w-xl text-base leading-8 text-[#3c3c3c] sm:text-lg lg:pb-1">
                From strategy and design to development and digital
                transformation, we create scalable solutions that solve real
                business challenges and create long-term value.
              </p>
            </div>
          </div>

          {/* =====================================================
              SERVICES
          ===================================================== */}

          <div className="space-y-24 lg:space-y-32">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 ${
                  service.reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="relative">
                  {/* Small Accent */}
                  <div className="mb-5 flex items-center gap-3">
                    {/* <span className="h-px w-8 bg-[#3557ff] transition-all duration-500 group-hover:w-14" /> */}

                    {/* <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3557ff]">
                      Service {String(index + 1).padStart(2, "0")}
                    </span> */}
                  </div>

                  {/* Title */}
                  <h3 className="max-w-xl text-3xl font-medium leading-tight tracking-tight text-[#10154d] transition-colors duration-300 group-hover:text-[#3557ff] sm:text-4xl lg:text-5xl">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-6 max-w-xl text-base leading-8 text-[#3c3c3c] sm:text-lg">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mt-8 space-y-4">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="group/feature flex items-center gap-4 text-base text-[#3c3c3c] sm:text-lg"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f3f4fb] text-[#3557ff] transition-all duration-300 group-hover/feature:bg-[#3557ff] group-hover/feature:text-white">
                          <span className="h-2 w-2 rounded-full bg-current" />
                        </span>

                        <span className="transition-colors duration-300 group-hover/feature:text-[#10154d]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={service.link}
                    rel="noopener noreferrer"
                    className="group/link mt-9 inline-flex items-center gap-3 rounded-full border border-[#10154d]/10 bg-white px-5 py-3 text-sm font-semibold text-[#10154d] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3557ff] hover:bg-[#3557ff] hover:text-white hover:shadow-lg"
                  >
                    Learn More
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f3f4fb] text-[#3557ff] transition-all duration-300 group-hover/link:bg-white group-hover/link:text-[#3557ff]">
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover/link:translate-x-0.5"
                      />
                    </span>
                  </a>
                </div>

                {/* =================================================
                    IMAGE
                ================================================= */}

                <div
                  className="relative cursor-pointer"
                  onClick={() => {
                    window.location.href = service.link;
                  }}
                >
                  {/* Decorative Glow */}
                  <div className="absolute -inset-4 rounded-[2rem] bg-[#3557ff]/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-[2rem] border border-[#10154d]/10 bg-white shadow-[0_25px_70px_rgba(16,21,77,0.10)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#3557ff]/30">
                    <div className="aspect-auto w-full overflow-hidden bg-white">
                      <ServiceImage
                        src={service.image}
                        fallback={service.fallback}
                        alt={service.title}
                        title={service.title}
                      />
                    </div>

                    {/* Bottom Overlay */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#10154d]/25 via-transparent to-transparent" />

                    {/* Hover Overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-[#3557ff]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES SECTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f5f5f5] py-24 lg:py-28">
        {/* Background Decoration */}
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#3557ff]/5 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#10154d]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mb-16 text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#3557ff]" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#3557ff]">
                Why Choose Us
              </span>

              <span className="h-px w-10 bg-[#3557ff]" />
            </div>

            <h2 className="text-4xl font-light tracking-tight text-[#10154d] sm:text-5xl lg:text-6xl">
              The trusted backbone for
              <span className="block font-medium text-[#3557ff]">
                finance, education & support
              </span>
            </h2>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[2rem] border border-[#10154d]/10 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#3557ff]/30 hover:shadow-[0_25px_60px_rgba(16,21,77,0.12)]"
                >
                  {/* Hover Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3557ff]/0 to-[#3557ff]/0 opacity-0 transition-all duration-500 group-hover:from-[#3557ff]/5 group-hover:to-[#10154d]/5 group-hover:opacity-100" />

                  {/* Icon */}
                  <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3f4fb] text-[#3557ff] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#3557ff] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Content */}
                  <h3 className="relative mb-3 text-xl font-medium text-[#10154d] transition-colors duration-300 group-hover:text-[#3557ff]">
                    {feature.title}
                  </h3>

                  <p className="relative leading-7 text-[#3c3c3c]">
                    {feature.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="relative mt-7 h-px w-10 bg-[#3557ff] transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS SECTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-24 lg:py-28">
        <div className="absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-[#3557ff]/5 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#10154d]/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          {/* Section Label */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#3557ff]" />

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#3557ff]">
              How It Works
            </p>

            <span className="h-px w-10 bg-[#3557ff]" />
          </div>

          <h2 className="mb-20 text-center text-4xl font-light tracking-tight text-[#10154d] sm:text-5xl lg:text-6xl">
            From conversation to launch in
            <span className="block font-medium text-[#3557ff]">four steps</span>
          </h2>

          <div className="relative">
            {/* Connector */}
            <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-[#3557ff]/20 via-[#3557ff] to-[#10154d]/20 md:block" />

            <div className="relative grid gap-10 md:grid-cols-4">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={index} className="group text-center">
                    {/* Step Icon */}
                    <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#3557ff]/20 bg-white shadow-sm transition-all duration-500 group-hover:border-[#3557ff] group-hover:bg-[#3557ff] group-hover:shadow-lg">
                      <Icon className="h-7 w-7 text-[#3557ff] transition-colors duration-300 group-hover:text-white" />
                    </div>

                    {/* Step Number */}
                    <p className="mb-2 text-xs font-bold tracking-wider text-[#3557ff]">
                      {step.step}
                    </p>

                    {/* Title */}
                    <h3 className="mb-3 text-2xl font-medium text-[#10154d] transition-colors duration-300 group-hover:text-[#3557ff]">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="leading-7 text-[#3c3c3c]">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIAL SECTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#e8edf6] py-24 lg:py-28">
        {/* Background */}
        <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#3557ff]/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-[#10154d]/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#3557ff]">
            Customer Love
          </p>

          <h2 className="mt-4 mb-14 text-center text-4xl font-light tracking-tight text-[#10154d] sm:text-5xl lg:text-6xl">
            Trusted by teams that
            <span className="block font-medium text-[#3557ff]">
              move money & manage people
            </span>
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2rem] border border-[#10154d]/10 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#3557ff]/30 hover:shadow-[0_25px_60px_rgba(16,21,77,0.12)]"
              >
                {/* Quote Accent */}
                <div className="mb-6 text-5xl font-serif leading-none text-[#3557ff]/20 transition-colors duration-300 group-hover:text-[#3557ff]/40">
                  “
                </div>

                <p className="mb-8 leading-7 text-[#3c3c3c]">"{item.quote}"</p>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3f4fb] text-sm font-semibold text-[#3557ff]">
                    {item.name?.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#10154d]">
                      {item.name}
                    </h4>

                    <p className="text-sm text-[#3c3c3c]/70">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA SECTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f5f5f5] py-24">
        <div className="relative mx-auto max-w-7xl">
          <div className="relative mx-6 overflow-hidden rounded-[2rem] bg-[#10154d] p-10 text-center text-white shadow-[0_30px_80px_rgba(16,21,77,0.20)] sm:p-16 lg:p-20">
            {/* CTA Background Glow */}
            <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#3557ff]/20 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#3557ff]/10 blur-3xl" />

            <div className="relative">
              {/* Label */}
              <div className="mb-6 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#7f96ff]" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9eafff]">
                  Let's Work Together
                </span>

                <span className="h-px w-10 bg-[#7f96ff]" />
              </div>

              {/* Heading */}
              <h2 className="mb-6 text-4xl font-light leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Ready to streamline your operations
                <span className="block font-medium text-[#7f96ff]">
                  across finance, education & support?
                </span>
              </h2>

              <p className="mx-auto mb-10 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
                See Unifin in action with a free 30-minute demo tailored to your
                organization.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {/* Primary Button */}
                <button className="group flex items-center gap-2 rounded-xl bg-[#3557ff] px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#10154d]">
                  Schedule a Free Demo
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                {/* Secondary Button */}
                <button className="rounded-xl border border-white/25 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#10154d]">
                  Talk to Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
