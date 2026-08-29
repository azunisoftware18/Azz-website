import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const DEFAULT_VIDEO_SRC =
  "https://www.infosys.com//content/dam/infosys-web/en/hero-video/leon-navigate-ai.mp4";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/careers", label: "Careers" },
  { to: "/whatwedo", label: "What We Do" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
];

const navLinkClass = ({ isActive }) =>
  [
    "font-medium text-sm whitespace-nowrap transition-colors duration-300",
    isActive
      ? "text-blue-600"
      : "text-gray-700 hover:text-blue-600",
  ].join(" ");

export default function Header({
  videoSrc = null,
  children,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const hasVideo = Boolean(videoSrc);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`relative ${
        hasVideo ? "h-screen p-2" : "min-h-[90px]"
      }`}
    >
      {hasVideo ? (
        <div className="relative w-full h-full rounded-3xl overflow-hidden">
          {/* ================= VIDEO ================= */}
          <video
            key={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          {/* ================= OVERLAY ================= */}
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* ================= NAVBAR ================= */}
          <nav className="fixed top-0 left-0 w-full z-50 px-3 sm:px-4 lg:px-6 py-4 sm:py-5">
            <div
              className="
                max-w-7xl mx-auto
                bg-white/40 backdrop-blur-md
                rounded-full
                px-4 sm:px-5 lg:px-6
                py-2.5 sm:py-3
                shadow-lg
              "
            >
              <div className="flex items-center justify-between gap-3">
                {/* ================= LOGO ================= */}
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="shrink-0"
                >
                  <img
                    src="https://azzunique.co.in/assets/images/header-hash-logo-pvt.png"
                    alt="Azzunique"
                    className="
                      h-9
                      sm:h-10
                      lg:h-12
                      w-auto
                      object-contain
                    "
                  />
                </Link>

                {/* ================= DESKTOP NAV ================= */}
                <div
                  className="
                    hidden
                    lg:flex
                    items-center
                    bg-white
                    rounded-full
                    px-5 xl:px-8
                    py-2.5 xl:py-3
                    shadow-sm
                  "
                >
                  <ul className="flex items-center gap-5 xl:gap-8 2xl:gap-10">
                    {navLinks.map((link) => (
                      <li key={link.to}>
                        <NavLink
                          to={link.to}
                          end={link.end}
                          className={navLinkClass}
                        >
                          {link.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ================= DESKTOP CONTACT ================= */}
                <Link
                  to="/contact"
                  className="
                    hidden
                    lg:flex
                    shrink-0
                    items-center
                    justify-center
                    bg-[#10154d]
                    text-white
                    px-5 xl:px-7
                    py-2.5 xl:py-3
                    rounded-full
                    text-sm xl:text-base
                    font-medium
                    whitespace-nowrap
                    hover:bg-[#3557ff]
                    transition-colors duration-300
                  "
                >
                  Contact Us
                </Link>

                {/* ================= MOBILE MENU BUTTON ================= */}
                <button
                  type="button"
                  onClick={() =>
                    setMobileMenuOpen(!mobileMenuOpen)
                  }
                  aria-label={
                    mobileMenuOpen
                      ? "Close menu"
                      : "Open menu"
                  }
                  aria-expanded={mobileMenuOpen}
                  className="
                    lg:hidden
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[#10154d]
                    shadow-sm
                    transition-all
                    duration-300
                    hover:bg-[#10154d]
                    hover:text-white
                  "
                >
                  {mobileMenuOpen ? (
                    <X size={21} />
                  ) : (
                    <Menu size={21} />
                  )}
                </button>
              </div>

              {/* ================= MOBILE NAV ================= */}
              {mobileMenuOpen && (
                <div
                  className="
                    lg:hidden
                    mt-3
                    rounded-2xl
                    bg-white
                    p-4
                    shadow-xl
                  "
                >
                  <ul className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <li key={link.to}>
                        <NavLink
                          to={link.to}
                          end={link.end}
                          onClick={closeMobileMenu}
                          className={({ isActive }) =>
                            `
                              block
                              rounded-xl
                              px-4
                              py-3
                              text-sm
                              font-medium
                              transition-colors
                              ${
                                isActive
                                  ? "bg-blue-50 text-blue-600"
                                  : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                              }
                            `
                          }
                        >
                          {link.label}
                        </NavLink>
                      </li>
                    ))}

                    {/* Mobile Contact - ONLY inside mobile menu */}
                    <li className="pt-2">
                      <Link
                        to="/contact"
                        onClick={closeMobileMenu}
                        className="
                          flex
                          w-full
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#10154d]
                          px-5
                          py-3
                          text-sm
                          font-medium
                          text-white
                          hover:bg-[#3557ff]
                          transition-colors duration-300
                        "
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </nav>

          {/* ================= HERO CONTENT ================= */}
          {children && (
            <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
              {children}
            </div>
          )}
        </div>
      ) : (
        /* ================= NAVBAR ONLY ================= */
        <nav className="fixed top-0 left-0 w-full z-50 px-3 sm:px-4 lg:px-6 py-4 sm:py-5">
          <div
            className="
              max-w-7xl mx-auto
              bg-white/40
              backdrop-blur-md
              rounded-full
              px-4 sm:px-5 lg:px-6
              py-2.5 sm:py-3
              shadow-lg
            "
          >
            <div className="flex items-center justify-between gap-3">
              {/* ================= LOGO ================= */}
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="shrink-0"
              >
                <img
                  src="https://azzunique.co.in/assets/images/header-hash-logo-pvt.png"
                  alt="Azzunique"
                  className="
                    h-9
                    sm:h-10
                    lg:h-12
                    w-auto
                    object-contain
                  "
                />
              </Link>

              {/* ================= DESKTOP NAV ================= */}
              <div
                className="
                  hidden
                  lg:flex
                  items-center
                  bg-white
                  rounded-full
                  px-5 xl:px-8
                  py-2.5 xl:py-3
                  shadow-sm
                "
              >
                <ul className="flex items-center gap-5 xl:gap-8 2xl:gap-10">
                  {navLinks.map((link) => (
                    <li key={link.to}>
                      <NavLink
                        to={link.to}
                        end={link.end}
                        className={navLinkClass}
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ================= DESKTOP CONTACT ================= */}
              <Link
                to="/contact"
                className="
                  hidden
                  lg:flex
                  shrink-0
                  items-center
                  justify-center
                  bg-[#10154d]
                  text-white
                  px-5 xl:px-7
                  py-2.5 xl:py-3
                  rounded-full
                  text-sm xl:text-base
                  font-medium
                  whitespace-nowrap
                  hover:bg-[#3557ff]
                  transition-colors duration-300
                "
              >
                Contact Us
              </Link>

              {/* ================= MOBILE BUTTON ================= */}
              <button
                type="button"
                onClick={() =>
                  setMobileMenuOpen(!mobileMenuOpen)
                }
                aria-label={
                  mobileMenuOpen
                    ? "Close menu"
                    : "Open menu"
                }
                aria-expanded={mobileMenuOpen}
                className="
                  lg:hidden
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#10154d]
                  shadow-sm
                  transition-all
                  duration-300
                  hover:bg-[#10154d]
                  hover:text-white
                "
              >
                {mobileMenuOpen ? (
                  <X size={21} />
                ) : (
                  <Menu size={21} />
                )}
              </button>
            </div>

            {/* ================= MOBILE MENU ================= */}
            {mobileMenuOpen && (
              <div
                className="
                  lg:hidden
                  mt-3
                  rounded-2xl
                  bg-white
                  p-4
                  shadow-xl
                "
              >
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <li key={link.to}>
                      <NavLink
                        to={link.to}
                        end={link.end}
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                          `
                            block
                            rounded-xl
                            px-4
                            py-3
                            text-sm
                            font-medium
                            transition-colors
                            ${
                              isActive
                                ? "bg-blue-50 text-blue-600"
                                : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                            }
                          `
                        }
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}

                  {/* Mobile Contact - ONLY ONE */}
                  <li className="pt-2">
                    <Link
                      to="/contact"
                      onClick={closeMobileMenu}
                      className="
                        flex
                        w-full
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#10154d]
                        px-5
                        py-3
                        text-sm
                        font-medium
                        text-white
                        hover:bg-[#3557ff]
                        transition-colors duration-300
                      "
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}