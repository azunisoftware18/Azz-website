import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  MapPin,
  Menu,
  Phone,
  PhoneCall,
  Search,
  ShieldCheck,
  Star,
  Ticket,
  Users,
  Wallet,
  X,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

/* =========================================================
   DATA
========================================================= */

const attractions = [
  {
    name: "City Palace",
    location: "Old City",
    category: "Heritage",
    price: "₹250",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200",
  },
  {
    name: "Adventure Park",
    location: "Central City",
    category: "Adventure",
    price: "₹499",
    image:
      "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?w=1200",
  },
  {
    name: "Aquarium World",
    location: "River Road",
    category: "Family",
    price: "₹350",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200",
  },
];

const services = [
  {
    icon: Search,
    title: "Discover Places",
    text: "Help visitors discover attractions, experiences and activities available across the city.",
  },
  {
    icon: CalendarDays,
    title: "Date & Time Selection",
    text: "Choose preferred visit dates, time slots and available ticket categories before booking.",
  },
  {
    icon: Ticket,
    title: "Easy Ticket Booking",
    text: "Create a simple booking journey from attraction discovery to instant confirmation.",
  },
  {
    icon: Wallet,
    title: "Secure Payments",
    text: "Connect bookings with online payments and keep transaction information centralized.",
  },
  {
    icon: CheckCircle2,
    title: "Instant Confirmation",
    text: "Generate booking confirmations and digital tickets immediately after successful payment.",
  },
  {
    icon: Users,
    title: "Reseller Management",
    text: "Allow travel agents, local partners and resellers to sell tickets through their own channels.",
  },
];

const bookingSteps = [
  {
    number: "01",
    title: "Discover",
    text: "Browse places, attractions and experiences available in the city.",
  },
  {
    number: "02",
    title: "Choose",
    text: "Select the attraction, date, time slot and ticket quantity.",
  },
  {
    number: "03",
    title: "Book",
    text: "Enter visitor details and confirm the booking.",
  },
  {
    number: "04",
    title: "Pay",
    text: "Complete the payment through the available payment options.",
  },
  {
    number: "05",
    title: "Visit",
    text: "Receive a digital ticket and use it at the selected attraction.",
  },
];

const resellerFeatures = [
  "Partner and reseller onboarding",
  "Attraction-wise ticket access",
  "Wallet management",
  "Commission management",
  "Booking and sales tracking",
  "Partner-wise reports",
];

const screenshots = [
  {
    title: "Dashboard Overview",
    label: "Platform Overview",
    description:
      "Monitor bookings, ticket sales, visitors, revenue and attraction performance.",
    image: "/images/bookingdash.png",
  },
  // {
  //   title: "Reseller Management",
  //   label: "Partner Network",
  //   description:
  //     "Manage resellers, partners, wallets, commissions and ticket-selling activity.",
  //   image: "/ticket-booking/resellers.png",
  // },
  {
    title: "Bookings Dashboard",
    label: "Booking Operations",
    description:
      "Track visitor bookings, dates, ticket quantities, payments and booking status.",
    image: "/images/ticketbookingdash.png",
  },
];

