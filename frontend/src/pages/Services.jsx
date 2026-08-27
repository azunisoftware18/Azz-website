
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
    reverse: true,
    description:
      "An end-to-end platform designed to simplify admissions, academics, fees, attendance, examinations, and school communication. Unifin School brings administrators, teachers, students, and parents onto a single connected platform—replacing manual paperwork and scattered systems with streamlined workflows, real-time information, and better visibility across the institution.",
    features: [
      "Online admissions & enrollment",
      "Fee management & online collection",
      "Attendance & academic tracking",
      "Parent-teacher communication portal",
      "Timetable & exam management",
    ],
    link: "/ERP",
  },
  {
    title: "Loan Management System",
    image: "/images/lmsa.png", // <-- Replace with your actual image path
    fallback: imagePlaceholders.loan,
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

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* =====================================================
              SECTION HEADER
          ===================================================== */}

          <div className="mb-20 lg:mb-28">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

              <div className="max-w-3xl">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-indigo-600" />

                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600">
                    Our Services
                  </span>
                </div>

                <h2 className="text-4xl font-light leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Solutions that turn
                  <span className="block font-medium text-indigo-600">
                    ideas into impact.
                  </span>
                </h2>
              </div>

              <p className="max-w-xl text-base leading-8 text-slate-500 sm:text-lg lg:pb-1">
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
                  service.reverse
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }`}
              >

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="relative">

                  {/* Title */}
                  <h3 className="max-w-xl text-3xl font-medium leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mt-8 space-y-4">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 text-base text-slate-700 sm:text-lg"
                      >
                        <span className="h-2 w-2 shrink-0 rounded-full bg-green-500" />

                        <span>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link mt-9 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white hover:shadow-lg"
                  >
                    Learn More

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition-all duration-300 group-hover/link:bg-white group-hover/link:text-indigo-600">
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
                  onClick={() =>
                    window.open(service.link, "_blank")
                  }
                >

                  {/* Decorative Glow */}
                  <div className="absolute -inset-4 rounded-[2rem] bg-indigo-100/50 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.10)]">

                    {/* IMPORTANT:
                        Wide aspect ratio for full website screenshots
                    */}
                    <div className="aspect-auto w-full overflow-hidden bg-white">
                      <ServiceImage
                        src={service.image}
                        fallback={service.fallback}
                        alt={service.title}
                        title={service.title}
                      />
                    </div>

                    {/* Bottom Overlay */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 via-transparent to-transparent" />  
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

      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="mb-16 text-center text-5xl font-bold text-slate-900">
            The trusted backbone for finance,
            <br />
            education &amp; support
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 bg-white p-8 transition hover:shadow-lg"
                >

                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-50">
                    <Icon className="h-6 w-6 text-emerald-600" />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="leading-relaxed text-gray-600">
                    {feature.description}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS SECTION
      ===================================================== */}

      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-6xl px-6">

          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-indigo-600">
            How It Works
          </p>

          <h2 className="mb-20 text-center text-5xl font-bold text-slate-900">
            From conversation to launch in four
            <br />
            steps
          </h2>

          <div className="relative">

            {/* Connector */}
            <div className="absolute left-0 right-0 top-8 hidden h-[2px] bg-gradient-to-r from-indigo-300 to-cyan-300 md:block" />

            <div className="relative grid gap-10 md:grid-cols-4">

              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={index}
                    className="text-center"
                  >

                    <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-indigo-200 bg-white">
                      <Icon className="h-7 w-7 text-indigo-600" />
                    </div>

                    <p className="mb-2 text-xs font-bold text-gray-400">
                      {step.step}
                    </p>

                    <h3 className="mb-3 text-2xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="text-gray-600">
                      {step.desc}
                    </p>

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

      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-6xl px-6">

          <p className="text-center text-xs font-semibold uppercase tracking-[4px] text-indigo-500">
            Customer Love
          </p>

          <h2 className="mt-3 mb-14 text-center text-5xl font-bold text-slate-900">
            Trusted by teams that move money &amp;
            <br />
            manage people
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            {testimonials.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-7"
              >

                <p className="mb-8 leading-relaxed text-gray-600">
                  "{item.quote}"
                </p>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA SECTION
      ===================================================== */}

      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-10xl">

          <div className="mx-6 rounded-2xl bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-600 p-10 text-center text-white shadow-xl sm:p-16">

            <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
              Ready to streamline your operations
              <br />
              across finance, education &amp; support?
            </h2>

            <p className="mb-10 text-white/80">
              See Unifin in action with a free 30-minute demo tailored to
              your organization.
            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <button className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-100">
                Schedule a Free Demo
                <ArrowRight size={18} />
              </button>

              <button className="rounded-lg border border-white/40 px-6 py-3 font-semibold transition hover:bg-white/10">
                Talk to Sales
              </button>

            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default ServicesPage;