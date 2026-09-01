import React, { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  CircleDollarSign,
  Code2,
  CreditCard,
  FileCheck2,
  Landmark,
  Menu,
  Network,
  Phone,
  ShieldCheck,
  Users,
  Wallet,
  X,
  Zap,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// ---------- Data ----------
const services = [
  {
    title: "BBPS",
    label: "Bill Payments",
    description:
      "Give your reseller network access to streamlined utility and bill payment services.",
    icon: CreditCard,
  },
  {
    title: "AEPS",
    label: "Banking Services",
    description:
      "Enable Aadhaar-based assisted banking services through your digital network.",
    icon: Landmark,
  },
  {
    title: "Aadhaar",
    label: "Identity Verification",
    description:
      "Integrate Aadhaar verification capabilities into customer onboarding workflows.",
    icon: ShieldCheck,
  },
  {
    title: "PAN",
    label: "PAN Verification",
    description:
      "Simplify PAN validation and identity-related verification through integrated services.",
    icon: FileCheck2,
  },
  {
    title: "DMT",
    label: "Money Transfer",
    description:
      "Enable domestic money transfer services with centralized transaction monitoring.",
    icon: ArrowDownRight,
  },
  {
    title: "Payout",
    label: "Business Payments",
    description:
      "Manage business payouts, beneficiaries, transaction status and operational visibility.",
    icon: Wallet,
  },
];

const resellerFeatures = [
  "Distributor and reseller onboarding",
  "Wallet and balance management",
  "Service-wise access control",
  "Commission configuration",
  "Transaction limits and controls",
  "Reseller status monitoring",
];

const capabilities = [
  {
    icon: Users,
    title: "Network Management",
    text: "Manage distributors, resellers and agents from one operational layer.",
  },
  {
    icon: Wallet,
    title: "Wallet & Commission",
    text: "Track balances, commissions and financial movement across your network.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    text: "Monitor service performance, transaction volumes and reseller activity.",
  },
  {
    icon: Code2,
    title: "API-First Architecture",
    text: "Connect external fintech providers and your own applications through APIs.",
  },
];

const faqData = [
  {
    q: "What services can the fintech reseller platform provide?",
    a: "The platform can be configured to support BBPS, AEPS, Aadhaar verification, PAN verification, DMT and payout workflows depending on the integrations and service providers used.",
  },
  {
    q: "Can I manage distributors and resellers?",
    a: "Yes. The platform is designed around reseller network management, including onboarding, service access, wallet controls, commissions, limits and operational status.",
  },
  {
    q: "Can commissions be configured for different resellers?",
    a: "Yes. Commission structures can be configured according to your business model and service requirements.",
  },
  {
    q: "Can the platform integrate with third-party fintech APIs?",
    a: "Yes. The platform can be connected with external service providers and APIs so financial services can be surfaced through your own operational ecosystem.",
  },
  {
    q: "Can I track transactions in real time?",
    a: "The platform can provide centralized transaction visibility, including status, service, reseller and operational information.",
  },
  {
    q: "Can the system support a reseller hierarchy?",
    a: "Yes. Distributor, reseller and agent hierarchies can be structured according to the business model.",
  },
];

const screenshots = [
  { name: "Overview", image: "/images/findash.png" },
  { name: "Resellers", image: "/images/reseller.png" },
  { name: "Transactions", image: "/images/trn.png" },
];

// ---------- FAQ Item Component ----------
function FAQItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border-b border-slate-200 ${open ? "pb-5" : ""}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-base font-semibold text-slate-800 sm:text-lg">
          {item.q}
        </span>
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 transition-transform duration-300 ${
            open ? "rotate-180 bg-indigo-600 text-white" : "text-slate-400"
          }`}
        >
          <ChevronDown size={17} />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-3xl pr-12 text-sm leading-7 text-slate-500 sm:text-base">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

// ---------- Main Component ----------
export default function FintechReseller() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenu(false);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-800">
      {/* ===== NAVBAR ===== */}
      <header className="fixed left-0 right-0 top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="flex items-center justify-between py-4">
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-3"
            >
              {/* <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
                U
              </div> */}
              <div>
                <div className="text-sm font-semibold text-slate-800">
                  FINTECH
                </div>
                {/* <div className="text-[8px] uppercase tracking-[0.2em] text-slate-400">
                  Fintech Infrastructure
                </div> */}
              </div>
            </button>

            <div className="hidden items-center gap-8 lg:flex">
              {[
                ["Services", "services"],
                ["Reseller Network", "resellers"],
                ["Platform", "platform"],
                ["Dashboard", "dashboard"],
                ["FAQ", "faq"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-sm text-slate-500 transition hover:text-indigo-600"
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="hidden items-center gap-4 lg:flex">
              <a
                href="tel:+917412066477"
                className="flex items-center gap-2 text-sm text-slate-600"
              >
                <Phone size={15} />
                +91 74120 66477
              </a>
              <button
                onClick={() => scrollTo("contact")}
                className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Book Demo
              </button>
            </div>

            <button
              onClick={() => setMobileMenu((v) => !v)}
              className="text-slate-700 lg:hidden"
            >
              {mobileMenu ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>

          {mobileMenu && (
            <div className="border-t border-slate-200/60 bg-white/95 py-4 lg:hidden">
              {[
                ["Services", "services"],
                ["Reseller Network", "resellers"],
                ["Platform", "platform"],
                ["Dashboard", "dashboard"],
                ["FAQ", "faq"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="block w-full px-4 py-3 text-left text-sm text-slate-600 hover:text-indigo-600"
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section id="home" className="relative min-h-screen overflow-hidden bg-white pt-28">
        {/* subtle glow */}
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-indigo-200/40 blur-[140px]" />
        <div className="absolute right-[-150px] top-10 h-[600px] w-[600px] rounded-full bg-indigo-100/30 blur-[160px]" />
        {/* grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-24 lg:px-8">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Copy */}
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-indigo-50/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-indigo-700">
                <Zap size={13} />
                Financial Infrastructure
              </div>
              <h1 className="max-w-3xl text-5xl font-light leading-[0.95] tracking-[-0.05em] text-slate-800 sm:text-6xl lg:text-[78px]">
                Build your fintech
                <span className="block font-semibold text-indigo-600">
                  network faster.
                </span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-500 sm:text-xl">
                Power BBPS, AEPS, Aadhaar, PAN, DMT and Payout from one
                connected infrastructure built for fintech businesses and
                reseller networks.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => scrollTo("contact")}
                  className="group flex items-center justify-center gap-3 rounded-full bg-indigo-600 px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-indigo-700 shadow-lg shadow-indigo-200/50"
                >
                  Book a Demo
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>
                <a
                  href="https://wa.me/917412066477?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20Fintech%20Reseller%20Platform."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50"
                >
                  <FaWhatsapp className="text-[#25D366] text-lg" />
                  Talk on WhatsApp
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">
                <span>BBPS</span>
                <span>AEPS</span>
                <span>Aadhaar</span>
                <span>PAN</span>
                <span>DMT</span>
                <span>Payout</span>
              </div>
            </div>

            {/* Transaction Visualization */}
            <div className="relative min-h-[560px]">
              {/* Main Glass Panel */}
              <div className="absolute right-0 top-1/2 w-full max-w-[560px] -translate-y-1/2 rounded-[2rem] border border-slate-200/60 bg-white/70 p-6 shadow-soft backdrop-blur-xl sm:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-400">
                      Transaction Engine
                    </div>
                    <div className="mt-2 text-2xl font-semibold text-slate-800">
                      ₹4.82 Cr
                    </div>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                    <CircleDollarSign size={21} />
                  </div>
                </div>

                {/* Status */}
                <div className="mt-7 flex items-center justify-between rounded-xl border border-emerald-200/60 bg-emerald-50/60 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                    <span className="text-xs text-slate-600">
                      Transaction Engine Active
                    </span>
                  </div>
                  <span className="text-xs font-medium text-emerald-600">
                    Operational
                  </span>
                </div>

                {/* Transactions */}
                <div className="mt-5 space-y-3">
                  {[
                    ["TXN-98231", "BBPS", "₹2,450", "Success"],
                    ["TXN-98232", "DMT", "₹18,000", "Success"],
                    ["TXN-98233", "Payout", "₹45,000", "Success"],
                    ["TXN-98234", "AEPS", "₹7,500", "Processing"],
                  ].map(([id, service, amount, status]) => (
                    <div
                      key={id}
                      className="flex items-center justify-between rounded-xl border border-slate-200/60 bg-white/50 px-4 py-3"
                    >
                      <div>
                        <div className="text-xs font-medium text-slate-700">
                          {id}
                        </div>
                        <div className="mt-1 text-[10px] text-slate-400">
                          {service}
                        </div>
                      </div>
                      <div className="text-sm font-medium text-slate-800">
                        {amount}
                      </div>
                      <span
                        className={`rounded-full px-2.5 py-1 text-[9px] font-medium ${
                          status === "Success"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="mt-6 rounded-2xl border border-slate-200/60 bg-white/50 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400">
                        Transaction Volume
                      </div>
                      <div className="mt-1 text-sm font-medium text-slate-700">
                        Today's activity
                      </div>
                    </div>
                    <BarChart3 size={18} className="text-indigo-500" />
                  </div>
                  <div className="mt-6 flex h-28 items-end gap-2">
                    {[30, 44, 39, 57, 48, 70, 60, 82, 75, 96].map(
                      (height, index) => (
                        <div
                          key={index}
                          className={`flex-1 rounded-t-md ${
                            index === 9 ? "bg-indigo-500" : "bg-indigo-200"
                          }`}
                          style={{ height: `${height}%` }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Floating Reseller */}
              <div className="absolute -left-2 top-16 hidden rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-soft backdrop-blur-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                    <Users size={19} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">
                      Active Resellers
                    </div>
                    <div className="mt-1 text-sm font-semibold text-slate-800">
                      1,248
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Settlement */}
              <div className="absolute bottom-10 right-[-12px] hidden rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-soft backdrop-blur-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <Check size={19} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">
                      Settlement
                    </div>
                    <div className="mt-1 text-sm font-semibold text-slate-800">
                      Completed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES RAIL ===== */}
      <section id="services" className="border-b border-slate-200/80 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center divide-x divide-slate-200">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="flex min-w-[150px] flex-1 items-center justify-center gap-3 px-5 py-4"
                >
                  <Icon size={18} className="text-indigo-500" />
                  <div>
                    <div className="text-sm font-semibold text-slate-800">
                      {service.title}
                    </div>
                    <div className="hidden text-[10px] text-slate-400 sm:block">
                      {service.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SERVICES DETAIL ===== */}
      <section className="bg-slate-50/80 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600">
              Financial Service Layer
            </div>
            <h2 className="text-4xl font-light tracking-tight text-slate-800 sm:text-5xl lg:text-6xl">
              Everything your fintech
              <span className="block font-semibold">
                network needs to transact.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-200/80 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group bg-white p-7 transition hover:bg-slate-50"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                      <Icon size={20} />
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-slate-300 transition group-hover:text-indigo-600"
                    />
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold text-slate-800 transition group-hover:text-indigo-700">
                    {service.title}
                  </h3>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-indigo-500">
                    {service.label}
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-500 transition group-hover:text-slate-600">
                    {service.description}
                  </p>
                  <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-slate-700 transition group-hover:text-indigo-600">
                    Explore
                    <ArrowRight size={15} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== RESELLER NETWORK ===== */}
      <section id="resellers" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Content */}
            <div>
              <div className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600">
                Reseller Network
              </div>
              <h2 className="text-4xl font-light leading-tight text-slate-800 sm:text-5xl lg:text-6xl">
                Your entire network.
                <span className="block font-semibold text-indigo-600">
                  One control layer.
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
                Onboard resellers, assign services, configure wallets,
                manage commissions and monitor activity from a single
                operational environment.
              </p>
              <div className="mt-9 space-y-4">
                {resellerFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm text-slate-600 sm:text-base"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      <Check size={14} />
                    </span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Network Visualization */}
            <div className="relative min-h-[530px]">
              {/* Connecting Lines */}
              <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-200/60" />
              <div className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-200/40" />

              {/* Center */}
              <div className="absolute left-1/2 top-1/2 z-20 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[2rem] border border-indigo-200/60 bg-white shadow-card backdrop-blur-xl">
                <Network size={28} className="text-indigo-600" />
                <div className="mt-3 text-sm font-semibold text-slate-800">
                  Fintech Core
                </div>
                <div className="mt-1 text-[9px] uppercase tracking-[0.15em] text-slate-400">
                  Control Layer
                </div>
              </div>

              {/* Nodes */}
              {[
                { label: "Distributor", top: "5%", left: "10%" },
                { label: "Reseller 01", top: "4%", right: "7%" },
                { label: "Reseller 02", bottom: "8%", left: "8%" },
                { label: "Reseller 03", bottom: "6%", right: "8%" },
              ].map((node) => (
                <div
                  key={node.label}
                  className="absolute rounded-2xl border border-slate-200/80 bg-white/90 px-5 py-4 shadow-card backdrop-blur-md"
                  style={{
                    top: node.top,
                    left: node.left,
                    right: node.right,
                    bottom: node.bottom,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-indigo-500" />
                    <span className="text-xs font-medium text-slate-700">
                      {node.label}
                    </span>
                  </div>
                  <div className="mt-2 text-[9px] text-slate-400">
                    Active Network Node
                  </div>
                </div>
              ))}

              {/* Bottom Metric */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full border border-slate-200/80 bg-white/90 px-5 py-2.5 text-xs text-slate-500 shadow-card backdrop-blur-md">
                Centralized reseller visibility
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PLATFORM CAPABILITIES ===== */}
      <section id="platform" className="bg-slate-50/80 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600">
                Platform
              </div>
              <h2 className="mt-5 text-4xl font-light leading-tight text-slate-800 sm:text-5xl">
                Infrastructure that
                <span className="block font-semibold">
                  grows with you.
                </span>
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-200/80 sm:grid-cols-2">
              {capabilities.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-white p-7 transition hover:bg-slate-50"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-7 text-xl font-semibold text-slate-800">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== DASHBOARD ===== */}
      <section id="dashboard" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600">
                Product
              </div>
              <h2 className="mt-5 text-4xl font-light leading-tight text-slate-800 sm:text-5xl lg:text-6xl">
                One view across
                <span className="block font-semibold">
                  your fintech operation.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-slate-500">
              Keep network activity, transactions, reseller performance and
              operational information within a single digital workspace.
            </p>
          </div>

          {/* Tabs */}
          <div className="mt-12 flex flex-wrap gap-2">
            {screenshots.map((screen, index) => (
              <button
                key={screen.name}
                onClick={() => setActiveScreenshot(index)}
                className={`rounded-full px-5 py-3 text-sm font-medium transition ${
                  activeScreenshot === index
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200/50"
                    : "bg-white text-slate-500 hover:text-indigo-600 border border-slate-200/60"
                }`}
              >
                {screen.name}
              </button>
            ))}
          </div>

          {/* Main Screenshot */}
          <div className="mt-7 overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white p-3 shadow-soft sm:p-5">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[1.8rem] bg-slate-100">
              <img
                src={screenshots[activeScreenshot].image}
                alt={screenshots[activeScreenshot].name}
                className="absolute inset-0 h-full w-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              {/* Placeholder */}
             
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="bg-slate-50/80 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600">
                FAQ
              </div>
              <h2 className="mt-5 text-4xl font-light leading-tight text-slate-800 sm:text-5xl">
                Questions about the
                <span className="block font-semibold">
                  fintech platform?
                </span>
              </h2>
              <p className="mt-6 text-base leading-7 text-slate-500">
                Everything you need to know about reseller management,
                integrations and financial services.
              </p>
            </div>
            <div>
              {faqData.map((item) => (
                <FAQItem key={item.q} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id="contact" className="bg-white px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white px-7 py-12 shadow-soft sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600">
                  Start Building
                </div>
                <h2 className="mt-5 text-4xl font-light leading-tight text-slate-800 sm:text-5xl lg:text-6xl">
                  Launch more services.
                  <span className="block font-semibold text-indigo-600">
                    Grow your fintech network.
                  </span>
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
                  Explore the platform, discuss your reseller model and see
                  how the infrastructure can fit your business.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-3 rounded-full bg-slate-800 px-7 py-4 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  <Phone size={18} />
                  +91 74120 66477
                </a>
                <a
                  href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20a%20demo%20of%20your%20Fintech%20Reseller%20Platform."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 rounded-full bg-indigo-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-indigo-700 shadow-lg shadow-indigo-200/50"
                >
                  <FaWhatsapp className="text-lg" />
                  WhatsApp for Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-white border-t border-slate-200/80">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-semibold text-slate-800">
                Unifin
              </div>
              <div className="mt-1 text-xs text-slate-400">
                Fintech infrastructure for modern financial networks.
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-slate-500">
              <button onClick={() => scrollTo("services")} className="hover:text-indigo-600">
                Services
              </button>
              <button onClick={() => scrollTo("resellers")} className="hover:text-indigo-600">
                Resellers
              </button>
              <button onClick={() => scrollTo("dashboard")} className="hover:text-indigo-600">
                Dashboard
              </button>
              <button onClick={() => scrollTo("faq")} className="hover:text-indigo-600">
                FAQ
              </button>
            </div>

            <div className="text-xs text-slate-400">
              © {new Date().getFullYear()} Unifin. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* ===== FLOATING CONTACT ===== */}
      <a
      // +91 74120 66477
        href="tel:+917412066477"
        aria-label="Call"
        className="fixed bottom-24 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-white shadow-xl transition hover:-translate-y-1 hover:bg-indigo-600 sm:right-6"
      >
        <Phone size={18} />
      </a>

      <a
        href="https://wa.me/917412066477?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20Fintech%20Reseller%20Platform."
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_15px_35px_rgba(37,211,102,0.35)] transition hover:-translate-y-1 hover:scale-105 sm:right-6"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  );
}