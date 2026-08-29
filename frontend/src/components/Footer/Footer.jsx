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
        text-[#10154d]/60
        transition-colors
        duration-300
        hover:text-[#3557ff]
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
            bg-[#3557ff]
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
          text-[#3557ff]
        "
      />
    </Link>
  );

  return (
    <footer className="overflow-hidden bg-[#f5f5f5] text-[#10154d]">
      {/* ================= TOP SECTION ================= */}
      <div className="mx-auto max-w-[1700px] px-6 py-14 sm:px-8 lg:px-12 lg:py-20">
        {/* Brand / CTA */}
        <div
          className="
            mb-14
            flex
            flex-col
            justify-between
            gap-8
            border-b
            border-[#10154d]/10
            pb-10
            md:flex-row
            md:items-end
          "
        >
          <div>
            <p
              className="
                mb-3
                text-sm
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#3557ff]
              "
            >
              Azzunique
            </p>

            <h2
              className="
                max-w-2xl
                text-3xl
                font-light
                leading-tight
                tracking-tight
                text-[#10154d]
                sm:text-4xl
                lg:text-5xl
              "
            >
              Building digital experiences
              <span className="block font-medium text-[#3557ff]">
                for the future.
              </span>
            </h2>
          </div>

          {/* CTA */}
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
              bg-[#10154d]
              px-6
              py-3.5
              text-sm
              font-medium
              text-white
              shadow-lg
              shadow-[#10154d]/10
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#3557ff]
              hover:shadow-xl
              hover:shadow-[#3557ff]/20
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

        {/* ================= LINKS ================= */}
        <div
          className="
            grid
            grid-cols-1
            gap-12
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {/* COMPANY */}
          <div>
            <h3
              className="
                mb-7
                text-xl
                font-medium
                tracking-tight
                text-[#10154d]
              "
            >
              Company
            </h3>

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

          {/* SERVICES */}
          <div>
            <h3
              className="
                mb-7
                text-xl
                font-medium
                tracking-tight
                text-[#10154d]
              "
            >
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

          {/* SUPPORT */}
          <div>
            <h3
              className="
                mb-7
                text-xl
                font-medium
                tracking-tight
                text-[#10154d]
              "
            >
              Support
            </h3>

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

      {/* ================= BOTTOM SECTION ================= */}
      <div className="border-t border-[#10154d]/10">
        <div
          className="
            mx-auto
            flex
            max-w-[1700px]
            flex-col
            gap-6
            px-6
            py-7
            sm:px-8
            md:flex-row
            md:items-center
            md:justify-between
            lg:px-12
          "
        >
          {/* COPYRIGHT */}
          <p className="text-sm text-[#10154d]/55">
            Copyright © {new Date().getFullYear()} Azzunique. All Rights
            Reserved.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-3">
            {/* FACEBOOK */}
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
                border-[#10154d]/15
                bg-white
                text-[#10154d]/60
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#3557ff]
                hover:bg-[#3557ff]
                hover:text-white
                hover:shadow-lg
                hover:shadow-[#3557ff]/20
              "
            >
              <FaFacebookF size={15} />
            </a>

            {/* LINKEDIN */}
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
                border-[#10154d]/15
                bg-white
                text-[#10154d]/60
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#3557ff]
                hover:bg-[#3557ff]
                hover:text-white
                hover:shadow-lg
                hover:shadow-[#3557ff]/20
              "
            >
              <FaLinkedinIn size={16} />
            </a>

            {/* X */}
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
                border-[#10154d]/15
                bg-white
                text-[#10154d]/60
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#3557ff]
                hover:bg-[#3557ff]
                hover:text-white
                hover:shadow-lg
                hover:shadow-[#3557ff]/20
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
