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
} from "lucide-react";

import Header from "../components/Header/Header.jsx"

function CareerPage() {
  const [visibleJobs, setVisibleJobs] = useState(3);

  const jobs = [
    {
      title: "Frontend Developer",
      location: "Remote / Delhi",
      type: "Full Time",
      experience: "1-3 Years",
      department: "Engineering",
      description: "Build beautiful, responsive UIs with React and modern CSS frameworks.",
      skills: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend Developer",
      location: "Remote",
      type: "Full Time",
      experience: "2-4 Years",
      department: "Engineering",
      description: "Design and build scalable APIs and microservices architecture.",
      skills: ["Node.js", "Python", "PostgreSQL"],
    },
    {
      title: "Full Stack Developer",
      location: "Noida",
      type: "Full Time",
      experience: "1-4 Years",
      department: "Engineering",
      description: "Work across the entire stack to deliver complete features.",
      skills: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      type: "Full Time",
      experience: "1-3 Years",
      department: "Design",
      description: "Create intuitive and beautiful user experiences for our products.",
      skills: ["Figma", "User Research", "Prototyping"],
    },
    {
      title: "React Native Developer",
      location: "Hybrid",
      type: "Full Time",
      experience: "2+ Years",
      department: "Engineering",
      description: "Build cross-platform mobile apps with React Native.",
      skills: ["React Native", "iOS", "Android"],
    },
    {
      title: "Digital Marketing Executive",
      location: "Remote",
      type: "Full Time",
      experience: "1-2 Years",
      department: "Marketing",
      description: "Drive growth through innovative digital marketing strategies.",
      skills: ["SEO", "Content Marketing", "Analytics"],
    },
  ];

  const perks = [
    {
      icon: <Laptop size={32} />,
      title: "Flexible Work",
      desc: "Remote-first culture with flexible hours. Work from anywhere in the world.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <Users size={32} />,
      title: "Amazing Team",
      desc: "Join a diverse team of passionate creators, thinkers, and doers.",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: <Sparkles size={32} />,
      title: "Career Growth",
      desc: "Dedicated learning budgets, mentorship programs, and rapid advancement.",
      color: "from-pink-400 to-pink-600",
    },
    {
      icon: <Heart size={32} />,
      title: "Great Culture",
      desc: "Celebrating diversity, inclusion, and work-life balance every day.",
      color: "from-red-400 to-red-600",
    },
  ];

  const stats = [
    { label: "Open Positions", value: "6+", icon: <Briefcase size={24} /> },
    { label: "Team Members", value: "45+", icon: <Users size={24} /> },
    { label: "Countries", value: "12", icon: <Globe size={24} /> },
    { label: "Projects", value: "30+", icon: <Zap size={24} /> },
  ];

  const loadMoreJobs = () => {
    setVisibleJobs(prev => Math.min(prev + 3, jobs.length));
  };

  // Simple SVG icons as fallback for social media
  const TwitterIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
    </svg>
  );

  const LinkedInIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  const GithubIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );

  return (

    <>

    <Header />
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white text-black py-32 lg:py-40">
        <div className="absolute inset-0 overflow-hidden">
          {/* <div className="absolute w-[800px] h-[800px] rounded-full bg-blue-500/10 blur-3xl -top-40 -right-40 animate-pulse"></div> */}
          {/* <div className="absolute w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-3xl -bottom-40 -left-40 animate-pulse delay-1000"></div> */}
          {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-indigo-500/5 blur-3xl"></div> */}
          {/* <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div> */}
          {/* <div className="absolute top-40 right-20 w-3 h-3 bg-white/20 rounded-full animate-bounce delay-200"></div> */}
          {/* <div className="absolute bottom-40 left-20 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-500"></div> */}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          {/* <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-white/90 text-sm font-medium border border-white/10 shadow-lg mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            Now Hiring — 6 Open Positions
          </div> */}
          
          <h1 className="text-black text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1]">
            Build The
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Future
            </span>{" "}
            With Us
          </h1>
          
          <p className="text-gray-900 text-lg md:text-xl max-w-3xl mx-auto mt-6 leading-relaxed">
            We're building innovative digital products that impact millions. 
            Join our team of passionate creators and shape the future of technology.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="#jobs"
              className="group inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Explore Openings
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="#perks"
              className="inline-flex items-center gap-2 border border-white/30 text-black px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
            >
              Why Join Us?
              <ChevronDown className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="flex items-center justify-center text-black mb-2">
                  {stat.icon}
                </div>
                <div className="text-black text-2xl font-bold">{stat.value}</div>
                <div className="text-black text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section id="perks" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#1A0B4A]/60 text-sm font-semibold uppercase tracking-wider">
              {/* ● Culture & Benefits */}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#000000] mt-2">
              Why Join Us?
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              We create an environment where talented people thrive and do their best work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#000000] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#1A0B4A]/60 text-sm font-semibold uppercase tracking-wider">
              ● Our People  
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#000000] mt-2">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-lg mt-4">
              Creative minds working together to build something extraordinary.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Sarah Johnson", role: "Lead Developer", photoId: "1494790108377-be9c29b29330", skills: ["React", "TypeScript"] },
              { name: "Michael Chen", role: "Senior Designer", photoId: "1507003211169-0a1dd7228f2d", skills: ["Figma", "UI/UX"] },
              { name: "Emily Rodriguez", role: "Product Manager", photoId: "1438761681033-ee1fe6b3f9a9", skills: ["Strategy", "Agile"] },
              { name: "David Kim", role: "DevOps Engineer", photoId: "1472099645785-5658abf4ff4e", skills: ["AWS", "Docker"] },
            ].map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-72">
                  <img
                    src={`https://images.unsplash.com/photo-${member.photoId}?w=400&h=400&fit=crop&crop=face`}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex gap-2">
                      <a href="#" className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                        <TwitterIcon />
                      </a>
                      <a href="#" className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                        <LinkedInIcon />
                      </a>
                      <a href="#" className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                        <GithubIcon />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0B0736]">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{member.role}</p>
                  <div className="flex gap-2 mt-3">
                    {member.skills.map((skill, idx) => (
                      <span key={idx} className="bg-[#EEF3FA] px-3 py-1 rounded-full text-xs font-medium text-[#1A0B4A]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section id="jobs" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#1A0B4A]/60 text-sm font-semibold uppercase tracking-wider">
              ● Opportunities
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#000000] mt-2">
              Open Positions
            </h2>
            <p className="text-gray-600 text-lg mt-4">
              Find your next challenge and grow with us.
            </p>
          </div>

          <div className="space-y-4">
            {jobs.slice(0, visibleJobs).map((job, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#1A0B4A]/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-[#EEF3FA] rounded-lg text-[#000000]">
                        <Briefcase size={20} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#000000]">
                          {job.title}
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">{job.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mt-4">
                      <span className="flex items-center gap-1.5 text-sm text-gray-600">
                        <MapPin size={16} className="text-gray-400" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-gray-600">
                        <Clock size={16} className="text-gray-400" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-gray-600">
                        <Award size={16} className="text-gray-400" />
                        {job.experience}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-gray-600">
                        <Briefcase size={16} className="text-gray-400" />
                        {job.department}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {job.skills.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-[#EEF3FA] rounded-full text-xs font-medium text-[#000000]">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    state={{ job: job.title }}
                    className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition-colors duration-300 whitespace-nowrap"
                  >
                    <span>Apply Now</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {visibleJobs < jobs.length && (
            <div className="text-center mt-10">
              <button
                onClick={loadMoreJobs}
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#000000] text-black rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300"
              >
                Load More Positions
                <ChevronDown size={20} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Ready to Make an Impact?
          </h2>
          <p className="text-black text-lg mt-4">
            Join us and be part of something bigger. Your next adventure starts here.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-black text-[#fffdfd] rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Get in Touch
            <Mail size={20} />
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}

export default CareerPage;