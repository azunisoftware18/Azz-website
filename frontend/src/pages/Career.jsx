import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  Users,
  Laptop,
  Sparkles,
  ChevronDown,
  MapPin,
  Clock,
  Award,
  Globe,
  Zap,
  Heart,
  Mail,
  X,
  Upload,
  CheckCircle,
  ChartNoAxesCombined,
} from "lucide-react";
import Header from "../components/Header/Header.jsx";

function Career() {
  const [visibleJobs, setVisibleJobs] = useState(3);

  // ---- Modal state ----
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null,
  });

  // ---- Job data ----
  const jobs = [
    {
      title: "Frontend Developer",
      location: "Jaipur",
      type: "Full Time",
      experience: "1-3 Years",
      department: "Engineering",
      description:
        "Build beautiful, responsive UIs with React and modern CSS frameworks.",
      skills: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend Developer",
      location: "Jaipur",
      type: "Full Time",
      experience: "2-4 Years",
      department: "Engineering",
      description:
        "Design and build scalable APIs and microservices architecture.",
      skills: ["Node.js", "Python", "PostgreSQL"],
    },
    {
      title: "Full Stack Developer",
      location: "Jaipur",
      type: "Full Time",
      experience: "1-4 Years",
      department: "Engineering",
      description: "Work across the entire stack to deliver complete features.",
      skills: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "UI/UX Designer",
      location: "Jaipur",
      type: "Full Time",
      experience: "1-3 Years",
      department: "Design",
      description:
        "Create intuitive and beautiful user experiences for our products.",
      skills: ["Figma", "User Research", "Prototyping"],
    },
    {
      title: "React Native Developer",
      location: "Jaipur",
      type: "Full Time",
      experience: "2+ Years",
      department: "Engineering",
      description: "Build cross-platform mobile apps with React Native.",
      skills: ["React Native", "iOS", "Android"],
    },
    {
      title: "Digital Marketing Executive",
      location: "Jaipur",
      type: "Full Time",
      experience: "1-2 Years",
      department: "Marketing",
      description:
        "Drive growth through innovative digital marketing strategies.",
      skills: ["SEO", "Content Marketing", "Analytics"],
    },
  ];

  // ---- Perks, stats, team (unchanged) ----
  const perks = [
    {
      icon: <Laptop size={28} />,
      title: "Flexible Work",
      desc: "Remote-first culture with flexible hours. Work from anywhere in the world.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Users size={28} />,
      title: "Amazing Team",
      desc: "Join a diverse team of passionate creators, thinkers, and doers.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <ChartNoAxesCombined size={28} />,
      // icon: <Sparkles size={28} />,
      title: "Career Growth",
      desc: "Dedicated learning budgets, mentorship programs, and rapid advancement.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: <Heart size={28} />,
      title: "Great Culture",
      desc: "Celebrating diversity, inclusion, and work-life balance every day.",
      color: "from-rose-500 to-red-500",
    },
  ];

  const stats = [
    { label: "Open Positions", value: "6+", icon: <Briefcase size={22} /> },
    { label: "Team Members", value: "45+", icon: <Users size={22} /> },
    // { label: "Countries", value: "12", icon: <Globe size={22} /> },
    { label: "Projects", value: "30+", icon: <Zap size={22} /> },
  ];

  const loadMoreJobs = () => {
    setVisibleJobs((prev) => Math.min(prev + 3, jobs.length));
  };

  // ---- Social icons ----
  const TwitterIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
  );
  const LinkedInIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
  const GithubIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );

  const teamMembers = [
    {
      name: "Arbaz",
      role: "Senior Full Stack Developer",
      photo: "/images/Arbaz.jpeg",
    },
    {
      name: "Sohail",
      role: "Full Stack Developer",
      photo: "/images/Sohail.jpeg",
    },

    {
      name: "Faiz",
      role: "Full Stack Developer",
      photo: "/images/faiz.jpeg",
    },

    {
      name: "Alok",
      role: "Full Stack Developer",
      photo: "/images/Alok.jpeg",
    },

    {
      name: "Karn",
      role: "Full Stack Developer",
      photo: "/images/karan.jpeg",
    },

    {
      name: "Vikas",
      role: "Full Stack Developer",
      photo: "/images/vikas.jpeg",
    },

    {
      name: "Durgesh",
      role: "Laravel Developer",
      photo: "/images/durgesh.jpeg",
    },
    
    {
      name: "Dipendar",
      role: "Account Manager",
      photo: "/images/deep.jpeg",
    },
    {
      name: "Manoj",
      role: "Team Manager",
      photo: "/images/manoj.jpeg",
    },
  ];

  // ---- Handlers for modal ----
  const openApplyModal = (job) => {
    setSelectedJob(job);
    setShowApplyModal(true);
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      coverLetter: "",
      resume: null,
    });
  };

  const closeApplyModal = () => {
    setShowApplyModal(false);
    setSelectedJob(null);
    setIsSubmitted(false);
    setIsSubmitting(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, resume: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Optionally reset form after success
    }, 1500);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-50/80">
        {/* ===== HERO ===== */}
        <section className="relative overflow-hidden bg-white py-24 lg:py-32">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-indigo-100/40 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-100/30 blur-3xl" />
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-slate-900 text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1]">
              Build The
              <br />
              <span className="font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Future
              </span>{" "}
              With Us
            </h1>
            <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto mt-6 leading-relaxed">
              We're building innovative digital products that impact millions.
              Join our team of passionate creators and shape the future of
              technology.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="#jobs"
                className="group inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-indigo-200/50 hover:shadow-indigo-300/70 transition-all duration-300 hover:-translate-y-1"
              >
                Explore Openings
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#perks"
                className="inline-flex items-center gap-2 border border-slate-200 bg-white text-slate-700 px-8 py-4 rounded-full font-medium hover:border-indigo-300 hover:text-indigo-600 transition-all duration-300"
              >
                Why Join Us?
                <ChevronDown className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 w-full">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="w-[207px] min-h-[125px] bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/60 shadow-soft hover:shadow-lg transition duration-300 text-center flex flex-col items-center justify-center"
                >
                  <div className="flex items-center justify-center text-indigo-600 mb-2">
                    {stat.icon}
                  </div>

                  <div className="text-slate-900 text-2xl font-bold">
                    {stat.value}
                  </div>

                  <div className="text-slate-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHY JOIN ===== */}
        <section id="perks" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-indigo-600 text-sm font-semibold uppercase tracking-wider">
                ● Culture & Benefits
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-slate-900 mt-2">
                Why Join Us?
              </h2>
              <p className="text-slate-500 text-lg mt-4 max-w-2xl mx-auto">
                We create an environment where talented people thrive and do
                their best work.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {perks.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-200/60"
                >
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-5 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}
                  />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TEAM ===== */}
        <section className="py-24 bg-slate-50/80">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-indigo-600 text-sm font-semibold uppercase tracking-wider">
                 Our People
              </span>

              <h2 className="text-4xl md:text-5xl font-light text-slate-900 mt-2">
                Meet Our Team
              </h2>

              <p className="text-slate-500 text-lg mt-4">
                Creative minds working together to build something
                extraordinary.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden h-72">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {member.name}
                    </h3>

                    <p className="text-slate-500 text-sm mt-1">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== JOBS ===== */}
        <section id="jobs" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-indigo-600 text-sm font-semibold uppercase tracking-wider">
                ● Opportunities
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-slate-900 mt-2">
                Open Positions
              </h2>
              <p className="text-slate-500 text-lg mt-4">
                Find your next challenge and grow with us.
              </p>
            </div>

            <div className="space-y-4">
              {jobs.slice(0, visibleJobs).map((job, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 border border-slate-200/60 hover:border-indigo-300/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                          <Briefcase size={20} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-slate-900">
                            {job.title}
                          </h3>
                          <p className="text-slate-500 text-sm mt-1">
                            {job.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4 mt-4">
                        <span className="flex items-center gap-1.5 text-sm text-slate-600">
                          <MapPin size={16} className="text-slate-400" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm text-slate-600">
                          <Clock size={16} className="text-slate-400" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm text-slate-600">
                          <Award size={16} className="text-slate-400" />
                          {job.experience}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm text-slate-600">
                          <Briefcase size={16} className="text-slate-400" />
                          {job.department}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {job.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-colors duration-300 whitespace-nowrap shadow-lg shadow-indigo-200/50 hover:shadow-indigo-300/70"
                    >
                      <span>Apply Now</span>
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {visibleJobs < jobs.length && (
              <div className="text-center mt-10">
                <button
                  onClick={loadMoreJobs}
                  className="inline-flex items-center gap-2 px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-full font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300"
                >
                  Load More Positions
                  <ChevronDown size={20} />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="py-20 bg-indigo-50/40">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-white rounded-3xl p-12 shadow-soft border border-slate-200/60">
              <h2 className="text-3xl md:text-4xl font-light text-slate-900">
                Ready to Make an Impact?
              </h2>
              <p className="text-slate-500 text-lg mt-4">
                Join us and be part of something bigger. Your next adventure
                starts here.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-200/50 hover:shadow-indigo-300/70"
              >
                Get in Touch
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* ===== APPLICATION MODAL ===== */}

      {/* Add a small animation keyframe in a style tag */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}

export default Career;
