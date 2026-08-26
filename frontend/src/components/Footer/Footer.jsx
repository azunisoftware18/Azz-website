import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const AnimatedLink = ({ to, children }) => (
    <Link
      to={to}
      onClick={scrollToTop}
      className="
        group
        inline-flex
        items-center
        gap-2
        text-[#4b5a87]
        transition-colors
        duration-300
        hover:text-[#2d3f7c]
      "
    >
      <span className="relative">
        {children}

        <span
          className="
            absolute
            left-0
            -bottom-1
            h-[1px]
            w-full
            bg-current
            origin-left
            scale-x-0
            transition-transform
            duration-300
            ease-out
            group-hover:scale-x-100
          "
        />
      </span>

      <ArrowUpRight
        size={14}
        className="
          opacity-0
          transition-all
          duration-300
          -translate-x-2
          translate-y-1
          group-hover:translate-x-0
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      />
    </Link>
  );

  return (
    <footer className="overflow-hidden bg-[#f5f5f5]">
      {/* Top Section */}
      <div className="mx-auto max-w-[1700px] px-6 py-14 sm:px-8 lg:px-12 lg:py-20">
        {/* Optional Top Brand Area */}
        <div className="mb-14 flex flex-col justify-between gap-8 border-b border-[#2d3f7c]/15 pb-10 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#4b5a87]">
              Azzunique
            </p>

            <h2 className="max-w-2xl text-3xl font-light leading-tight text-[#2d3f7c] sm:text-4xl lg:text-5xl">
              Building digital experiences for the future.
            </h2>
          </div>

          <Link
            to="/contact"
            onClick={scrollToTop}
            className="
              group
              flex
              w-fit
              items-center
              gap-3
              rounded-full
              bg-black
              px-6
              py-3.5
              text-sm
              font-medium
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            Let's Talk
            <ArrowUpRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </Link>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Company */}
          <div>
            <h3 className="mb-7 text-xl font-medium text-[#2d3f7c]">Company</h3>

            <ul className="space-y-4 text-[15px]">
              <li>
                <AnimatedLink to="/about">About Us</AnimatedLink>
              </li>

              <li>
                <AnimatedLink to="/">Home</AnimatedLink>
              </li>

              <li>
                <AnimatedLink to="/careers">Careers</AnimatedLink>
              </li>

              <li>
                <AnimatedLink to="/blog">Blog</AnimatedLink>
              </li>

              <li>
                <AnimatedLink to="/pricing">Pricing</AnimatedLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-7 text-xl font-medium text-[#2d3f7c]">
              Services
            </h3>

            <ul className="space-y-4 text-[15px]">
              <li>
                <AnimatedLink to="/services">Web Development</AnimatedLink>
              </li>

              <li>
                <AnimatedLink to="/services">Software Development</AnimatedLink>
              </li>

              <li>
                <AnimatedLink to="/services">UI/UX Design</AnimatedLink>
              </li>

              <li>
                <AnimatedLink to="/services">Digital Solutions</AnimatedLink>
              </li>

              <li>
                <AnimatedLink to="/services">Cloud Solutions</AnimatedLink>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-7 text-xl font-medium text-[#2d3f7c]">Support</h3>

            <ul className="space-y-4 text-[15px]">
              <li>
                <AnimatedLink to="/terms">Terms of Use</AnimatedLink>
              </li>

              <li>
                <AnimatedLink to="/privacy">Privacy Statement</AnimatedLink>
              </li>

              <li>
                <AnimatedLink to="/cookie-policy">Cookie Policy</AnimatedLink>
              </li>

              <li>
                <AnimatedLink to="/site-map">Site Map</AnimatedLink>
              </li>

              <li>
                <AnimatedLink to="/contact">Contact Us</AnimatedLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#2d3f7c]/15">
        <div className="mx-auto flex max-w-[1700px] flex-col gap-6 px-6 py-7 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          {/* Copyright */}
          <p className="text-sm text-[#4b5a87]">
            Copyright © {new Date().getFullYear()} Azzunique. All Rights
            Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#2d3f7c]/20
                text-[#4b5a87]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#000000]
                hover:text-white
              "
            >
              <FaFacebookF size={15} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#2d3f7c]/20
                text-[#4b5a87]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#000000]
                hover:text-white
              "
            >
              <FaLinkedinIn size={16} />
            </a>

            <a
              href="#"
              aria-label="X"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#2d3f7c]/20
                text-[#4b5a87]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#000000]
                hover:text-white
              "
            >
              <FaXTwitter size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