const faqs = [
  {
    question: "What can users book through the platform?",
    answer:
      "Users can discover and book tickets for attractions, tourist places, entertainment venues, experiences and other activities available across the city.",
  },
  {
    question: "Can users select a visit date and time?",
    answer:
      "Yes. The booking flow can support date selection, available time slots and ticket quantities based on the configured attraction inventory.",
  },
  {
    question: "Can multiple attractions be managed from one platform?",
    answer:
      "Yes. Administrators can manage multiple attractions, venues, ticket categories, availability, schedules and pricing through a centralized system.",
  },
  {
    question: "Can I manage resellers and travel partners?",
    answer:
      "Yes. The platform can support reseller and partner onboarding, attraction access, commissions, wallet management and booking activity.",
  },
  {
    question: "Can the system generate digital tickets?",
    answer:
      "Yes. After successful booking and payment, the platform can generate a digital ticket or booking confirmation for the visitor.",
  },

  //   {
  //     question: "Can the platform support cancellations and refunds?",
  //     answer:
  //       "Cancellation, refund and rescheduling workflows can be configured according to the rules of each attraction or business.",
  //   },
  //   {
  //     question: "Can payment gateways be integrated?",
  //     answer:
  //       "Yes. The booking platform can be integrated with suitable payment providers to process online ticket payments.",
  //   },
  //   {
  //     question: "How can I request a demo?",
  //     answer:
  //       "Use the Demo or Enquiry button, call the listed number or contact the team through WhatsApp for a personalized walkthrough.",
  //   },
];

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-5 py-6 text-left"
      >
        <span className="text-base font-semibold text-slate-900 sm:text-lg">
          {question}
        </span>

        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 transition-all duration-300 ${
            open ? "rotate-180 bg-[#ef5b2a] text-white" : "text-slate-500"
          }`}
        >
          <ChevronDown size={17} />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open
            ? "grid-rows-[1fr] pb-6 opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="max-w-3xl pr-12 text-sm leading-7 text-slate-500 sm:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function TicketBooking() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMobileMenu(false);
  };

  //

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fffdfb] text-[#171717]">
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="fixed inset-x-0 top-0 z-[100] border-b border-black/10 bg-[#f7eee7] backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="flex min-h-[76px] items-center justify-between">
            {/* =================================================
          LOGO
      ================================================= */}
            <button
              type="button"
              onClick={() => scrollTo("home")}
              className="group flex items-center"
            >
              <div className="text-left">
                <div className="text-sm font-bold tracking-tight text-[#171717] sm:text-base">
                  Parchi
                  <span className="text-[#ef5b2a]"> Kaat</span>
                </div>

                {/* Mobile subtitle */}
                <div className="mt-0.5 text-[8px] uppercase tracking-[0.15em] text-black/35 sm:hidden">
                  Ticket Management
                </div>
              </div>
            </button>

            {/* =================================================
          DESKTOP NAVIGATION
      ================================================= */}
            <div className="hidden items-center gap-7 lg:flex">
              {[
                ["Explore", "explore"],
                ["Features", "features"],
                ["Resellers", "resellers"],
                ["Dashboard", "dashboard"],
                ["FAQ", "faq"],
              ].map(([label, id]) => (
                <button
                  type="button"
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="relative text-sm font-medium text-black/55 transition-colors duration-300 hover:text-[#ef5b2a]"
                >
                  {label}

                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-[#ef5b2a] transition-all duration-300 hover:w-full" />
                </button>
              ))}
            </div>

            {/* =================================================
          RIGHT SIDE
      ================================================= */}
            <div className="hidden items-center gap-3 lg:flex">
              {/* Phone */}
              <a
                href="tel:+917412066477"
                className="group flex items-center gap-2 rounded-full bg-[#171717] px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ef5b2a] hover:shadow-lg"
              >
                <Phone
                  size={16}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                <span>+91 74120 66477</span>
              </a>

              {/* Demo */}
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="group flex items-center gap-2 rounded-full bg-[#ef5b2a] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d94c20] hover:shadow-lg"
              >
                Book a Demo
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>
            </div>

            {/* =================================================
          MOBILE MENU BUTTON
      ================================================= */}
            <button
              type="button"
              onClick={() => setMobileMenu((value) => !value)}
              aria-label={mobileMenu ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-[#171717] transition hover:bg-[#fff4ef] lg:hidden"
            >
              {mobileMenu ? <X size={21} /> : <Menu size={21} />}
            </button>
          </nav>

          {/* =================================================
        MOBILE MENU
    ================================================= */}
          {mobileMenu && (
            <div className="border-t border-black/10 bg-[#fffdfb] py-4 lg:hidden">
              <div className="space-y-1">
                {[
                  ["Explore", "explore"],
                  ["Features", "features"],
                  ["Resellers", "resellers"],
                  ["Dashboard", "dashboard"],
                  ["FAQ", "faq"],
                  ["Contact", "contact"],
                ].map(([label, id]) => (
                  <button
                    type="button"
                    key={id}
                    onClick={() => scrollTo(id)}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm font-medium text-black/65 transition-all duration-200 hover:bg-[#fff4ef] hover:text-[#ef5b2a]"
                  >
                    <span>{label}</span>

                    <ArrowUpRight size={15} className="text-black/20" />
                  </button>
                ))}

                {/* Mobile Phone */}
                <a
                  href="tel:+917412066477"
                  className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#171717] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-[#ef5b2a]"
                >
                  <Phone size={16} />
                  +91 74120 66477
                </a>

                {/* Mobile Demo */}
                <button
                  type="button"
                  onClick={() => scrollTo("contact")}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#ef5b2a] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-[#d94c20]"
                >
                  Book a Demo
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="relative overflow-hidden bg-[#f7eee7] pt-32"
      >
        {/* Decorative Background */}
        <div className="absolute -right-32 top-10 h-[500px] w-[500px] rounded-full bg-[#ef5b2a]/10 blur-[120px]" />

        <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-[#f4a261]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Hero Content */}
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#ef5b2a]/20 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c9471d]">
                <MapPin size={13} />
                Explore. Book. Experience.
              </div>

              <h1 className="max-w-3xl text-5xl font-light leading-[0.94] tracking-[-0.045em] text-[#171717] sm:text-6xl lg:text-[76px]">
                Discover the city.
                <span className="block font-semibold text-[#ef5b2a]">
                  Book the experience.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-black/55 sm:text-xl">
                A complete ticket booking platform that lets visitors discover
                attractions, choose dates and time slots, book tickets online
                and receive instant digital confirmations.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => scrollTo("explore")}
                  className="group flex items-center justify-center gap-3 rounded-full bg-[#171717] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#ef5b2a]"
                >
                  Explore Platform
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <a
                  href="https://wa.me/917412066477?text=Hi%2C%20I%20would%20like%20a%20demo%20of%20your%20Ticket%20Booking%20System."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 rounded-full border border-black/10 bg-white/70 px-7 py-4 text-sm font-semibold text-[#171717] transition hover:-translate-y-1 hover:bg-white"
                >
                  <FaWhatsapp size={18} className="text-[#25D366]" />
                  WhatsApp Us
                </a>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-black/45">
                <span>City Attractions</span>
                <span>Events</span>
                <span>Experiences</span>
                <span>Entertainment</span>
              </div>
            </div>

            {/* Booking Visual */}
            <div className="relative min-h-[540px]">
              {/* Attraction Card */}
              <div className="absolute right-0 top-1/2 w-full max-w-[540px] -translate-y-1/2 overflow-hidden rounded-[2rem] bg-white shadow-[0_35px_90px_rgba(0,0,0,0.12)]">
                <div className="relative h-[260px] overflow-hidden">
                  <img
                    src={attractions[0].image}
                    alt={attractions[0].name}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#171717]">
                    {attractions[0].category}
                  </div>

                  <div className="absolute bottom-5 left-5 text-white">
                    <div className="flex items-center gap-2 text-xs text-white/70">
                      <MapPin size={13} />
                      {attractions[0].location}
                    </div>

                    <h3 className="mt-2 text-2xl font-semibold">
                      {attractions[0].name}
                    </h3>
                  </div>

                  <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#171717]">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-xl bg-[#faf7f4] p-3">
                      <div className="text-[10px] text-black/40">
                        Visit Date
                      </div>

                      <div className="mt-1 flex items-center gap-1.5 text-xs font-semibold">
                        <CalendarDays size={14} />
                        24 Aug
                      </div>
                    </div>

                    <div className="rounded-xl bg-[#faf7f4] p-3">
                      <div className="text-[10px] text-black/40">Time</div>

                      <div className="mt-1 flex items-center gap-1.5 text-xs font-semibold">
                        <Clock3 size={14} />
                        10:30 AM
                      </div>
                    </div>

                    <div className="rounded-xl bg-[#faf7f4] p-3">
                      <div className="text-[10px] text-black/40">Tickets</div>

                      <div className="mt-1 flex items-center gap-1.5 text-xs font-semibold">
                        <Users size={14} />2 Adults
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between rounded-2xl bg-[#171717] px-5 py-4 text-white">
                    <div>
                      <div className="text-[10px] text-white/40">
                        Starting from
                      </div>

                      <div className="mt-1 text-lg font-semibold">
                        ₹250 / person
                      </div>
                    </div>

                    <button className="rounded-full bg-[#ef5b2a] px-5 py-2.5 text-xs font-semibold">
                      Book Ticket
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Booking Status */}
              <div className="absolute left-0 top-12 rounded-2xl bg-white p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <CheckCircle2 size={19} />
                  </div>

                  <div>
                    <div className="text-[10px] text-black/40">
                      Booking Status
                    </div>

                    <div className="mt-1 text-sm font-semibold">
                      Ticket Confirmed
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Rating */}
              <div className="absolute bottom-8 right-0 rounded-2xl bg-[#171717] px-5 py-4 text-white shadow-xl">
                <div className="flex items-center gap-2">
                  <Star
                    size={16}
                    fill="currentColor"
                    className="text-yellow-400"
                  />

                  <span className="text-sm font-semibold">4.8</span>

                  <span className="text-xs text-white/40">Visitor Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPLORE ATTRACTONS
      ===================================================== */}

      <section id="explore" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ef5b2a]">
                Explore The City
              </div>

              <h2 className="mt-5 text-4xl font-light leading-tight tracking-tight text-[#171717] sm:text-5xl lg:text-6xl">
                Find your next
                <span className="block font-semibold">
                  place to experience.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-black/50">
              Discover attractions, entertainment venues, activities and
              experiences available for booking across your city.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {attractions.map((attraction) => (
              <div
                key={attraction.name}
                className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.10)]"
              >
                <div className="relative h-[280px] overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider">
                    {attraction.category}
                  </span>

                  <div className="absolute bottom-5 left-5 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-white/65">
                      <MapPin size={12} />
                      {attraction.location}
                    </div>

                    <h3 className="mt-1 text-xl font-semibold">
                      {attraction.name}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-between p-5">
                  <div>
                    <div className="text-[10px] text-black/40">Entry from</div>

                    <div className="mt-1 text-lg font-bold">
                      {attraction.price}
                    </div>
                  </div>

                  <button className="flex items-center gap-2 rounded-full bg-[#171717] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#ef5b2a]">
                    View Tickets
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section id="features" className="bg-[#f7f7f5] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ef5b2a]">
              Platform Capabilities
            </div>

            <h2 className="mt-5 text-4xl font-light leading-tight text-[#171717] sm:text-5xl lg:text-6xl">
              Everything behind a
              <span className="block font-semibold">
                seamless ticket booking.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group bg-white p-7 transition hover:bg-[#f77a50]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff0eb] text-[#ef5b2a] transition group-hover:bg-white/10 group-hover:text-[#f7f6f6]">
                      <Icon size={20} />
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-black/20 transition group-hover:text-white/60"
                    />
                  </div>

                  <h3 className="mt-8 text-xl font-semibold transition group-hover:text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black/50 transition group-hover:text-white/45">
                    {service.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          BOOKING JOURNEY
      ===================================================== */}

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ef5b2a]">
                Booking Journey
              </div>

              <h2 className="mt-5 text-4xl font-light leading-tight text-[#171717] sm:text-5xl lg:text-6xl">
                Five simple steps.
                <span className="block font-semibold">
                  One great experience.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-base leading-7 text-black/50 sm:text-lg">
                Make discovering and booking city experiences as simple as
                browsing, selecting and confirming.
              </p>

              <button
                onClick={() => scrollTo("contact")}
                className="mt-8 flex items-center gap-3 rounded-full bg-[#171717] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#ef5b2a]"
              >
                Discuss Your Booking Flow
                <ArrowRight size={17} />
              </button>
            </div>

            <div className="space-y-3">
              {bookingSteps.map((step) => (
                <div
                  key={step.number}
                  className="group flex gap-6 rounded-[1.5rem] border border-slate-200 p-6 transition hover:border-[#ef5b2a]/25 hover:bg-[#fffaf7]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#171717] text-xs font-semibold text-white transition group-hover:bg-[#ef5b2a]">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>

                    <p className="mt-2 text-sm leading-7 text-black/50">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DASHBOARD SHOWCASE
      ===================================================== */}

      <section id="dashboard" className="bg-[#f7f7f5] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ef5b2a]">
                Platform Dashboard
              </div>

              <h2 className="mt-5 text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
                Everything your team needs
                <span className="block font-semibold">to run ticketing.</span>
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-black/50">
              Manage attractions, bookings, resellers, revenue and visitor
              activity from one centralized workspace.
            </p>
          </div>

          {/* Tabs */}
          <div className="mt-12 flex flex-wrap gap-2">
            {screenshots.map((screen, index) => (
              <button
                key={screen.title}
                onClick={() => setActiveScreenshot(index)}
                className={`rounded-full px-5 py-3 text-sm font-medium transition ${
                  activeScreenshot === index
                    ? "bg-[#171717] text-white"
                    : "bg-white text-black/50 hover:text-black"
                }`}
              >
                {screen.title}
              </button>
            ))}
          </div>

          <div className="mt-7 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-3 shadow-[0_25px_70px_rgba(0,0,0,0.07)] sm:p-5">
            <div className="grid overflow-hidden rounded-[2rem] bg-[#f4f4f5] lg:grid-cols-[0.3fr_0.7fr]">
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ef5b2a]">
                  {screenshots[activeScreenshot].label}
                </div>

                <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">
                  {screenshots[activeScreenshot].title}
                </h3>

                <p className="mt-5 text-base leading-7 text-black/50">
                  {screenshots[activeScreenshot].description}
                </p>
                <div className="mt-8 flex items-center gap-2 text-sm font-semibold">
                  View Product
                  <ArrowUpRight size={17} />
                </div>
              </div>

              <div className="relative min-h-[350px] overflow-hidden bg-[#e7e7e9] p-5 sm:min-h-[450px] sm:p-8">
                <div className="relative h-full overflow-hidden rounded-2xl border border-white bg-white shadow-xl">
                  <img
                    src={screenshots[activeScreenshot].image}
                    alt={screenshots[activeScreenshot].title}
                    className="absolute h-full w-full object-cover"
                    // onError={(event) => {
                    //   console.error(
                    //     "Image failed to load:",
                    //     screenshots[activeScreenshot].image,
                    //   );
                    //   event.currentTarget.style.display = "none";
                    // }}
                  />

                  {/* Dashboard Placeholder */}
                  {/* <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#f7f5ff] to-[#e7e4ee]">
                    <div className="w-[82%] rounded-2xl border border-white bg-white p-5 shadow-2xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="h-3 w-32 rounded bg-slate-200" />
                          <div className="mt-2 h-2 w-20 rounded bg-slate-100" />
                        </div>

                        <div className="h-8 w-8 rounded-xl bg-[#fff0eb]" />
                      </div>

                      <div className="mt-6 grid grid-cols-4 gap-3">
                        <div className="h-16 rounded-xl bg-slate-50" />
                        <div className="h-16 rounded-xl bg-slate-50" />
                        <div className="h-16 rounded-xl bg-[#fff0eb]" />
                        <div className="h-16 rounded-xl bg-slate-50" />
                      </div>

                      <div className="mt-4 h-32 rounded-xl bg-slate-50" />

                      <div className="mt-4 grid grid-cols-3 gap-3">
                        <div className="h-10 rounded-xl bg-slate-50" />
                        <div className="h-10 rounded-xl bg-[#fff0eb]" />
                        <div className="h-10 rounded-xl bg-slate-50" />
                      </div>
                    </div>
                  </div> */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section id="faq" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ef5b2a]">
                FAQ
              </div>

              <h2 className="mt-5 text-4xl font-light leading-tight sm:text-5xl">
                Questions about the
                <span className="block font-semibold">ticket platform?</span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-black/50">
                Learn more about attractions, bookings, digital tickets,
                resellers and platform integrations.
              </p>
            </div>

            <div>
              {faqs.map((faq) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        id="contact"
        className="relative overflow-hidden bg-[#f7eee7] px-6 py-24 lg:px-8 lg:py-32"
      >
        {/* Decorative Background */}
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#ef5b2a]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#f4a261]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2.5rem] border border-black/5 bg-white shadow-[0_25px_70px_rgba(23,23,23,0.08)]">
            <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
              {/* Content */}
              <div className="p-8 sm:p-12 lg:p-16 xl:p-20">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#ef5b2a]" />

                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ef5b2a]">
                    Start Selling Experiences
                  </span>
                </div>

                <h2 className="max-w-3xl text-4xl font-light leading-[1.05] tracking-tight text-[#171717] sm:text-5xl lg:text-6xl">
                  Make every attraction
                  <span className="block font-semibold text-[#ef5b2a]">
                    bookable online.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-black/50 sm:text-xl">
                  Give visitors an easier way to discover attractions, choose
                  their preferred date and time, reserve tickets and experience
                  more places across the city.
                </p>

                {/* Benefits */}
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Online ticket booking",
                    "Real-time availability",
                    "Digital ticket confirmation",
                    "Reseller & partner sales",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm font-medium text-black/65"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fff0eb] text-[#ef5b2a]">
                        <Check size={13} />
                      </span>

                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Side */}
              <div className="border-t border-black/5 bg-[#faf7f4] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                <div className="max-w-xs lg:w-[270px]">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#171717] text-white">
                    <Ticket size={23} />
                  </div>

                  <h3 className="text-2xl font-semibold text-[#171717]">
                    Ready to build your ticketing platform?
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/45">
                    Talk to our team and explore the booking, attraction and
                    reseller management workflow for your business.
                  </p>

                  {/* Buttons */}
                  <div className="mt-7 space-y-3">
                    <a
                      href="tel:+917412066477"
                      className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#171717] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ef5b2a] hover:shadow-lg"
                    >
                      <PhoneIcon />
                      +91 74120 66477
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>

                    <a
                      href="https://wa.me/917412066477?text=Hi%2C%20I%20would%20like%20a%20demo%20of%20your%20City%20Ticket%20Booking%20System."
                      target="_blank"
                      rel="noreferrer"
                      className="group flex w-full items-center justify-center gap-3 rounded-full border border-black/10 bg-white px-6 py-4 text-sm font-semibold text-[#171717] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ef5b2a]/30 hover:bg-[#fffaf7] hover:shadow-md"
                    >
                      <FaWhatsapp size={19} className="text-[#25D366]" />
                      WhatsApp for Demo
                      <ArrowUpRight
                        size={16}
                        className="text-[#ef5b2a] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  </div>

                  {/* <div className="mt-6 flex items-center gap-2 text-xs text-black/35">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Quick response from our team
            </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#fffdfb]">
        <div className="mx-auto max-w-7xl border-t border-black/10 px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#171717] text-white">
                  <Ticket size={18} />
                </div>

                <div>
                  <div className="text-sm font-bold text-[#171717]">
                    Unifin
                    <span className="text-[#ef5b2a]"> Tickets</span>
                  </div>

                  <div className="mt-0.5 text-[9px] uppercase tracking-[0.18em] text-black">
                    City Experiences
                  </div>
                </div>
              </div>

              <p className="mt-4 max-w-xs text-xs leading-6 text-black">
                Digital ticketing for city attractions, entertainment venues and
                memorable experiences.
              </p>
            </div>

            {/* Navigation */}
            {/* <div>
        <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ef5b2a]">
          Quick Links
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-black">
          <button
            onClick={() => scrollTo("explore")}
            className="transition-colors hover:text-[#ef5b2a]"
          >
            Explore
          </button>

          <button
            onClick={() => scrollTo("features")}
            className="transition-colors hover:text-[#ef5b2a]"
          >
            Features
          </button>

          <button
            onClick={() => scrollTo("resellers")}
            className="transition-colors hover:text-[#ef5b2a]"
          >
            Resellers
          </button>

          <button
            onClick={() => scrollTo("dashboard")}
            className="transition-colors hover:text-[#ef5b2a]"
          >
            Dashboard
          </button>

          <button
            onClick={() => scrollTo("faq")}
            className="transition-colors hover:text-[#ef5b2a]"
          >
            FAQ
          </button>
        </div>
      </div> */}

            {/* Contact */}
            <div>
              <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ef5b2a]">
                Contact
              </div>

              <div className="space-y-2">
                <a
                  href="tel:+917412066477"
                  className="flex items-center gap-2 text-sm font-medium text-black/60 transition-colors hover:text-[#ef5b2a]"
                >
                  <PhoneIcon />
                  +91 74120 66477
                </a>

                <a
                  href="https://wa.me/917412066477?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20Ticket%20Booking%20System."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-black/60 transition-colors hover:text-[#ef5b2a]"
                >
                  <FaWhatsapp size={16} className="text-[#25D366]" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-black">
              © {new Date().getFullYear()} Unifin Tickets. All Rights Reserved.
            </p>

            <div className="flex items-center gap-2 text-xs text-black">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Making city experiences easier to discover and book
            </div>
          </div>
        </div>
      </footer>

      {/* =====================================================
          FLOATING CONTACT
      ===================================================== */}

      <a
        href="tel:+917412066477"
        aria-label="Call"
        className="fixed bottom-24 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#171717] text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#ef5b2a] sm:right-6"
      >
        <PhoneIcon />
      </a>

      <a
        href="https://wa.me/917412066477?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20Ticket%20Booking%20System."
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_15px_35px_rgba(37,211,102,0.35)] transition hover:-translate-y-1 hover:scale-105 sm:right-6"
      >
        <FaWhatsapp size={25} />
      </a>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-[18px] w-[18px]"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"
      />
    </svg>
  );
}
