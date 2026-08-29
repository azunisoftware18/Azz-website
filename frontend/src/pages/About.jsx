import { useState } from "react";
import Header from "../components/Header/Header.jsx";
import {
  Star,
  BarChart3,
  Globe,
  UserRound,
  BriefcaseBusiness,
  ArrowUpRight,
  Play,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function About() {
  const [marketing, setMarketing] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  // ----- Data -----
  const cards = [
    {
      title: "Discover",
      description:
        "We begin by understanding your business, goals, users, and challenges. Through research and strategic analysis, we identify opportunities and define a clear direction for success.",
    },
    {
      title: "Design",
      description:
        "We transform ideas into intuitive and engaging digital experiences, combining thoughtful strategy, user-focused design, and a strong visual identity.",
    },
    {
      title: "Build",
      description:
        "Using modern technologies and proven development practices, we create secure, scalable, and high-performing solutions built to support your business growth.",
    },
    {
      title: "Deliver",
      description:
        "We follow an iterative and quality-focused approach to ensure every solution is thoroughly refined, tested, and ready to deliver meaningful results.",
    },
  ];

  // ----- Form state (simple) -----
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // clear error on change
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "Required";
    if (!formData.lastName.trim()) newErrors.lastName = "Required";
    if (!formData.email.trim()) newErrors.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.company.trim()) newErrors.company = "Required";
    if (!formData.jobTitle.trim()) newErrors.jobTitle = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted! (demo)");
      // reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        jobTitle: "",
        phone: "",
        message: "",
      });
      setMarketing(false);
      setPrivacy(false);
    }
  };

  // ----- Render -----
  
  return (
    <>
      <Header />

      {/* ====== HERO / PURPOSE SECTION ====== */}
 <section className="relative overflow-hidden bg-[#f3f4fb] py-20 lg:py-32">
  {/* Background */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#3557ff]/10 blur-3xl" />
    <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#10154d]/10 blur-3xl" />
  </div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

    {/* Header */}
    <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-20 items-start mb-16 lg:mb-20">

      {/* Heading */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-10 bg-[#3557ff]" />

          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#3557ff]">
            WHAT DRIVES US
          </span>
        </div>

        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#111827] leading-[0.95]">
          Our
          <span className="block font-medium text-[#3557ff]">
            Mission.
          </span>
        </h2>
      </div>

      {/* Description */}
      <div className="lg:pt-8">
        <p className="text-lg sm:text-xl lg:text-[21px] leading-[1.8] text-[#222] font-normal">
          We are committed to engineering sophisticated, high-performance
          software solutions that address complex business challenges with
          precision and innovation. By leveraging cutting-edge technologies,
          strategic expertise, and industry-leading practices, we deliver
          robust and scalable digital solutions that generate measurable
          value, strengthen operational capabilities, and enable our clients
          to achieve sustainable growth in an evolving digital landscape.
        </p>
      </div>
    </div>

    {/* Mission Cards */}
    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">

      {[
        {
          img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400",
          alt: "Team collaboration",
          // number: "01",
          category: "OUR PURPOSE",
          title: "Turning Complex Challenges Into Meaningful Solutions",
        },
        {
          img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400",
          alt: "Modern workspace",
          // number: "02",
          category: "OUR VISION",
          title: "Building Technology That Creates Lasting Impact",
        },
      ].map((item) => (
        <div
          // key={item.number}
          className="group relative overflow-hidden rounded-[2rem] bg-[#10154d] min-h-[430px] lg:min-h-[500px] cursor-pointer"
        >
          {/* Image */}
          <img
            src={item.img}
            alt={item.alt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080b2d] via-[#080b2d]/40 to-transparent opacity-90" />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-[#3557ff]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Number */}
          <div className="absolute top-6 left-6 lg:top-8 lg:left-8">
            {/* <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-sm font-medium text-white transition-all duration-500 group-hover:bg-white group-hover:text-[#10154d]">
              {item.number}
            </div> */}
          </div>

          {/* Arrow */}
          <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white transition-all duration-500 group-hover:bg-[#3557ff] group-hover:border-[#3557ff] group-hover:rotate-45">
              <span className="text-xl">↗</span>
            </div>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9 lg:p-10">

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#7f96ff] transition-all duration-500 group-hover:w-14" />

              <span className="text-xs font-semibold tracking-[0.2em] text-white/70">
                {item.category}
              </span>
            </div>

            <h3 className="max-w-xl text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight text-white">
              {item.title}
            </h3>

            {/* Bottom Interaction */}
            <div className="mt-7 flex items-center gap-3 overflow-hidden">
              <span className="text-sm text-white/70 transition-transform duration-500 group-hover:translate-x-1">
                Discover more
              </span>

              <span className="h-px w-10 bg-white/40 transition-all duration-500 group-hover:w-20" />
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom Statement */}
    {/* <div className="mt-10 lg:mt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-t border-[#10154d]/10 pt-7">
      <p className="text-sm sm:text-base text-[#10154d]/60">
        Innovation is not just what we build — it's how we think.
      </p>

      <div className="flex items-center gap-3 text-sm font-medium text-[#3557ff]">
        <span className="h-2 w-2 rounded-full bg-[#3557ff]" />
        Technology • Strategy • Innovation
      </div>
    </div> */}

  </div>
</section>

      {/* ====== OVERVIEW + STATS ====== */}
      <section className="relative overflow-hidden bg-[#f5f5f5] py-20 lg:py-28">
  {/* Background Decoration */}
  <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#3557ff]/5 blur-3xl" />
  <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#10154d]/5 blur-3xl" />

  <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

    {/* Section Heading */}
    <div className="flex items-end justify-between gap-6 mb-14 lg:mb-20">
      <div>
        <span className="text-sm font-medium tracking-[0.2em] text-[#3557ff]">
          ABOUT US
        </span>

        <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#10154d]">
          Overview
        </h2>
      </div>

      <div className="hidden md:block h-px flex-1 max-w-xs bg-[#10154d]/15 mb-4" />
    </div>

    {/* Main Content */}
    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">

      {/* Main Statement Card */}
      <div className="group relative overflow-hidden rounded-[2rem] bg-[#10154d] p-8 sm:p-10 lg:p-12 min-h-[420px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

        {/* Decorative Circle */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-125" />

        <div className="relative">
          
        </div>

        <div className="relative mt-16">
          <h3 className="text-2xl sm:text-3xl lg:text-[2.5rem] leading-[1.2] font-light text-white">
            Azzunique is a leading software company based in Jaipur,
            Rajasthan, delivering innovative and scalable IT solutions
            that empower businesses to grow and succeed in the digital
            landscape.
          </h3>
        </div>

        <div className="relative mt-10 flex items-center gap-3 text-sm text-white/50">
          <span>Technology · Innovation · Growth</span>
          <span className="h-px flex-1 bg-white/15" />
        </div>
      </div>

      {/* Right Content */}
      <div className="grid gap-6">

        {/* Vision Card */}
        <div className="group rounded-[2rem] border border-[#10154d]/10 bg-white p-8 sm:p-10 transition-all duration-500 hover:-translate-y-1 hover:border-[#3557ff]/30 hover:shadow-xl">

          <div className="flex items-start justify-between gap-6">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] text-[#3557ff]">
                OUR VISION
              </span>

              <h3 className="mt-4 text-2xl sm:text-3xl font-medium text-[#10154d]">
                Building Global Partnerships
              </h3>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f0f3ff] text-[#3557ff] transition-all duration-300 group-hover:bg-[#3557ff] group-hover:text-white">
              <span className="text-lg">↗</span>
            </div>
          </div>

          <p className="mt-7 text-base sm:text-lg leading-8 text-[#3c3c3c]">
            To establish a global presence as a trusted technology partner
            by delivering innovative, high-quality, and cost-effective
            solutions while fostering long-term relationships with our
            clients, partners, and team.
          </p>
        </div>

        {/* Expertise Card */}
        <div className="group rounded-[2rem] border border-[#10154d]/10 bg-white p-8 sm:p-10 transition-all duration-500 hover:-translate-y-1 hover:border-[#3557ff]/30 hover:shadow-xl">

          <div className="flex items-start justify-between gap-6">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] text-[#3557ff]">
                OUR EXPERTISE
              </span>

              <h3 className="mt-4 text-2xl sm:text-3xl font-medium text-[#10154d]">
                Technology That Delivers
              </h3>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f0f3ff] text-[#3557ff] transition-all duration-300 group-hover:bg-[#3557ff] group-hover:text-white">
              <span className="text-lg">↗</span>
            </div>
          </div>

          <p className="mt-7 text-base sm:text-lg leading-8 text-[#3c3c3c]">
            Our team of skilled professionals combines technical expertise
            and creative innovation to deliver high-performance websites,
            engaging mobile applications, and scalable software solutions
            tailored to modern business needs.
          </p>

          {/* Services */}
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="rounded-full bg-[#f5f5f5] px-4 py-2 text-sm text-[#10154d]">
              Web Development
            </span>

            <span className="rounded-full bg-[#f5f5f5] px-4 py-2 text-sm text-[#10154d]">
              Mobile Apps
            </span>

            <span className="rounded-full bg-[#f5f5f5] px-4 py-2 text-sm text-[#10154d]">
              Software Solutions
            </span>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* ====== ABOUT US CARDS ====== */}
      <section className="relative overflow-hidden bg-[#e8edf6] py-20 lg:py-28">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-[#3557ff]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#10154d]/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-20">
            <span className="inline-flex items-center rounded-full border border-[#10154d]/10 bg-white px-4 py-2 text-sm font-medium text-[#3557ff]">
              HOW WE WORK
            </span>

            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#10154d]">
              Our Approach to
              <span className="block font-medium">Project Development</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-8 text-[#10154d]/70">
              A structured and collaborative process designed to transform your
              ideas into powerful digital solutions.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2rem] border border-[#10154d]/10 bg-white p-7 sm:p-9 lg:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#3557ff]/30 hover:shadow-[0_25px_60px_rgba(16,21,77,0.12)]"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3557ff]/0 via-transparent to-[#3557ff]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-[#3557ff]/5 group-hover:to-[#3557ff]/10" />

                {/* Top Area */}
                <div className="relative flex items-start justify-between gap-6">
                  {/* Step Number */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#10154d] text-lg font-medium text-white transition-all duration-500 group-hover:bg-[#3557ff] group-hover:scale-110 group-hover:rotate-3">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Arrow */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#10154d]/10 text-[#10154d] transition-all duration-500 group-hover:border-[#3557ff] group-hover:bg-[#3557ff] group-hover:text-white">
                    <ArrowUpRight
                      size={20}
                      className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative mt-14">
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#10154d] transition-colors duration-300 group-hover:text-[#3557ff]">
                    {card.title}
                  </h3>

                  <div className="mt-5 h-px w-12 bg-[#3557ff] transition-all duration-500 group-hover:w-full" />

                  <p className="mt-6 max-w-xl text-base sm:text-lg leading-8 text-[#10154d]/70 transition-colors duration-300 group-hover:text-[#10154d]">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="relative mt-10 flex items-center gap-3 text-sm font-medium text-[#10154d]/50 transition-all duration-300 group-hover:text-[#3557ff]">
                  
                  {/* <span>Explore our process</span>

                  <span className="h-px flex-1 bg-[#10154d]/10 transition-colors duration-300 group-hover:bg-[#3557ff]/30" /> */}

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CONTACT / REQUEST FORM ====== */}
      {/* if needed add it later */}
    
    </>
  );
}
