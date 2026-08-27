import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Banknote,
  Building2,
  Calculator,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  CreditCard,
  FileCheck2,
  FileText,
  Landmark,
  LineChart,
  Menu,
  Network,
  Phone,
  PieChart,
  ReceiptIndianRupee,
  ShieldCheck,
  Smartphone,
  Users,
  WalletCards,
  Workflow,
  X,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

/* =========================================================
   DATA
========================================================= */

const features = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "Loan Origination",
    description:
      "Capture applications, customer details, loan requirements and onboarding information through a structured digital workflow.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "KYC & Verification",
    description:
      "Manage documents, verification checkpoints, customer validation and internal review from one centralized platform.",
  },
  {
    icon: Workflow,
    number: "03",
    title: "Credit Workflow",
    description:
      "Move applications across review, underwriting, approval and rejection stages with clear status visibility.",
  },
  {
    icon: Banknote,
    number: "04",
    title: "Disbursement",
    description:
      "Manage approved loans, disbursement details, repayment schedules and financial transaction tracking.",
  },
  {
    icon: CreditCard,
    number: "05",
    title: "EMI & Collections",
    description:
      "Track EMI schedules, collections, overdue balances, penalties, bounce charges and repayment performance.",
  },
  {
    icon: ReceiptIndianRupee,
    number: "06",
    title: "Accounting Automation",
    description:
      "Connect lending activity with journal entries, receivables, payables, income, expenses and ledgers.",
  },
  {
    icon: Network,
    number: "07",
    title: "Payment Workflows",
    description:
      "Centralize payment activity, recurring collection workflows and transaction monitoring for your lending operation.",
  },
  {
    icon: BarChart3,
    number: "08",
    title: "Reports & Analytics",
    description:
      "Understand your portfolio with dashboards, account ledgers, trial balance, P&L and balance sheet reports.",
  },
];

const lifecycle = [
  {
    number: "01",
    title: "Application",
    description:
      "Collect customer and loan details through a structured digital application process.",
  },
  {
    number: "02",
    title: "Verification",
    description:
      "Verify KYC, documents, customer information and credit-related checks.",
  },
  {
    number: "03",
    title: "Approval",
    description:
      "Route applications through internal review and approval workflows.",
  },
  {
    number: "04",
    title: "Disbursement",
    description: "Disburse approved loans and generate repayment schedules.",
  },
  {
    number: "05",
    title: "Collections",
    description:
      "Monitor EMI collections, overdue amounts, penalties and repayment performance.",
  },
  {
    number: "06",
    title: "Accounting",
    description:
      "Automatically connect lending transactions with the accounting workflow.",
  },
];

const faqs = [
  {
    question: "What is a Loan Management System?",
    answer:
      "A Loan Management System (LMS) is a centralized platform that helps lending businesses manage the complete loan lifecycle, including application, verification, approval, disbursement, EMI collection, overdue management and reporting.",
  },
  {
    question: "Which stages of the loan lifecycle does the system cover?",
    answer:
      "The system can cover the complete workflow from customer onboarding and loan application to KYC, document verification, credit checks, approval, disbursement, repayment schedules, EMI collections, penalties, overdue tracking and accounting.",
  },
  {
    question: "Does the LMS include accounting features?",
    answer:
      "Yes. The platform can connect lending operations with accounting workflows such as Chart of Accounts, journal entries, account ledgers, receivables, payables, payment transactions, Trial Balance, Profit & Loss and Balance Sheet reporting.",
  },
  {
    question: "Can the system manage EMI collections and overdue loans?",
    answer:
      "Yes. The LMS can track EMI schedules, collected amounts, pending installments, overdue loans, penalties, bounce charges and repayment history.",
  },
  {
    question: "Can the LMS support multiple branches?",
    answer:
      "Yes. The system can be structured for multi-branch operations, allowing businesses to organize customers, loans, employees, collections and reports across different branches.",
  },
  {
    question: "Can the loan workflow be customized?",
    answer:
      "Yes. Loan products, approval stages, verification workflows, user roles, business rules, reports and other processes can be customized according to your organization's requirements.",
  },
  {
    question: "Does the system provide dashboards and reports?",
    answer:
      "Yes. The platform can provide dashboards for loan applications, approvals, disbursements, collections and portfolio performance, along with operational and accounting reports.",
  },
];

