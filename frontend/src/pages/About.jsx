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
        "We shape brands through exploration, applying in-depth research to challenge assumptions at every turn.",
    },
    {
      title: "Design",
      description:
        "Our design approach is to simplify. We embrace the joy in creating something unique that is easy for end users.",
    },
    {
      title: "Build",
      description:
        "Using modern technologies, we build with efficiency and skill, creating flexible and scalable business-driven solutions.",
    },
    {
      title: "Deliver",
      description:
        "We take an iterative approach to both our work and our practice, always looking for ways to improve what we do.",
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
      <section
        className="relative py-20 lg:py-32 overflow-hidden bg-[#f3f4fb]"
        style={{
          backgroundImage: "url('https://www.infosys.com/content/dam/infosys-web/en/global-resource/media-resources/pattern-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-[#111827] leading-tight lg:leading-none">
              Our <br /> Mission:
            </h2>
            <p className="text-xl sm:text-2xl lg:text-[24px] leading-relaxed text-[#222] font-normal">
              We will deliver flawless and complex software products. We will
              strive to bring the best of kind IT solutions to be superior
              services providers while delivering tangible results to our
              clients in all phases and help them achieve better products for
              their needs.
            </p>
          </div>

          {/* Video Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
                alt: "Purpose video thumbnail",
              },
              {
                img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
                alt: "About why video thumbnail",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  {/* <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600/90 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-700">
                    {/* <Play className="w-8 h-8 text-white ml-1" fill="white" /> */}
                  {/* </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== OVERVIEW + STATS ====== */}
      <section className="bg-[#f5f5f5] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-2xl sm:text-5xl lg:text-6xl  text-[#000000] mb-12 lg:mb-16">
            Overview
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16 lg:mb-24">
            <h3 className="text-xs sm:text-[10px] lg:text-[30px] leading-tight text-[#000000]">
              Azzunique is a leading software company based in Jaipur ,
              Rajasthan. We provide custom IT solutions to businesses of all
              sizes.
            </h3>
            <div className="space-y-4 text-base sm:text-lg text-[#3c3c3c]">
              <p>
                To become a leading software provider and earn global
                commendation by delivering optimal and cutting-edge solutions
                with top quality and services at an affordable cost to our
                clients. To become a premier service provider in the industry as
                well as ensure to build and maintain excellent relationships
                with our internal and external team.
              </p>
              <p>
                Our passionate team of highly skilled professionals includes web
                developers, mobile app developers, and web designers. Whether
                you need a flawless website, engaging mobile app, or custom
                software, we're committed to delivering world-class results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== ABOUT US CARDS ====== */}
      <section className="bg-[#e8edf6] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-light text-center text-[#000000] mb-12 lg:mb-16">
            We Clarify Project Development Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-6 sm:p-8 min-h-[240px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              >
                <h3 className="text-xl font-medium text-[#10154d] transition-colors duration-300 group-hover:text-[#3557ff]">
                  {card.title}
                </h3>
                <p className="mt-6 text-base sm:text-lg leading-8 text-[#10154d]">
                  {card.description}
                </p>
                <div className="flex justify-end mt-6 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  {/* <div className="relative inline-flex items-center gap-1 text-[#10154d] text-base font-medium">
                    Know More
                    <ArrowUpRight size={18} />
                    <span className="absolute -bottom-1 left-0 h-[2px] bg-current w-full scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100" />
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CONTACT / REQUEST FORM ====== */}
      <section
        className="relative py-16 lg:py-24 px-4 lg:px-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.magnific.com/free-photo/abstract-futuristic-background-with-3d-design_1361-3532.jpg?semt=ais_hybrid&w=740&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[380px_1fr] gap-12 items-start">
          {/* Left */}
          <div className="text-white pt-2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight lg:leading-none">
              Request for
              <br />
              services
            </h2>
            <p className="mt-6 text-lg lg:text-xl leading-relaxed text-gray-200 max-w-md">
              Find out more about how we can help your organization navigate its
              next. Let us know your areas of interest so that we can serve you
              better.
            </p>
            <div className="mt-8 space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-blue-400" />
                <span>info@company.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-blue-400" />
                <span>123 Main St, City, Country</span>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl">
            <h3 className="text-[#1B0A42] text-xl sm:text-2xl font-semibold mb-6">
              All the fields are required
            </h3>

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { label: "First Name", name: "firstName", type: "text" },
                  { label: "Last Name", name: "lastName", type: "text" },
                  { label: "Email", name: "email", type: "email" },
                  { label: "Company", name: "company", type: "text" },
                  { label: "Job Title", name: "jobTitle", type: "text" },
                  { label: "Phone", name: "phone", type: "tel" },
                ].map((field) => (
                  <div key={field.name} className="relative group">
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={`${field.label} *`}
                      className={`w-full bg-[#F0F5FD] p-4 rounded-lg outline-none transition-all duration-200 focus:ring-2 ${
                        errors[field.name]
                          ? "ring-2 ring-red-400 focus:ring-red-500"
                          : "focus:ring-blue-500"
                      } placeholder:text-gray-600`}
                      aria-label={field.label}
                      aria-invalid={!!errors[field.name]}
                      aria-describedby={
                        errors[field.name] ? `${field.name}-error` : undefined
                      }
                    />
                    {errors[field.name] && (
                      <p
                        id={`${field.name}-error`}
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors[field.name]}
                      </p>
                    )}
                    <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#1B0A42] origin-left scale-x-0 transition-transform duration-300 group-focus-within:scale-x-100" />
                  </div>
                ))}
              </div>

              {/* Message */}
              <div className="relative group mt-6">
                <label
                  htmlFor="message"
                  className="block text-base font-medium text-black mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full bg-[#F0F5FD] rounded-xl p-4 outline-none resize-none transition-all focus:ring-2 focus:ring-blue-500 placeholder:text-gray-600"
                />
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#1B0A42] origin-left scale-x-0 transition-transform duration-300 group-focus-within:scale-x-100" />
              </div>

              {/* Toggles */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setMarketing(!marketing)}
                    className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${
                      marketing ? "bg-[#1B0A42]" : "bg-gray-300"
                    }`}
                    aria-label="Toggle marketing consent"
                  >
                    <span
                      className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ${
                        marketing ? "left-7" : "left-1"
                      }`}
                    />
                  </button>
                  <p className="text-sm sm:text-base text-[#1B0A42]">
                    Opt in for marketing communication{" "}
                    <span className="underline cursor-pointer hover:text-blue-700 transition">
                      Privacy Statement
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setPrivacy(!privacy)}
                    className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${
                      privacy ? "bg-[#1B0A42]" : "bg-gray-300"
                    }`}
                    aria-label="Toggle privacy agreement"
                  >
                    <span
                      className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ${
                        privacy ? "left-7" : "left-1"
                      }`}
                    />
                  </button>
                  <p className="text-sm sm:text-base text-[#1B0A42]">
                    I agree to the{" "}
                    <span className="underline cursor-pointer hover:text-blue-700 transition">
                      Privacy Statement
                    </span>
                    <sup>*</sup>
                  </p>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group mt-8 flex items-center gap-3 bg-black text-white px-8 py-4 rounded-xl text-lg hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Submit
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
