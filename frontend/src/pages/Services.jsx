import {
  // Landmark,
  // GraduationCap,
  // CreditCard,
  // CheckCircle,
  ArrowRight,
} from "lucide-react";

import { Search, ClipboardList, PlugZap, Rocket } from "lucide-react";
import { ShieldCheck, Zap, LifeBuoy, TrendingUp } from "lucide-react";
import Header from "../components/Header/Header";

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

const services = [
  {
    title: "Fintech Solutions",
    // icon: CreditCard,
    image: "/images/",
    description:
      "Power digital payments, settlements, and compliance with a single, secure financial backbone. Unifin Fintech handles transaction processing, KYC, fraud checks, and API integrations so your team can launch new financial products without rebuilding core infrastructure.",
    features: [
      "PCI-DSS compliant digital payments",
      "Real-time settlement & reconciliation",
      "KYC, AML & fraud monitoring",
      "Open APIs & SDKs for fast integration",
      "Transaction-level audit trails",
    ],
  },

  {
    title: "School Management Solutions",
    // icon: GraduationCap,
    image: "/images/",

    // videoTitle: "Watch School Management Solutions Demo",
    reverse: true,
    description:
      "An end-to-end platform for admissions, academics, fees, and communication. Unifin School replaces scattered spreadsheets and paper trails with a single system that helps administrators, teachers, and parents stay aligned — driving better outcomes for students while reducing operational overhead for the institution.",
    features: [
      "Online admissions & enrollment",
      "Fee management & online collection",
      "Attendance & academic tracking",
      "Parent-teacher communication portal",
      "Timetable & exam management",
    ],
  },

  {
    title: "Loan Management System",
    // icon: Landmark,
    image: "/images/",

    // videoTitle: "Watch Loan Management System Demo",
    description:
      "Originate, approve, and service loans on a workflow engine built for lenders. Unifin LMS digitizes the full lending lifecycle — from application and credit checks to disbursement and collections — cutting turnaround time from weeks to hours while keeping your portfolio risk and compliance under control.",
    features: [
      "Digital loan origination & e-KYC",
      "Configurable approval workflows",
      "Automated credit scoring & checks",
      "EMI scheduling & collections",
      "Disbursement automation",
    ],
  },

  {
    title: "Paying Payout Management System",
    // icon: Landmark,
    image: "/images/",

    // videoTitle: "Watch Loan Management System Demo",
    reverse: true,

    description:
      "Originate, approve, and service loans on a workflow engine built for lenders. Unifin LMS digitizes the full lending lifecycle — from application and credit checks to disbursement and collections — cutting turnaround time from weeks to hours while keeping your portfolio risk and compliance under control.",
    features: [
      "Digital loan origination & e-KYC",
      "Configurable approval workflows",
      "Automated credit scoring & checks",
      "EMI scheduling & collections",
      "Disbursement automation",
    ],
  },

  {
    title: "Ticket Booking Management System",
    // icon: Landmark,
    image: "/images/",
    // videoTitle: "Watch Loan Management System Demo",

    description:
      "Originate, approve, and service loans on a workflow engine built for lenders. Unifin LMS digitizes the full lending lifecycle — from application and credit checks to disbursement and collections — cutting turnaround time from weeks to hours while keeping your portfolio risk and compliance under control.",
    features: [
      "Digital loan origination & e-KYC",
      "Configurable approval workflows",
      "Automated credit scoring & checks",
      "EMI scheduling & collections",
      "Disbursement automation",
    ],
  },
];

function ServicesPage() {
  return (
    <>
    <Header />
      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-24">
            <span className="uppercase tracking-wider text-indigo-600 font-semibold text-sm">
              OUR SERVICES
            </span>

            {/* <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
              Our Products
            </h2> */}

            <p className="mt-6 text-lg md:text-xl text-slate-500">
              Each solution is powerful on its own — and unstoppable together.
            </p>
          </div>

          {/* Services List */}
          <div className="space-y-32">
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-16 items-center ${
                    service.reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Left Content */}
                  <div>
                    <div className="flex items-center gap-5 mb-8">
                      <h3 className="text-3xl md:text-5xl font-bold text-slate-900">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10">
                      {service.description}
                    </p>

                    <div className="space-y-5 mb-10">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-4 text-lg text-slate-700"
                        >
                          <span className="w-2 h-2 rounded-full bg-teal-500 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="group text-indigo-600 font-semibold text-lg flex items-center gap-2 hover:gap-4 transition-all">
                      Learn more about {service.title}
                    </button>
                  </div>

                  {/* Right Image */}
                  <div>
                    {/* <div className="flex items-center gap-2 text-slate-700 font-medium mb-4">
                      {service.title}
                    </div> */}

                    <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[300px] md:h-[500px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold text-slate-900 mb-16">
            The trusted backbone for finance,
            <br />
            education & support
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition"
                >
                  <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>

                  <h3 className="font-bold text-xl text-slate-900 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-4">
            How It Works
          </p>

          <h2 className="text-center text-5xl font-bold text-slate-900 mb-20">
            From conversation to launch in four
            <br />
            steps
          </h2>

          <div className="relative">
            <div className="absolute top-8 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-300 to-cyan-300" />

            <div className="grid md:grid-cols-4 gap-10 relative">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={index} className="text-center">
                    <div className="mx-auto w-16 h-16 rounded-full border-2 border-indigo-200 bg-white flex items-center justify-center mb-6 relative z-10">
                      <Icon className="w-7 h-7 text-indigo-600" />
                    </div>

                    <p className="text-xs font-bold text-gray-400 mb-2">
                      {step.step}
                    </p>

                    <h3 className="font-bold text-2xl text-slate-900 mb-3">
                      {step.title}
                    </h3>

                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs uppercase tracking-[4px] text-indigo-500 font-semibold">
            Customer Love
          </p>

          <h2 className="text-center text-5xl font-bold text-slate-900 mt-3 mb-14">
            Trusted by teams that move money &
            <br />
            manage people
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-7"
              >
                <p className="text-gray-600 mb-8 leading-relaxed">
                  "{item.quote}"
                </p>

                <div>
                  <h4 className="font-semibold text-slate-900">{item.name}</h4>

                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
{/* 
          <div className="mt-14 text-center">
            <p className="text-xs uppercase tracking-[3px] text-gray-400 mb-8">
              Trusted by leading institutions
            </p>

            <div className="flex flex-wrap justify-center gap-16 text-gray-500 font-semibold">
              <span>Greenfield</span>
              <span>EduCredit</span>
              <span>BrightPath</span>
              <span>Vidya Bank</span>
              <span>ScholarPay</span>
              <span>LearnHub</span>
            </div>
          </div> */}


        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-10xl  mx-auto ">
          <div className=" bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-600 p-16 text-center text-white shadow-xl">
            <h2 className="text-5xl font-bold mb-6">
              Ready to streamline your operations
              <br />
              across finance, education & support?
            </h2>

            <p className="text-white/80 mb-10">
              See Unifin in action with a free 30-minute demo tailored to your
              organization.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
                Schedule a Free Demo
                <ArrowRight size={18} />
              </button>

              <button className="border border-white/40 px-6 py-3 rounded-lg font-semibold">
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