const dashboardScreens = [
  {
    title: "LMS Dashboard",
    subtitle: "Portfolio Overview",
    description:
      "Monitor loan applications, approvals, disbursements and collections from a single operational dashboard.",
    image: "/lms/dashboard.png",
  },
  {
    title: "Loan Applications",
    subtitle: "Application Management",
    description:
      "Track your complete application pipeline with verification, approval and status visibility.",
    image: "/lms/applications.png",
  },
  {
    title: "Accounting",
    subtitle: "Financial Operations",
    description:
      "Manage journals, accounts, receivables, payments and financial reporting in one place.",
    image: "/lms/accounting.png",
  },
];

const stats = [
  {
    value: "360°",
    label: "Portfolio Visibility",
  },
  {
    value: "24/7",
    label: "Operational Access",
  },
  {
    value: "1",
    label: "Centralized Platform",
  },
  {
    value: "Real-time",
    label: "Reports & Tracking",
  },
];

/* =========================================================
   SUB-COMPONENTS
========================================================= */

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#10154d]/8 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left text-base font-medium text-[#10154d] transition hover:text-[#3557ff] sm:text-lg"
      >
        <span>{question}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm leading-7 text-[#69738b] sm:text-base">
          {answer}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Lms() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f9fc] text-[#10154d]">
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-[0_12px_40px_rgba(16,21,77,0.08)] backdrop-blur-xl">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <button
                onClick={() => scrollTo("home")}
                className="group flex items-center gap-3"
              >
                {/* <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#10154d] text-sm font-bold text-white transition-transform duration-300 group-hover:scale-105">
                  L
                </div> */}

                <div className="text-left">
                  <div className="text-xl font-bold ">
                    Mas<span className="text-[#3557ff]">Cot</span>
                  </div>

                  <div className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#7b849a]">
                    Loan Management System
                  </div>
                </div>
              </button>

              {/* Desktop Navigation */}
              <div className="hidden items-center gap-7 lg:flex">
                {[
                  ["Features", "features"],
                  ["Workflow", "workflow"],
                  ["Dashboard", "dashboard"],
                  ["Why LMS", "why-us"],
                  ["FAQ", "faq"],
                ].map(([label, id]) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className="text-sm font-medium text-[#606980] transition-colors hover:text-[#3557ff]"
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Right Side */}
              <div className="hidden items-center gap-3 lg:flex">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-[#10154d] transition hover:bg-[#f1f4fb]"
                >
                  <Phone size={15} />
                  +91 98765 43210
                </a>

                <button
                  onClick={() => scrollTo("contact")}
                  className="group flex items-center gap-2 rounded-full bg-[#3557ff] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2647ef] hover:shadow-lg"
                >
                  Book Demo
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>
              </div>

              {/* Mobile Toggle */}
              <button
                onClick={() => setMobileOpen((prev) => !prev)}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f3f9] lg:hidden"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
              <div className="border-t border-[#10154d]/10 pt-4 lg:hidden">
                <div className="space-y-1">
                  {[
                    ["Features", "features"],
                    ["Workflow", "workflow"],
                    ["Dashboard", "dashboard"],
                    ["Why LMS", "why-us"],
                    ["FAQ", "faq"],
                    ["Contact", "contact"],
                  ].map(([label, id]) => (
                    <button
                      key={id}
                      onClick={() => scrollTo(id)}
                      className="block w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-[#535b76] transition hover:bg-[#f3f5fa]"
                    >
                      {label}
                    </button>
                  ))}

                  <a
                    href="tel:+919876543210"
                    className="mt-2 flex items-center gap-2 rounded-xl bg-[#f3f5fa] px-4 py-3 text-sm font-semibold"
                  >
                    <Phone size={16} />
                    +91 98765 43210
                  </a>
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="relative overflow-hidden bg-[#f7f9fc] pt-36 lg:pt-48"
      >
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-12%] top-24 h-[520px] w-[520px] rounded-full bg-[#3557ff]/10 blur-3xl" />

          <div className="absolute right-[-10%] top-0 h-[650px] w-[650px] rounded-full bg-[#8090ff]/10 blur-3xl" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,21,77,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(16,21,77,0.035)_1px,transparent_1px)] bg-[size:70px_70px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-28">
          <div className="grid items-center gap-16 lg:grid-cols-[0.88fr_1.12fr]">
            {/* Hero Content */}
            <div>
              {/* <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#3557ff]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#3557ff] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#3557ff]" />
                Built for Modern Lending
              </div> */}

              <h1 className="max-w-3xl text-5xl font-light leading-[0.94] tracking-[-0.045em] text-[#10154d] sm:text-6xl lg:text-[78px]">
                One platform for
                <span className="block font-semibold text-[#3557ff]">
                  every loan.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-[#606a82] sm:text-xl">
                Manage the complete lending lifecycle—from application and
                verification to approval, disbursement, collections and
                accounting.
              </p>

              {/* CTAs */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => scrollTo("contact")}
                  className="group flex items-center justify-center gap-3 rounded-full bg-[#3557ff] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2647ef] hover:shadow-[0_18px_40px_rgba(53,87,255,0.25)]"
                >
                  Request a Demo
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <a
                  href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20a%20demo%20of%20your%20Loan%20Management%20System."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 rounded-full border border-[#10154d]/12 bg-white px-7 py-4 text-sm font-semibold text-[#10154d] transition-all duration-300 hover:-translate-y-1 hover:border-[#3557ff]/30 hover:shadow-lg"
                >
                  <Smartphone size={18} />
                  WhatsApp Us
                </a>
              </div>

              {/* Trust Points */}
              <div className="mt-9 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
                {["Loan Origination", "Collections", "Accounting"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-[#66718a]"
                    >
                      <CheckCircle2
                        size={16}
                        className="shrink-0 text-[#3557ff]"
                      />
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Hero Dashboard */}
            <div className="relative">
              <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-[#3557ff]/15 to-transparent blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_35px_90px_rgba(16,21,77,0.16)]">
                {/* Browser Bar */}
                <div className="flex items-center justify-between border-b border-[#10154d]/8 bg-[#fcfdff] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#dde2ee]" />
                    <span className="h-3 w-3 rounded-full bg-[#dde2ee]" />
                    <span className="h-3 w-3 rounded-full bg-[#dde2ee]" />
                  </div>

                  <div className="hidden rounded-full bg-[#f1f3f8] px-4 py-1.5 text-[10px] text-[#778198] sm:block">
                    loanflow.app/dashboard
                  </div>

                  <div className="h-7 w-7 rounded-full bg-[#3557ff]/10" />
                </div>

                {/* Dashboard */}
                <div className="grid min-h-[430px] grid-cols-[80px_1fr] bg-[#f6f8fc] sm:min-h-[510px] sm:grid-cols-[96px_1fr]">
                  {/* Sidebar */}
                  <aside className="border-r border-[#10154d]/8 bg-white p-3 sm:p-4">
                    <div className="mb-8 h-10 rounded-xl bg-[#10154d]" />

                    <div className="space-y-3">
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div
                          key={item}
                          className={`h-9 rounded-lg ${
                            item === 1 ? "bg-[#3557ff]" : "bg-[#f0f2f7]"
                          }`}
                        />
                      ))}
                    </div>
                  </aside>

                  {/* Main */}
                  <div className="p-4 sm:p-7">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <div className="text-xs text-[#8891a7]">Dashboard</div>

                        <div className="mt-1 text-xl font-semibold text-[#10154d] sm:text-2xl">
                          Loan Portfolio
                        </div>
                      </div>

                      <div className="rounded-xl bg-white px-3 py-2 text-[10px] font-medium shadow-sm sm:px-4 sm:text-xs">
                        This Month
                      </div>
                    </div>

                    {/* Stat Cards */}
                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {[
                        ["Applications", "1,248"],
                        ["Approved", "842"],
                        ["Disbursed", "₹4.8 Cr"],
                        ["Collections", "₹2.1 Cr"],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="rounded-2xl border border-[#10154d]/6 bg-white p-4"
                        >
                          <div className="text-[9px] text-[#8790a7] sm:text-[10px]">
                            {label}
                          </div>

                          <div className="mt-2 text-sm font-semibold text-[#10154d] sm:text-base">
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Charts */}
                    <div className="mt-4 grid gap-4 sm:grid-cols-[1.45fr_0.55fr]">
                      <div className="rounded-2xl border border-[#10154d]/6 bg-white p-4 sm:p-5">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-semibold text-[#10154d]">
                              Disbursement
                            </div>

                            <div className="mt-1 text-[10px] text-[#8b93a8]">
                              Monthly performance
                            </div>
                          </div>

                          <LineChart size={18} className="text-[#3557ff]" />
                        </div>

                        <div className="mt-7 flex h-32 items-end gap-2">
                          {[40, 48, 43, 63, 54, 75, 70, 88, 79, 100].map(
                            (height, index) => (
                              <div
                                key={index}
                                className={`flex-1 rounded-t-md ${
                                  index === 9 ? "bg-[#3557ff]" : "bg-[#dfe5ff]"
                                }`}
                                style={{
                                  height: `${height}%`,
                                }}
                              />
                            ),
                          )}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-[#10154d]/6 bg-white p-4 sm:p-5">
                        <div className="text-sm font-semibold text-[#10154d]">
                          Portfolio Mix
                        </div>

                        <div className="mt-6 flex items-center justify-center">
                          <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-[18px] border-[#e0e5f5]">
                            <div className="absolute inset-[-18px] rounded-full border-[18px] border-transparent border-r-[#3557ff] border-t-[#3557ff] rotate-[22deg]" />

                            <div className="text-center">
                              <div className="text-lg font-bold text-[#10154d]">
                                72%
                              </div>

                              <div className="text-[9px] text-[#8891a7]">
                                Retail
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Recent Applications */}
                    <div className="mt-4 rounded-2xl border border-[#10154d]/6 bg-white p-4">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold">
                          Recent Applications
                        </div>

                        <div className="text-[10px] font-medium text-[#3557ff]">
                          View All
                        </div>
                      </div>

                      <div className="mt-4 space-y-2">
                        {[
                          ["LN-10481", "₹4,50,000", "Approved"],
                          ["LN-10482", "₹2,75,000", "Review"],
                          ["LN-10483", "₹8,20,000", "Approved"],
                        ].map(([id, amount, status]) => (
                          <div
                            key={id}
                            className="flex items-center justify-between rounded-xl bg-[#f8f9fc] px-3 py-2.5 text-[10px]"
                          >
                            <span className="font-medium text-[#10154d]">
                              {id}
                            </span>

                            <span className="text-[#758097]">{amount}</span>

                            <span
                              className={`rounded-full px-2 py-1 font-medium ${
                                status === "Approved"
                                  ? "bg-[#eaf6ef] text-[#2a8550]"
                                  : "bg-[#fff4df] text-[#b57917]"
                              }`}
                            >
                              {status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Status */}
              <div className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-white bg-white p-4 shadow-xl sm:block lg:-left-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf7ef] text-[#2b8c53]">
                    <CheckCircle2 size={19} />
                  </div>

                  <div>
                    <div className="text-[10px] text-[#8a92a7]">
                      Application Status
                    </div>

                    <div className="mt-1 text-sm font-semibold text-[#10154d]">
                      Loan Approved
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="border-y border-[#10154d]/8 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-6 py-8 lg:px-8 lg:py-10 ${
                index !== stats.length - 1 ? "border-r border-[#10154d]/8" : ""
              }`}
            >
              <div className="text-3xl font-semibold tracking-tight text-[#10154d] sm:text-4xl">
                {stat.value}
              </div>

              <div className="mt-2 text-sm text-[#778197]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section id="features" className="bg-[#f7f9fc] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#3557ff]" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#3557ff]">
                  Platform Features
                </span>
              </div>

              <h2 className="text-4xl font-light leading-tight tracking-tight text-[#10154d] sm:text-5xl lg:text-6xl">
                Everything your
                <span className="block font-medium text-[#3557ff]">
                  lending team needs.
                </span>
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-[#68738b] lg:justify-self-end">
              From onboarding and verification to collections and financial
              reporting, LoanFlow connects your complete lending operation into
              one structured system.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-[#10154d]/8 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#3557ff]/20 hover:shadow-[0_25px_60px_rgba(16,21,77,0.10)]"
                >
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#3557ff]/5 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef2ff] text-[#3557ff] transition-all duration-500 group-hover:bg-[#3557ff] group-hover:text-white">
                        <Icon size={21} />
                      </div>

                      {/* <span className="text-xs font-semibold text-[#b2b9c8]">
                        {feature.number}
                      </span> */}
                    </div>

                    <h3 className="mt-8 text-xl font-semibold tracking-tight text-[#10154d]">
                      {feature.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#707a91]">
                      {feature.description}
                    </p>

                    <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#3557ff]">
                      Explore Feature
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WORKFLOW
      ===================================================== */}

      <section id="workflow" className="bg-[#10154d] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            {/* Left */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#8ea1ff]" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#abb8ff]">
                  Lending Lifecycle
                </span>
              </div>

              <h2 className="text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
                One workflow.
                <span className="block font-medium text-[#8ea1ff]">
                  Every stage connected.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-base leading-8 text-white/60 sm:text-lg">
                Keep your teams aligned from the first application to final
                repayment with complete workflow visibility.
              </p>

              <button
                onClick={() => scrollTo("contact")}
                className="group mt-8 flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#10154d] transition hover:bg-[#8ea1ff] hover:text-white"
              >
                Discuss Your Workflow
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-[18px] top-8 bottom-8 hidden w-px bg-white/10 md:block" />

              <div className="space-y-5">
                {lifecycle.map((item) => (
                  <div
                    key={item.number}
                    className="group relative rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition-all duration-500 hover:bg-white/[0.08] sm:p-8"
                  >
                    <div className="flex gap-5 sm:gap-7">
                      {/* Number */}
                      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#8ea1ff]/30 bg-[#10154d] text-xs font-semibold text-[#8ea1ff]">
                        {item.number}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-5">
                          <div>
                            <h3 className="text-xl font-semibold text-white sm:text-2xl">
                              {item.title}
                            </h3>

                            <p className="mt-3 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                              {item.description}
                            </p>
                          </div>

                          <ArrowUpRight
                            size={20}
                            className="mt-1 shrink-0 text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#8ea1ff]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ACCOUNTING
      ===================================================== */}

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2.5rem] bg-[#eef2ff]">
            <div className="grid lg:grid-cols-2">
              {/* Content */}
              <div className="p-8 sm:p-10 lg:p-14">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#3557ff]" />

                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#3557ff]">
                    Lending + Accounting
                  </span>
                </div>

                <h2 className="text-4xl font-light leading-tight tracking-tight text-[#10154d] sm:text-5xl">
                  Your loan activity
                  <span className="block font-medium text-[#3557ff]">
                    stays connected to finance.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#626d84] sm:text-lg">
                  Connect lending transactions with the accounting layer so
                  operational activity and financial records stay aligned.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Chart of Accounts",
                    "Journal Entries",
                    "Receivables & Payables",
                    "Payment In / Payment Out",
                    "Account Ledger",
                    "Trial Balance, P&L & Balance Sheet",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm font-medium text-[#10154d] sm:text-base"
                    >
                      <CheckCircle2 size={17} className="text-[#3557ff]" />

                      {item}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => scrollTo("dashboard")}
                  className="group mt-9 flex items-center gap-3 rounded-full bg-[#10154d] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#3557ff]"
                >
                  Explore Accounting
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>

              {/* Accounting Visual */}
              <div className="relative min-h-[400px] overflow-hidden bg-[#10154d] p-7 sm:p-10">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#3557ff]/20 blur-3xl" />

                <div className="relative flex h-full items-center justify-center">
                  <div className="w-full max-w-md rounded-[1.75rem] border border-white/10 bg-white/[0.07] p-5 backdrop-blur-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-white/40">
                          Financial Overview
                        </div>

                        <div className="mt-1 text-xl font-semibold text-white">
                          ₹4.82 Cr
                        </div>
                      </div>

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#8ea1ff]">
                        <Calculator size={21} />
                      </div>
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-3">
                      {[
                        ["Receivable", "₹2.42 Cr"],
                        ["Collections", "₹1.86 Cr"],
                        ["Income", "₹68.4 L"],
                        ["Expenses", "₹21.7 L"],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="rounded-2xl border border-white/10 bg-white/[0.05] p-4"
                        >
                          <div className="text-[10px] text-white/40">
                            {label}
                          </div>

                          <div className="mt-2 text-sm font-semibold text-white">
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold text-white">
                          Account Performance
                        </div>

                        <BarChart3 size={18} className="text-[#8ea1ff]" />
                      </div>

                      <div className="mt-6 flex h-28 items-end gap-2">
                        {[35, 48, 42, 60, 52, 70, 66, 82, 75].map(
                          (height, index) => (
                            <div
                              key={index}
                              className="flex-1 rounded-t-md bg-[#8ea1ff]/50"
                              style={{
                                height: `${height}%`,
                              }}
                            />
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DASHBOARD SHOWCASE
      ===================================================== */}

      <section id="dashboard" className="bg-[#f7f9fc] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#3557ff]/10 bg-[#eef2ff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3557ff]">
              <PieChart size={14} />
              Product Experience
            </div>

            <h2 className="text-4xl font-light tracking-tight text-[#10154d] sm:text-5xl lg:text-6xl">
              Built around the way
              <span className="block font-medium text-[#3557ff]">
                lending teams actually work.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#69738b]">
              Explore the product experience across operations, applications and
              financial management.
            </p>
          </div>

          <div className="mt-14 space-y-8">
            {dashboardScreens.map((screen, index) => (
              <div
                key={screen.title}
                className={`group grid overflow-hidden rounded-[2.25rem] border border-[#10154d]/8 bg-white shadow-[0_20px_60px_rgba(16,21,77,0.06)] lg:grid-cols-[0.35fr_0.65fr] ${
                  index % 2 === 1 ? "lg:grid-cols-[0.65fr_0.35fr]" : ""
                }`}
              >
                {/* Information */}
                <div
                  className={`flex flex-col justify-center p-8 sm:p-10 lg:p-12 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3557ff]">
                    {/* Screen 0{index + 1} */}
                  </div>

                  <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[#10154d] sm:text-4xl">
                    {screen.title}
                  </h3>

                  <div className="mt-3 text-sm font-medium text-[#3557ff]">
                    {screen.subtitle}
                  </div>

                  <p className="mt-5 max-w-md text-base leading-7 text-[#6c758b] sm:text-lg">
                    {screen.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#10154d]">
                    Product Preview
                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>

                {/* Screenshot */}
                <div
                  className={`relative min-h-[300px] overflow-hidden bg-[#e8ecf5] p-5 sm:min-h-[380px] sm:p-8 lg:min-h-[450px] ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#eef2ff] to-[#dfe5f2]" />

                  <div className="relative h-full overflow-hidden rounded-2xl border border-white/80 bg-white shadow-[0_20px_50px_rgba(16,21,77,0.12)]">
                    <img
                      src={screen.image}
                      alt={screen.title}
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />

                    {/* Screenshot Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#f4f6ff] to-[#e2e7f5]">
                      <div className="w-[82%] rounded-2xl border border-white bg-white p-5 shadow-xl">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="h-3 w-28 rounded bg-[#dbe1ed]" />
                            <div className="mt-2 h-2 w-20 rounded bg-[#edf0f5]" />
                          </div>

                          <div className="h-8 w-8 rounded-xl bg-[#eef2ff]" />
                        </div>

                        <div className="mt-5 grid grid-cols-3 gap-3">
                          <div className="h-16 rounded-xl bg-[#f4f6fb]" />
                          <div className="h-16 rounded-xl bg-[#f4f6fb]" />
                          <div className="h-16 rounded-xl bg-[#eef2ff]" />
                        </div>

                        <div className="mt-4 h-28 rounded-xl bg-[#f7f8fc]" />

                        <div className="mt-4 grid grid-cols-2 gap-3">
                          <div className="h-10 rounded-xl bg-[#f2f4f9]" />
                          <div className="h-10 rounded-xl bg-[#eef2ff]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY LMS
      ===================================================== */}

      <section id="why-us" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Left */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#3557ff]" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#3557ff]">
                  Why LoanFlow
                </span>
              </div>

              <h2 className="text-4xl font-light leading-tight tracking-tight text-[#10154d] sm:text-5xl lg:text-6xl">
                Stop managing lending
                <span className="block font-medium text-[#3557ff]">
                  across disconnected systems.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#68738b]">
                Give teams a centralized operating layer where customer,
                application, collection and financial information stays
                connected.
              </p>

              <button
                onClick={() => scrollTo("contact")}
                className="group mt-8 flex items-center gap-3 rounded-full bg-[#10154d] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#3557ff]"
              >
                Talk to Our Team
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>

            {/* Cards */}
            <div className="grid gap-4">
              {[
                {
                  icon: Users,
                  title: "Centralized Customer Data",
                  text: "Keep customers, applications, documents and loan information organized in one place.",
                },
                {
                  icon: Building2,
                  title: "Multi-Branch Operations",
                  text: "Coordinate lending activity across branches, teams and portfolios with centralized visibility.",
                },
                {
                  icon: WalletCards,
                  title: "Collection Intelligence",
                  text: "Monitor EMI performance, overdue balances, penalties, bounce charges and collection activity.",
                },
                {
                  icon: LineChart,
                  title: "Operational Reporting",
                  text: "Turn lending and financial data into clear reports for better business decisions.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-[1.75rem] border border-[#10154d]/8 bg-[#f8f9fc] p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_50px_rgba(16,21,77,0.08)]"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eef2ff] text-[#3557ff] transition-all duration-300 group-hover:bg-[#3557ff] group-hover:text-white">
                        <Icon size={21} />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-[#10154d]">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[#70798f]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section id="faq" className="bg-[#f7f9fc] py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#3557ff]/10 bg-[#eef2ff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3557ff]">
              Frequently Asked Questions
            </div>

            <h2 className="text-4xl font-light leading-tight tracking-tight text-[#10154d] sm:text-5xl lg:text-6xl">
              Questions about our
              <span className="block font-medium text-[#3557ff]">
                Loan Management System?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#69738b] sm:text-lg">
              Find answers to common questions about loan workflows, accounting,
              collections, customization and implementation.
            </p>
          </div>

          {/* FAQ List */}
          <div className="mt-14 rounded-2xl border border-[#10154d]/8 bg-white p-6 shadow-sm sm:p-8">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>

          {/* Bottom Contact Box */}
          <div className="mt-12 rounded-[2rem] border border-[#10154d]/8 bg-white p-7 text-center shadow-sm sm:p-9">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef2ff] text-[#3557ff]">
              <Phone size={20} />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-[#10154d] sm:text-2xl">
              Still have questions?
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#70798f] sm:text-base">
              Talk to our team to understand how the LMS can fit your lending
              workflow and business requirements.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                onClick={() => scrollTo("contact")}
                className="group flex items-center justify-center gap-2 rounded-full bg-[#3557ff] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2647ef] hover:shadow-lg"
              >
                Book a Demo
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20have%20some%20questions%20about%20your%20Loan%20Management%20System."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-[#10154d]/12 bg-white px-6 py-3.5 text-sm font-semibold text-[#10154d] transition-all hover:-translate-y-0.5 hover:border-[#3557ff]/30 hover:shadow-md"
              >
                <Smartphone size={17} />
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        id="contact"
        className="bg-[#f7f9fc] px-6 py-20 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#10154d] px-7 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full border border-white/10" />

            <div className="absolute bottom-[-180px] left-[30%] h-96 w-96 rounded-full bg-[#3557ff]/20 blur-3xl" />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#8ea1ff]" />

                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#aebaff]">
                    Ready to Modernize Lending?
                  </span>
                </div>

                <h2 className="text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
                  See how your lending operation can
                  <span className="block font-medium text-[#8ea1ff]">
                    work from one platform.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
                  Book a personalized walkthrough and explore the workflows,
                  dashboards and accounting capabilities for your business.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#10154d] transition hover:bg-[#e9edff]"
                >
                  <Phone size={18} />
                  Call +91 98765 43210
                </a>

                <a
                  href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo%20of%20your%20Loan%20Management%20System."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 rounded-full bg-[#3557ff] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#4868ff]"
                >
                  WhatsApp for Demo
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-[#10154d]/8 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-base font-semibold text-[#10154d]">
                Loan<span className="text-[#3557ff]">Flow</span>
              </div>

              <p className="mt-1 text-xs text-[#7c8499]">
                Smarter lending operations. One connected platform.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5 text-sm text-[#69738b]">
              <button onClick={() => scrollTo("features")}>Features</button>

              <button onClick={() => scrollTo("workflow")}>Workflow</button>

              <button onClick={() => scrollTo("dashboard")}>Dashboard</button>

              <button onClick={() => scrollTo("contact")}>Contact</button>

              <a href="tel:+919876543210" className="flex items-center gap-2">
                <Phone size={15} />
                +91 98765 43210
              </a>
            </div>

            <div className="text-xs text-[#8a92a6]">
              © {new Date().getFullYear()} LoanFlow. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* =====================================================
          FLOATING ACTIONS
      ===================================================== */}

      {/* Phone */}
      <a
        href="tel:+919876543210"
        aria-label="Call"
        className="fixed bottom-24 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#10154d] text-white shadow-[0_10px_30px_rgba(16,21,77,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#3557ff] sm:right-6"
      >
        <Phone size={19} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20Loan%20Management%20System."
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_15px_35px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 sm:right-6"
      >
        <FaWhatsapp size={23} />
      </a>
    </div>
  );
}
