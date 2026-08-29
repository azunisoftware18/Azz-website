import React, { useState } from "react";
import {
  FaCalendarCheck,
  FaWhatsapp,
  FaPhone,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

import { BiLogoPlayStore } from "react-icons/bi";
import {
  Bell,
  BookOpenText,
  BusFront,
  ChartColumn,
  Headset,
  IdCard,
  LibraryBig,
  PencilSparkles,
  PhoneCall,
  ReceiptText,
  RotateCcw,
  Shield,
  Smartphone,
  Star,
  TableOfContents,
  Users,
  X,
} from "lucide-react";

function Sms() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [faqOpen, setFaqOpen] = useState([false, false, false, false]);
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [studentCount, setStudentCount] = useState(1200);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleFaq = (index) => {
    const newState = [...faqOpen];
    newState[index] = !newState[index];
    setFaqOpen(newState);
  };
  const openModal = () => {
    setModalOpen(true);
    setFormSubmitted(false);
  };
  const closeModal = () => setModalOpen(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };
  const handleTabChange = (tab) => setActiveTab(tab);

  const calcHours = Math.round((studentCount / 1200) * 180);
  const calcPaper = Math.round((studentCount / 1200) * 288000);

  return (
    <>
      <div className="font-sans bg-slate-50 text-slate-800 antialiased selection:bg-brand-500 selection:text-white">
        {/* Header – same as before */}

        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Brand */}
              <div className="flex items-center gap-3">
                <a href="#" className="flex items-center gap-2 group">
                  {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 to-brand-500 flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
                    A
                  </div> */}
                  <div className="flex flex-col">
                    <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">
                      Aadishala<span className="text-brand-600"> ERP</span>
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                      School Operating System
                    </span>
                  </div>
                </a>
              </div>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-slate-600">
                <a
                  href="#dashboard-preview"
                  className="hover:text-brand-600 transition-colors"
                >
                  Dashboard UI
                </a>
                <a
                  href="#modules"
                  className="hover:text-brand-600 transition-colors"
                >
                  ERP Modules
                </a>
                <a
                  href="#mobile-app"
                  className="hover:text-brand-600 transition-colors"
                >
                  Mobile App
                </a>
                <a
                  href="#calculator"
                  className="hover:text-brand-600 transition-colors"
                >
                  ROI Calculator
                </a>
                <a
                  href="#pricing"
                  className="hover:text-brand-600 transition-colors"
                >
                  Why Aadishala
                </a>
                <a
                  href="#faq"
                  className="hover:text-brand-600 transition-colors"
                >
                  FAQ
                </a>
              </nav>

              {/* Right side */}
              <div className="flex items-center gap-3">
                <a
                  href="tel:+917412066477"
                  className="hidden sm:flex items-center gap-2 text-slate-700 hover:text-brand-600 font-semibold text-sm px-3 py-2 rounded-lg hover:bg-slate-100 transition-all border border-transparent hover:border-slate-200"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center">
                    <PhoneCall />
                  </div>

                  {/* change it */}
                  <span className="hidden md:inline">+91 74120 66477</span>
                </a>

                <button
                  onClick={openModal}
                  className="bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                >
                  <FaCalendarCheck className="text-xs" />
                  <span>Book Free Demo</span>
                </button>

                <button
                  onClick={toggleMobileMenu}
                  className="lg:hidden text-slate-600 hover:text-slate-900 p-2 rounded-lg focus:outline-none"
                >
                  {mobileMenuOpen ? (
                    <FaTimes className="text-xl" />
                  ) : (
                    <FaBars className="text-xl" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 ${mobileMenuOpen ? "block" : "hidden"}`}
          >
            <a
              href="#dashboard-preview"
              onClick={toggleMobileMenu}
              className="block py-2 text-slate-700 font-medium hover:text-brand-600"
            >
              Dashboard UI
            </a>
            <a
              href="#modules"
              onClick={toggleMobileMenu}
              className="block py-2 text-slate-700 font-medium hover:text-brand-600"
            >
              ERP Modules
            </a>
            <a
              href="#mobile-app"
              onClick={toggleMobileMenu}
              className="block py-2 text-slate-700 font-medium hover:text-brand-600"
            >
              Parent/Student App
            </a>
            <a
              href="#calculator"
              onClick={toggleMobileMenu}
              className="block py-2 text-slate-700 font-medium hover:text-brand-600"
            >
              ROI Calculator
            </a>
            <a
              href="tel:+917412066477"
              className="flex items-center gap-2 py-2 text-brand-600 font-semibold"
            >
              <FaPhone /> Call Sales: +91 74120 66477
            </a>
            <button
              onClick={() => {
                toggleMobileMenu();
                openModal();
              }}
              className="w-full bg-brand-600 text-white font-semibold py-3 rounded-xl shadow"
            >
              Request Live Demo
            </button>
          </div>
        </header>

        {/* Hero Section – using bg-[radial-gradient(...)] directly */}
        <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.12)_0%,rgba(255,255,255,0)_70%)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
                {/* <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span> */}
                {/* <span className="bg-brand-600 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">
                  New v4.5
                </span> */}
                <span>AI-Powered School Automation & CBSE/ICSE Compliant</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-none">
                Smart Next-Gen{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-brand-700 to-indigo-600">
                  School ERP Software
                </span>{" "}
                for Modern Institutions
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
                Simplify school management from admission to alumni.
                Effortlessly handle online fee collection, live RFID attendance,
                examinations, automated timetables, GPS transport, and instant
                parent communication.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={openModal}
                  className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold text-base rounded-2xl shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3"
                >
                  <span>Schedule a Personalized Demo</span>
                  <FaCalendarCheck className="text-sm" />
                </button>
                <a
                  href="https://wa.me/917412066477?text=Hi%20Azzunique,%20I%20would%20like%20to%20get%20a%20demo%20and%20pricing%20details%20for%20school%20management%20system."
                  target="_blank"
                  className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base rounded-2xl shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3"
                >
                  <FaWhatsapp className="text-lg" />
                  <span>Instant WhatsApp Chat</span>
                </a>
              </div>
              <div className="mt-12 pt-8 border-t border-slate-200/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-600">
                <div className="flex flex-col items-center">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    500+
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                    Schools & Academies
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    500,000+
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                    Students Managed
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    99.9%
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                    Server Uptime SLA
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    100%
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                    CBSE/ICSE Compliant
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Preview – all Tailwind classes */}
        <section
          id="dashboard-preview"
          className="py-16 bg-white border-y border-slate-200/80"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-brand-600 font-bold text-sm tracking-widest uppercase">
                UI Screenshots & Demo
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                Explore the Aadishala Admin Portal
              </h2>
              <p className="mt-3 text-slate-600 text-base">
                Clean, intuitive, and designed for fast daily school operations.
                Click tabs to inspect live modules.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-6">
              {["overview", "fees", "attendance", "exams", "transport"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-all ${activeTab === tab ? "bg-brand-600 text-white shadow-md" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
                  >
                    <i
                      className={`fa-solid ${tab === "overview" ? "fa-chart-pie" : tab === "fees" ? "fa-credit-card" : tab === "attendance" ? "fa-id-card" : tab === "exams" ? "fa-graduation-cap" : "fa-bus"}`}
                    ></i>
                    {tab === "overview" && "Main Dashboard"}
                    {tab === "fees" && "Fee Management"}
                    {tab === "attendance" && "RFID Attendance"}
                    {tab === "exams" && "Examination & Report"}
                    {tab === "transport" && "Transport & GPS"}
                  </button>
                ),
              )}
            </div>

            {/* Dashboard Display */}
            <div className="relative rounded-2xl bg-slate-900 p-3 sm:p-5 shadow-2xl border border-slate-800">
              {/* Browser Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                  </div>
                  <span className="ml-3 font-mono text-slate-400 bg-slate-800 px-3 py-1 rounded-md text-[11px] flex items-center gap-1.5">
                    <i className="fa-solid fa-lock text-emerald-400 text-[10px]"></i>
                    https://school-demo.azzunique.com/admin/dashboard
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-3 font-medium">
                  <span className="text-emerald-400 flex items-center gap-1">
                    <i className="fa-solid fa-circle text-[8px]"></i> System
                    Live
                  </span>
                  <span>Academic Session: 2026-27</span>
                </div>
              </div>

              {/* Tab Content */}
              <div className="bg-slate-950 rounded-xl p-4 sm:p-6 text-slate-100 min-h-[460px]">
                {activeTab === "overview" && (
                  <div>
                    {/* Metric Cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                        <div className="flex justify-between items-center text-slate-400 text-xs font-medium">
                          <span>Total Students</span>
                          <i className="fa-solid fa-user-graduate text-brand-500 text-base"></i>
                        </div>
                        <div className="text-2xl font-bold mt-2 text-white">
                          2,480
                        </div>
                        <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                          <i className="fa-solid fa-arrow-up"></i> +12% from
                          last term
                        </div>
                      </div>
                      <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                        <div className="flex justify-between items-center text-slate-400 text-xs font-medium">
                          <span>Today's Attendance</span>
                          <i className="fa-solid fa-clipboard-user text-emerald-500 text-base"></i>
                        </div>
                        <div className="text-2xl font-bold mt-2 text-emerald-400">
                          96.4%
                        </div>
                        <div className="text-[11px] text-slate-400 mt-1">
                          2,391 Present / 89 Absent
                        </div>
                      </div>
                      <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                        <div className="flex justify-between items-center text-slate-400 text-xs font-medium">
                          <span>Fee Collection (This Month)</span>
                          <i className="fa-solid fa-indian-rupee-sign text-amber-500 text-base"></i>
                        </div>
                        <div className="text-2xl font-bold mt-2 text-white">
                          ₹ 42,85,000
                        </div>
                        <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                          <i className="fa-solid fa-circle-check"></i> 88%
                          Collection Rate
                        </div>
                      </div>
                      <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                        <div className="flex justify-between items-center text-slate-400 text-xs font-medium">
                          <span>Active Fleet (Buses)</span>
                          <i className="fa-solid fa-bus text-indigo-400 text-base"></i>
                        </div>
                        <div className="text-2xl font-bold mt-2 text-white">
                          18 / 18
                        </div>
                        <div className="text-[11px] text-indigo-400 mt-1">
                          All Routes On Time
                        </div>
                      </div>
                    </div>

                    {/* Chart and Alerts */}
                    <div className="grid lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2 bg-slate-900 p-4 rounded-xl border border-slate-800">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-bold text-sm text-slate-200">
                            Monthly Fee Collection & Expenses Analytics
                          </h4>
                          <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded">
                            2026 Fiscal Year
                          </span>
                        </div>
                        <div className="h-44 flex items-end justify-between gap-2 pt-6 px-2 border-b border-slate-800">
                          <div className="flex-1 flex flex-col items-center gap-2">
                            <div
                              className="w-full bg-brand-500/80 rounded-t h-24 hover:bg-brand-400 transition-colors"
                              title="Apr: 35L"
                            ></div>
                            <span className="text-[10px] text-slate-400">
                              Apr
                            </span>
                          </div>
                          <div className="flex-1 flex flex-col items-center gap-2">
                            <div
                              className="w-full bg-brand-500/80 rounded-t h-32 hover:bg-brand-400 transition-colors"
                              title="May: 48L"
                            ></div>
                            <span className="text-[10px] text-slate-400">
                              May
                            </span>
                          </div>
                          <div className="flex-1 flex flex-col items-center gap-2">
                            <div
                              className="w-full bg-brand-500/80 rounded-t h-28 hover:bg-brand-400 transition-colors"
                              title="Jun: 40L"
                            ></div>
                            <span className="text-[10px] text-slate-400">
                              Jun
                            </span>
                          </div>
                          <div className="flex-1 flex flex-col items-center gap-2">
                            <div
                              className="w-full bg-brand-500/80 rounded-t h-36 hover:bg-brand-400 transition-colors"
                              title="Jul: 52L"
                            ></div>
                            <span className="text-[10px] text-slate-400">
                              Jul
                            </span>
                          </div>
                          <div className="flex-1 flex flex-col items-center gap-2">
                            <div
                              className="w-full bg-emerald-500 rounded-t h-40 hover:bg-emerald-400 transition-colors"
                              title="Aug: 58L"
                            ></div>
                            <span className="text-[10px] text-emerald-400 font-bold">
                              Aug
                            </span>
                          </div>
                          <div className="flex-1 flex flex-col items-center gap-2">
                            <div
                              className="w-full bg-slate-800 rounded-t h-16"
                              title="Sep (Est)"
                            ></div>
                            <span className="text-[10px] text-slate-400">
                              Sep
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
                        <div>
                          <h4 className="font-bold text-sm text-slate-200 mb-3 flex items-center gap-2">
                            <i className="fa-solid fa-bell text-amber-400"></i>{" "}
                            Recent ERP Notifications
                          </h4>
                          <div className="space-y-3 text-xs">
                            <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
                              <div className="text-slate-200 font-semibold">
                                Automatic SMS Alerts Sent
                              </div>
                              <div className="text-slate-400 text-[11px]">
                                89 absence SMS sent to parents via WhatsApp API.
                              </div>
                            </div>
                            <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
                              <div className="text-slate-200 font-semibold">
                                Online Fee Received
                              </div>
                              <div className="text-slate-400 text-[11px]">
                                Rohan Sharma (Class X-A) paid ₹ 14,500 via UPI.
                              </div>
                            </div>
                            <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
                              <div className="text-slate-200 font-semibold">
                                Timetable Substitution
                              </div>
                              <div className="text-slate-400 text-[11px]">
                                Prof. Mehta on leave. Period 3 auto-assigned to
                                Ms. Verma.
                              </div>
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] text-brand-400 hover:underline cursor-pointer font-medium text-center block mt-3">
                          View Live Audit Logs &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                {/* Similar for other tabs – using only Tailwind classes */}

                {activeTab === "fees" && (
                  <div>
                    <div className="flex flex-wrap justify-between items-center mb-6 gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          Fee Collection & Online Gateway
                        </h3>
                        <p className="text-xs text-slate-400">
                          Automated invoices, UPI/Card payments & customized
                          receipt generation
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5">
                          <i className="fa-solid fa-shield-halved"></i> Payment
                          Gateway Connected
                        </span>
                      </div>
                    </div>
                    <div className="overflow-x-auto rounded-lg border border-slate-800">
                      <table className="w-full text-left text-xs text-slate-300">
                        <thead className="bg-slate-900 text-slate-400 uppercase text-[10px] tracking-wider">
                          <tr>
                            <th className="p-3">Receipt #</th>
                            <th className="p-3">Student Name</th>
                            <th className="p-3">Class & Sec</th>
                            <th className="p-3">Fee Type</th>
                            <th className="p-3">Amount</th>
                            <th className="p-3">Payment Mode</th>
                            <th className="p-3">Status</th>
                            <th className="p-3 text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 font-mono">
                          <tr className="hover:bg-slate-900/50">
                            <td className="p-3 text-brand-400 font-semibold">
                              #AZ-9841
                            </td>
                            <td className="p-3 font-sans font-medium text-white">
                              Aarav Singhania
                            </td>
                            <td className="p-3 font-sans">Class 10-B</td>
                            <td className="p-3 font-sans">Q2 Tuition + Bus</td>
                            <td className="p-3 font-bold text-emerald-400">
                              ₹ 18,500
                            </td>
                            <td className="p-3 font-sans">
                              <span className="bg-indigo-950 text-indigo-300 border border-indigo-800 px-2 py-0.5 rounded text-[10px]">
                                UPI / Razorpay
                              </span>
                            </td>
                            <td className="p-3 font-sans">
                              <span className="bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded text-[10px]">
                                Paid
                              </span>
                            </td>
                            <td className="p-3 text-right font-sans">
                              <button className="text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded">
                                <i className="fa-solid fa-print"></i> Print
                              </button>
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-900/50">
                            <td className="p-3 text-brand-400 font-semibold">
                              #AZ-9842
                            </td>
                            <td className="p-3 font-sans font-medium text-white">
                              Ananya Verma
                            </td>
                            <td className="p-3 font-sans">Class 8-A</td>
                            <td className="p-3 font-sans">
                              Annual Activity Fee
                            </td>
                            <td className="p-3 font-bold text-white">
                              ₹ 6,200
                            </td>
                            <td className="p-3 font-sans">
                              <span className="bg-slate-800 text-slate-300 border border-slate-700 px-2 py-0.5 rounded text-[10px]">
                                Bank Transfer
                              </span>
                            </td>
                            <td className="p-3 font-sans">
                              <span className="bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded text-[10px]">
                                Paid
                              </span>
                            </td>
                            <td className="p-3 text-right font-sans">
                              <button className="text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded">
                                <i className="fa-solid fa-print"></i> Print
                              </button>
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-900/50">
                            <td className="p-3 text-brand-400 font-semibold">
                              #AZ-9843
                            </td>
                            <td className="p-3 font-sans font-medium text-white">
                              Kabir Patel
                            </td>
                            <td className="p-3 font-sans">Class 12-C</td>
                            <td className="p-3 font-sans">Q2 Tuition Fee</td>
                            <td className="p-3 font-bold text-rose-400">
                              ₹ 22,000
                            </td>
                            <td className="p-3 font-sans">
                              <span className="text-slate-500 font-sans">
                                Pending
                              </span>
                            </td>
                            <td className="p-3 font-sans">
                              <span className="bg-rose-950 text-rose-400 border border-rose-800 px-2 py-0.5 rounded text-[10px]">
                                Due in 2 days
                              </span>
                            </td>
                            <td className="p-3 text-right font-sans">
                              <button className="text-xs text-brand-300 bg-brand-950 hover:bg-brand-900 border border-brand-800 px-2.5 py-1 rounded flex items-center gap-1 justify-end ml-auto">
                                <i className="fa-brands fa-whatsapp"></i> Remind
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === "attendance" && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          Biometric & RFID Attendance Console
                        </h3>
                        <p className="text-xs text-slate-400">
                          Real-time gate punch logs with automatic SMS dispatch
                          to parents
                        </p>
                      </div>
                      <span className="bg-brand-500/20 text-brand-400 border border-brand-500/30 text-xs px-3 py-1 rounded-lg">
                        5 RFID Gate Readers Active
                      </span>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 md:col-span-2">
                        <h4 className="text-xs font-bold text-slate-300 uppercase mb-3">
                          Live Punch Stream (Main Gate 1)
                        </h4>
                        <div className="space-y-2 font-mono text-xs">
                          <div className="flex items-center justify-between p-2 rounded bg-slate-800/80 border border-slate-700/60">
                            <div className="flex items-center gap-2">
                              <i className="fa-solid fa-circle-check text-emerald-400"></i>
                              <span className="text-white font-sans font-medium">
                                Vikramaditya Roy (XI-B)
                              </span>
                            </div>
                            <span className="text-slate-400 text-[11px]">
                              08:14:02 AM - Card Punch
                            </span>
                          </div>
                          <div className="flex items-center justify-between p-2 rounded bg-slate-800/80 border border-slate-700/60">
                            <div className="flex items-center gap-2">
                              <i className="fa-solid fa-circle-check text-emerald-400"></i>
                              <span className="text-white font-sans font-medium">
                                Sneha Kulkarni (IX-A)
                              </span>
                            </div>
                            <span className="text-slate-400 text-[11px]">
                              08:13:50 AM - Face Recognition
                            </span>
                          </div>
                          <div className="flex items-center justify-between p-2 rounded bg-slate-800/80 border border-slate-700/60">
                            <div className="flex items-center gap-2">
                              <i className="fa-solid fa-triangle-exclamation text-amber-400"></i>
                              <span className="text-white font-sans font-medium">
                                Rohan Gupta (VII-C)
                              </span>
                            </div>
                            <span className="text-amber-400 text-[11px]">
                              08:35:10 AM - Late Arrival
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
                        <div>
                          <h4 className="text-xs font-bold text-slate-300 uppercase mb-3">
                            Daily Breakdown
                          </h4>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span className="text-slate-400">
                                  Students Present
                                </span>
                                <span className="text-emerald-400 font-bold">
                                  96.4%
                                </span>
                              </div>
                              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                <div className="bg-emerald-500 h-full w-[96.4%]"></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span className="text-slate-400">
                                  Teachers Present
                                </span>
                                <span className="text-brand-400 font-bold">
                                  98.5%
                                </span>
                              </div>
                              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                <div className="bg-brand-500 h-full w-[98.5%]"></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span className="text-slate-400">
                                  Non-Teaching Staff
                                </span>
                                <span className="text-indigo-400 font-bold">
                                  100%
                                </span>
                              </div>
                              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                <div className="bg-indigo-500 h-full w-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="w-full mt-4 bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold py-2 rounded-lg">
                          Send Absentee SMS Alerts
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "exams" && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          Exam Engine & Automated Marksheets
                        </h3>
                        <p className="text-xs text-slate-400">
                          CBSE CCE compliant grading, rank list calculation, and
                          single-click PDF report card generation
                        </p>
                      </div>
                      <span className="bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs px-3 py-1 rounded-lg">
                        Term 1 Assessment
                      </span>
                    </div>
                    <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 mb-4">
                      <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-800">
                        <div>
                          <span className="text-xs text-slate-400 block">
                            Selected Examination
                          </span>
                          <span className="text-sm font-bold text-white">
                            Half Yearly Examination 2026-27
                          </span>
                        </div>
                        <div>
                          <span className="text-xs text-slate-400 block">
                            Class & Section
                          </span>
                          <span className="text-sm font-bold text-brand-400">
                            Class 10 - Section A
                          </span>
                        </div>
                        <button className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs px-3 py-2 rounded-lg font-semibold flex items-center gap-1.5">
                          <i className="fa-solid fa-file-pdf"></i> Download
                          Class Marksheets (PDF)
                        </button>
                      </div>
                      <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
                        <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                          <span className="text-[10px] text-slate-400 block">
                            Mathematics
                          </span>
                          <span className="text-sm font-bold text-emerald-400">
                            98 / 100 (A1)
                          </span>
                        </div>
                        <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                          <span className="text-[10px] text-slate-400 block">
                            Science & Tech
                          </span>
                          <span className="text-sm font-bold text-emerald-400">
                            95 / 100 (A1)
                          </span>
                        </div>
                        <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                          <span className="text-[10px] text-slate-400 block">
                            English Core
                          </span>
                          <span className="text-sm font-bold text-brand-400">
                            89 / 100 (A2)
                          </span>
                        </div>
                        <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                          <span className="text-[10px] text-slate-400 block">
                            Social Studies
                          </span>
                          <span className="text-sm font-bold text-emerald-400">
                            92 / 100 (A1)
                          </span>
                        </div>
                        <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 col-span-2 md:col-span-1">
                          <span className="text-[10px] text-slate-400 block">
                            Overall Rank
                          </span>
                          <span className="text-sm font-extrabold text-amber-400">
                            Rank # 02
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "transport" && (
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          Live Transport GPS Fleet Tracker
                        </h3>
                        <p className="text-xs text-slate-400">
                          Real-time bus tracking, speed alerts & route
                          optimization for parents and school admin
                        </p>
                      </div>
                      <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-3 py-1 rounded-lg flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>{" "}
                        Live GPS Streaming
                      </span>
                    </div>
                    <div className="relative h-64 bg-slate-900 rounded-xl border border-slate-800 overflow-hidden flex items-center justify-center p-4">
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
                      <svg
                        className="absolute inset-0 w-full h-full text-brand-500/40"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="6,6"
                      >
                        <path
                          d="M 50 150 Q 200 50 400 120 T 700 180"
                          fill="none"
                        />
                      </svg>
                      <div className="absolute top-1/4 left-1/3 bg-brand-600 text-white p-2 rounded-xl shadow-lg flex items-center gap-2 border border-brand-400 animate-bounce">
                        <i className="fa-solid fa-bus text-xs"></i>
                        <div className="text-[11px] leading-tight font-sans">
                          <div className="font-bold">Bus #04 - Route North</div>
                          <div className="text-[9px] text-brand-200">
                            Speed: 34 km/h • Next: Sector 14
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-1/3 right-1/4 bg-amber-600 text-white p-2 rounded-xl shadow-lg flex items-center gap-2 border border-amber-400">
                        <i className="fa-solid fa-bus text-xs"></i>
                        <div className="text-[11px] leading-tight font-sans">
                          <div className="font-bold">Bus #12 - Route South</div>
                          <div className="text-[9px] text-amber-200">
                            Speed: 28 km/h • Dropping Off
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-3 bg-slate-950/90 border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300">
                        Total Bus Capacity: 720 Seats | Active Occupancy: 645
                        Students
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Modules Section – only Tailwind classes */}
        <section id="modules" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-brand-600 font-bold text-sm tracking-widest uppercase">
                All-In-One Solution
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                10 Powerful Integrated ERP Modules
              </h2>
              <p className="mt-4 text-slate-600 text-base sm:text-lg">
                Everything required to run your school smoothly, eliminate
                manual paperwork, and provide parents a premium digital
                experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-800 text-white flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <i className="fa-solid fa-id-card">
                    <IdCard />
                  </i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Student Management
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  360° student lifecycle tracking. From digital enquiry and
                  online admissions to TC generation, document vaults, and
                  parent profiles.
                </p>
                <ul className="text-xs text-slate-500 space-y-2 font-medium">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-emerald-500"></i> Auto
                    Registration & ID Card Generator
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-emerald-500"></i> House
                    & Section Allocation
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-800 text-white flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <i className="fa-solid fa-id-card">
                    <RotateCcw />
                  </i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Attendance & RFID
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Biometric fingerprint, RFID card, and facial recognition
                  support. Instant absentee notifications dispatched to parents
                  via SMS & WhatsApp.
                </p>
                <ul className="text-xs text-slate-500 space-y-2 font-medium">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-emerald-500"></i> Auto
                    Daily & Subject-wise Attendance
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-emerald-500"></i>
                    Leave Management Workflow
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-800 text-white flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <i className="fa-solid fa-id-card">
                    <ReceiptText />
                  </i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Fees & Online Payments
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Customizable fee structures, installments, discounts, late fee
                  penalty rules, and instant UPI/NetBanking payment gateway
                  integration.
                </p>
                <ul className="text-xs text-slate-500 space-y-2 font-medium">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-emerald-500"></i>{" "}
                    Automated Fee Receipts & Invoices
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-emerald-500"></i>{" "}
                    Defaulter List & Auto Reminders
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-800 text-white flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <i className="fa-solid fa-id-card">
                    {" "}
                    <ChartColumn />
                  </i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Examination & Grading
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Effortlessly calculate CGPA, ranks, sub-subject marks, and
                  generate customizable CBSE/ICSE format print-ready report
                  cards in one click.
                </p>
                <ul className="text-xs text-slate-500 space-y-2 font-medium">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-emerald-500"></i>{" "}
                    Online Exam Portal & Question Bank
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-emerald-500"></i>{" "}
                    Single-Click Report Card Downloads
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-800 text-white flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <i className="fa-solid fa-id-card">
                    {" "}
                    <TableOfContents />
                  </i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Smart Timetable Generator
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Conflict-free AI timetable builder for class schedules,
                  subject constraints, teacher workload balancing, and instant
                  teacher substitution logic.
                </p>
                <ul className="text-xs text-slate-500 space-y-2 font-medium">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-emerald-500"></i>{" "}
                    Automated Substitution Management
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-emerald-500"></i> Room
                    & Lab Allocation
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-800 text-white flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <i className="fa-solid fa-id-card">
                    <Users />
                  </i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  HR & Staff Payroll
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Manage teaching & non-teaching staff, track attendance,
                  process monthly salaries, generate pay slips, calculate PF,
                  ESI, and leaves.
                </p>
                <ul className="text-xs text-slate-500 space-y-2 font-medium">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-emerald-500"></i>{" "}
                    One-Click Monthly Payroll Disbursal
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-emerald-500"></i> Staff
                    Performance & Documents
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-800 text-white flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <i className="fa-solid fa-id-card">
                    <BusFront />
                  </i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Transport & Fleet GPS
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Route planning, pickup/drop point assignments, driver logs,
                  fuel tracking, and real-time live bus movement on parent
                  mobile apps.
                </p>
                <ul className="text-xs text-slate-500 space-y-2 font-medium">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-emerald-500"></i> Live
                    Bus Tracking for Parents
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-emerald-500"></i>{" "}
                    Speeding & Geofence Alerts
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-800 text-white flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <i className="fa-solid fa-id-card">
                    <LibraryBig />
                  </i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Inventory & Library
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Track school assets, uniforms, stationery, sports equipment,
                  vendor purchase orders, and complete library book barcode
                  issuing.
                </p>
                <ul className="text-xs text-slate-500 space-y-2 font-medium">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-emerald-500"></i>{" "}
                    Barcode Book Search & Issue
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-emerald-500"></i> Stock
                    Audit & Re-order Alerts
                  </li>
                </ul>
              </div>

              {/* Add remaining 8 module cards similarly… */}
              {/* For brevity, we include the last one (combined) */}
              <div className="bg-gradient-to-br from-brand-900 to-indigo-900 text-white p-8 rounded-2xl shadow-xl flex flex-col justify-between col-span-1 md:col-span-2 lg:col-span-1">
                <div>
                  <div className="inline-block px-3 py-1 bg-brand-500/30 text-brand-300 rounded-full text-xs font-bold uppercase mb-4 border border-brand-400/30">
                    Analytics & Mobile App
                  </div>
                  <h3 className="text-2xl font-extrabold mb-3">
                    Custom Reports & Mobile Apps
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    Export 100+ insightful financial, academic, and
                    administrative reports in Excel/PDF. Android & iOS apps for
                    Parents, Teachers, and Drivers.
                  </p>
                </div>
                <button
                  onClick={openModal}
                  className="w-full bg-white text-slate-900 font-bold py-3 rounded-xl hover:bg-slate-100 transition-colors text-sm shadow"
                >
                  Explore Full Feature Matrix
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile App Section */}
        <section
          id="mobile-app"
          className="py-20 bg-white border-b border-slate-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-brand-600 font-bold text-sm tracking-widest uppercase">
                  Branded Android & iOS App
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-6">
                  Keep Parents Engaged with Your School's Own Branded App
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-8">
                  Bridge the gap between school and home. Give parents peace of
                  mind with instant updates on homework, fee payments, exam
                  dates, notice board announcements, and live school bus
                  locations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 font-bold">
                      <i className="fa-solid fa-bell">
                        {" "}
                        <Bell />
                      </i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">
                        Instant Push Notifications
                      </h4>
                      <p className="text-slate-500 text-sm">
                        Send urgent notices, circulars, and event photo
                        galleries directly to parents' smartphones.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 font-bold">
                      <i className="fa-solid fa-mobile-screen">
                        <Smartphone />
                      </i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">
                        One-Click Fee Payment via UPI
                      </h4>
                      <p className="text-slate-500 text-sm">
                        Parents pay tuition fees effortlessly using Google Pay,
                        PhonePe, Paytm, or cards with instant receipt downloads.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 font-bold">
                      <i className="fa-solid fa-book-open">
                        <BookOpenText />
                      </i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">
                        Digital Homework & Attendance
                      </h4>
                      <p className="text-slate-500 text-sm">
                        Teachers upload assignments online, and parents track
                        subject-wise daily attendance in real-time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-2 rounded-xl">
                    <i className="fa-brands fa-google-play text-emerald-600 text-base"></i>{" "}
                    <BiLogoPlayStore className="text-xs" />
                    <span>Play Store Compatible</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-2 rounded-xl">
                    <i className="fa-brands fa-apple text-slate-900 text-base"></i>{" "}
                    App Store Compatible
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-72 sm:w-80 h-[560px] bg-slate-900 rounded-[48px] p-4 shadow-2xl border-[6px] border-slate-800 flex flex-col justify-between">
                  <div className="w-32 h-5 bg-slate-800 mx-auto rounded-b-2xl mb-2 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-slate-950"></div>
                  </div>
                  <div className="bg-slate-50 flex-1 rounded-[32px] overflow-hidden p-4 flex flex-col justify-between border border-slate-200">
                    <div>
                      <div className="flex items-center justify-between border-b pb-3 mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-brand-600 text-white flex items-center justify-center text-xs font-bold">
                            AZ
                          </div>
                          <span className="text-xs font-bold text-slate-800">
                            St. Xavier School
                          </span>
                        </div>
                        <i className="fa-solid fa-bell text-slate-400 text-xs"></i>
                      </div>
                      <div className="bg-gradient-to-r from-brand-600 to-indigo-600 text-white p-3 rounded-xl shadow-md mb-3">
                        <div className="text-[10px] text-brand-200">
                          Student Profile
                        </div>
                        <div className="text-sm font-bold">Rohan Sharma</div>
                        <div className="text-[10px] text-brand-100">
                          Class 10-A • Roll # 24
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-semibold mb-4">
                        <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100 flex flex-col items-center">
                          <i className="fa-solid fa-receipt text-amber-500 text-sm mb-1"></i>{" "}
                          Pay Fee
                        </div>
                        <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100 flex flex-col items-center">
                          <i className="fa-solid fa-user-check text-emerald-500 text-sm mb-1"></i>{" "}
                          Attendance
                        </div>
                        <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100 flex flex-col items-center">
                          <i className="fa-solid fa-book text-brand-500 text-sm mb-1"></i>{" "}
                          Homework
                        </div>
                        <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100 flex flex-col items-center">
                          <i className="fa-solid fa-bus text-purple-500 text-sm mb-1"></i>{" "}
                          Track Bus
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs">
                        <div className="font-bold text-slate-800 flex justify-between">
                          <span>Annual Science Exhibition</span>
                          <span className="text-[9px] text-brand-600 font-semibold">
                            Today
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-500 mt-1">
                          All parents are cordially invited to attend in the
                          Main Auditorium at 10:00 AM.
                        </p>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-2 border border-slate-200 flex justify-around text-slate-400 text-xs">
                      <i className="fa-solid fa-house text-brand-600"></i>
                      <i className="fa-solid fa-comments"></i>
                      <i className="fa-solid fa-chart-line"></i>
                      <i className="fa-solid fa-user"></i>
                    </div>
                  </div>
                  <div className="w-24 h-1 bg-slate-700 mx-auto rounded-full mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section id="calculator" className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-brand-400 font-bold text-sm tracking-widest uppercase">
                Savings & ROI Calculator
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">
                See How Much Time & Money Aadishala Saves Your School
              </h2>
              <p className="text-slate-400 text-base mt-3">
                Adjust the slider according to your school strength to estimate
                your annual operational savings.
              </p>
            </div>
            <div className="max-w-4xl mx-auto bg-slate-950 p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
              <div className="mb-10">
                <div className="flex justify-between items-center mb-4">
                  <label
                    htmlFor="student-range"
                    className="font-bold text-base sm:text-lg text-slate-200"
                  >
                    Total Student Strength:
                  </label>
                  <span className="text-2xl font-extrabold text-brand-400 font-mono bg-brand-950 border border-brand-800 px-4 py-1.5 rounded-xl">
                    {studentCount.toLocaleString("en-IN")} Students
                  </span>
                </div>
                <input
                  type="range"
                  id="student-range"
                  min="100"
                  max="5000"
                  step="50"
                  value={studentCount}
                  onChange={(e) => setStudentCount(Number(e.target.value))}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono">
                  <span>100 Students</span>
                  <span>2,500</span>
                  <span>5,000+ Students</span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-800">
                <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 text-center">
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    Hours Saved / Month
                  </div>
                  <div className="text-3xl font-extrabold text-emerald-400 font-mono mt-2">
                    {calcHours} Hours
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Automated fee & report card tasks
                  </div>
                </div>
                <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 text-center">
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    Annual Paperwork Saved
                  </div>
                  <div className="text-3xl font-extrabold text-brand-400 font-mono mt-2">
                    ₹ {calcPaper.toLocaleString("en-IN")}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Reduced printing & paper receipts
                  </div>
                </div>
                <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 text-center">
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    Faster Fee Recovery
                  </div>
                  <div className="text-3xl font-extrabold text-amber-400 font-mono mt-2">
                    45% Faster
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Automatic WhatsApp payment alerts
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <button
                  onClick={openModal}
                  className="px-8 py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl shadow-lg transition-all"
                >
                  Get Custom Proposal For Your School
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Azzunique */}
        <section id="pricing" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-brand-600 font-bold text-sm tracking-widest uppercase">
                Why Choose Aadishala
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                Built for Security, Reliability & Scale
              </h2>
              <p className="text-slate-600 text-base mt-3">
                Designed with feedback from over 500+ school principals and IT
                coordinators across India.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-xl font-bold mb-4">
                  <i className="fa-solid fa-shield-halved">
                    <Shield />
                  </i>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Bank-Grade Data Encryption
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  256-bit SSL encryption, automated daily cloud backups on AWS
                  server infrastructure, ensuring 100% student data privacy and
                  safety.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center text-xl font-bold mb-4">
                  <i className="fa-solid fa-headset">
                    <Headset />
                  </i>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Dedicated Onsite & Online Support
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Get a dedicated account manager, free staff onboarding
                  training sessions, and instant phone & WhatsApp support when
                  you need it.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-xl font-bold mb-4">
                  <i className="fa-solid fa-wand-magic-sparkles">
                    {" "}
                    <PencilSparkles />
                  </i>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Zero Maintenance Cost
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  No expensive servers or IT engineers needed. Automatic cloud
                  updates keep your school aligned with the latest educational
                  guidelines.
                </p>
              </div>
            </div>
            {/* Testimonials – same as before */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-slate-900 text-center mb-10">
                Trusted by Leading Educators
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-1 text-amber-400 text-xs mb-3">
                    <i className="fa-solid fa-star">
                      <Star />
                    </i>
                    <i className="fa-solid fa-star">
                      <Star />
                    </i>
                    <i className="fa-solid fa-star">
                      <Star />
                    </i>
                    <i className="fa-solid fa-star">
                      <Star />
                    </i>
                    <i className="fa-solid fa-star">
                      <Star />
                    </i>
                  </div>
                  <p className="text-slate-600 text-sm italic mb-4">
                    "Aadishala School ERP completely transformed our fee
                    collection. Parents love paying via the mobile app, and our
                    pending dues dropped by 60% within 3 months."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 font-bold flex items-center justify-center text-slate-700 text-sm">
                      RK
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">
                        Dr. Rajesh Khanna
                      </div>
                      <div className="text-slate-500 text-xs">
                        Principal, Modern Public Academy
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-1 text-amber-400 text-xs mb-3">
                    <i className="fa-solid fa-star">
                      <Star />
                    </i>
                    <i className="fa-solid fa-star">
                      <Star />
                    </i>
                    <i className="fa-solid fa-star">
                      <Star />
                    </i>
                    <i className="fa-solid fa-star">
                      <Star />
                    </i>
                    <i className="fa-solid fa-star">
                      <Star />
                    </i>
                  </div>
                  <p className="text-slate-600 text-sm italic mb-4">
                    "The automated CBSE report card generation saved our
                    teachers hundreds of hours during term exams. Highly
                    recommended for any school management team."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 font-bold flex items-center justify-center text-slate-700 text-sm">
                      SM
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">
                        Sunita Mehta
                      </div>
                      <div className="text-slate-500 text-xs">
                        Academic Director, St. Jude Convent
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-1 text-amber-400 text-xs mb-3">
                    <i className="fa-solid fa-star">
                      <Star />
                    </i>
                    <i className="fa-solid fa-star">
                      <Star />
                    </i>
                    <i className="fa-solid fa-star">
                      <Star />
                    </i>
                    <i className="fa-solid fa-star">
                      <Star />
                    </i>
                    <i className="fa-solid fa-star">
                      <Star />
                    </i>
                  </div>
                  <p className="text-slate-600 text-sm italic mb-4">
                    "The live GPS bus tracking feature has given our parents
                    complete safety assurance. Support from the Azzunique team
                    is always top class!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 font-bold flex items-center justify-center text-slate-700 text-sm">
                      AV
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">
                        Amitabh Verma
                      </div>
                      <div className="text-slate-500 text-xs">
                        Administrative Officer, Heritage International
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-brand-600 font-bold text-sm tracking-widest uppercase">
                Got Questions?
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "How long does it take to set up Aadishala ERP in our school?",
                  a: "Our setup process typically takes between 2 to 5 business days. Our technical team handles all data migration from your existing Excel files or previous software at no extra charge.",
                },
                {
                  q: "Is our student data secure and backed up?",
                  a: "Yes! Aadishala uses 256-bit SSL encryption and hosts data on secure AWS cloud servers. Automated daily backups ensure your school data is protected with 99.9% uptime SLA.",
                },
                {
                  q: "Can we get custom modules according to our school policies?",
                  a: "Absolutely. Aadishala ERP is modular and highly configurable. We can customize fee rules, report cards format, grading scales, and attendance rules to match your exact institutional policies.",
                },
                {
                  q: "Does it support RFID/Biometric attendance hardware?",
                  a: "Yes, Aadishala seamlessly integrates with leading RFID gate barriers, biometric thumb scanners, and AI face recognition cameras.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-slate-200 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-6 py-4 font-bold text-slate-900 flex justify-between items-center hover:bg-slate-50"
                  >
                    <span>{item.q}</span>
                    {faqOpen[index] ? (
                      <FaChevronUp className="text-slate-400" />
                    ) : (
                      <FaChevronDown className="text-slate-400" />
                    )}
                  </button>
                  <div
                    className={`${faqOpen[index] ? "block" : "hidden"} px-6 pb-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3`}
                  >
                    {item.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-gradient-to-r from-brand-700 via-brand-600 to-indigo-700 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Modernize Your School Administrative Operations?
            </h2>
            <p className="mt-4 text-lg text-brand-100 max-w-2xl mx-auto">
              Join 500+ schools empowering their teachers, parents, and students
              with Azzunique School ERP.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openModal}
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 font-extrabold text-base rounded-2xl shadow-xl transition-all"
              >
                Book Free Live Guided Demo
              </button>
              <a
                href="tel:+917412066477"
                className="w-full sm:w-auto px-8 py-4 bg-brand-800/60 border border-brand-400/40 hover:bg-brand-800 text-white font-bold text-base rounded-2xl transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall /> Call Sales: +91 74120 66477
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center font-bold">
                    A
                  </div>
                  <span className="text-white font-extrabold text-lg">
                    Aadishala<span className="text-brand-500">ERP</span>
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Aadishala is a leading cloud-based School Management ERP
                  software helping educational institutions automate academics,
                  fees, attendance, and parent communication.
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-3 text-xs uppercase tracking-wider">
                  Core ERP Modules
                </h4>
                <ul className="space-y-2 text-xs">
                  <li>
                    <a href="#modules" className="hover:text-white">
                      Student Information System
                    </a>
                  </li>
                  <li>
                    <a href="#modules" className="hover:text-white">
                      Online Fee Collection Gateway
                    </a>
                  </li>
                  <li>
                    <a href="#modules" className="hover:text-white">
                      RFID Attendance Tracker
                    </a>
                  </li>
                  <li>
                    <a href="#modules" className="hover:text-white">
                      CBSE Exam Report Cards
                    </a>
                  </li>
                  <li>
                    <a href="#modules" className="hover:text-white">
                      GPS Bus Fleet Tracking
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-3 text-xs uppercase tracking-wider">
                  Quick Links
                </h4>
                <ul className="space-y-2 text-xs">
                  <li>
                    <a href="#dashboard-preview" className="hover:text-white">
                      Live Dashboard Preview
                    </a>
                  </li>
                  <li>
                    <a href="#mobile-app" className="hover:text-white">
                      Parent / Student App
                    </a>
                  </li>
                  <li>
                    <a href="#calculator" className="hover:text-white">
                      ROI & Savings Calculator
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="hover:text-white">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-3 text-xs uppercase tracking-wider">
                  Contact Sales
                </h4>
                <div className="space-y-2 text-xs">
                  <p className="flex items-center gap-2">
                    <i className="fa-solid fa-phone text-brand-500"></i> +91
                     74120 66477 
                  </p>
                  <p className="flex items-center gap-2">
                    <i className="fa-solid fa-envelope text-brand-500"></i>{" "}
                    info@azzunique.com
                  </p>
                  <p className="flex items-center gap-2">
                    <i className="fa-solid fa-globe text-brand-500"></i>{" "}
                    azzunique.co.in
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
              <p>
                &copy; 2026 Azzunique Software Solutions. All rights reserved.
              </p>
              <div className="flex gap-4 mt-4 sm:mt-0">
                <a href="#" className="hover:text-slate-300">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-slate-300">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-slate-300">
                  Security SLA
                </a>
              </div>
            </div>
          </div>
        </footer>

        {/* WhatsApp Widget */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
          <div
            id="wa-prompt"
            className="hidden sm:flex items-center gap-3 bg-white text-slate-800 px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200 text-xs animate-bounce"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span>Need a quick School ERP price quotation?</span>
            <button
              onClick={() => document.getElementById("wa-prompt")?.remove()}
              className="text-slate-400 hover:text-slate-600"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <a
            href="https://wa.me/917412066477?text=Hi%20Azzunique%20ERP%20Team,%20I%20am%20interested%20in%20a%20free%20demo%20for%20school%20management%20system."
            target="_blank"
            className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl shadow-2xl shadow-emerald-500/50 hover:scale-110 transition-all"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Modal */}
        <div
          className={`fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm ${modalOpen ? "flex" : "hidden"} items-center justify-center p-4`}
        >
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200">
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 text-red-600 hover:text-red-500 w-8 h-8 rounded-full bg-none flex items-center justify-center"
            >
              <i className="fa-solid fa-xmark">
                <X />
              </i>
            </button>
            <div className="mb-6">
              <span className="bg-brand-50 text-brand-600 text-xs font-bold px-3 py-1 rounded-full uppercase">
                Free 1-on-1 Guided Demo
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
                Request Live ERP Demo
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill in details below and our product specialist will set up a
                live walkthrough for your school management team.
              </p>
            </div>

            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    School / Academy Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. DPS International School"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-sm outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Principal / Admin"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 00000"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-sm outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="admin@school.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Student Strength
                    </label>
                    <select className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-sm outline-none bg-white">
                      <option>100 - 500 Students</option>
                      <option selected>500 - 1,500 Students</option>
                      <option>1,500 - 3,000 Students</option>
                      <option>3,000+ Students</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Modules Interested In
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 font-medium">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="rounded text-brand-600"
                      />{" "}
                      Fee Gateway
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="rounded text-brand-600"
                      />{" "}
                      RFID Attendance
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="rounded text-brand-600"
                      />{" "}
                      Report Cards
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="rounded text-brand-600"
                      />{" "}
                      Parent App
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl shadow-lg transition-all text-sm mt-2"
                >
                  Submit Demo Request
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  <i className="fa-solid fa-circle-check"></i>
                </div>
                <h4 className="text-xl font-bold text-slate-900">
                  Demo Request Submitted!
                </h4>
                <p className="text-xs text-slate-600 mt-2">
                  Thank you! Our Azzunique School ERP specialist will contact
                  you on your registered phone number within 2 business hours.
                </p>
                <button
                  onClick={closeModal}
                  className="mt-6 px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sms;
