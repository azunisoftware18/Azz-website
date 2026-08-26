import { Link, NavLink } from "react-router-dom";

const DEFAULT_VIDEO_SRC =
  "https://www.infosys.com//content/dam/infosys-web/en/hero-video/leon-navigate-ai.mp4";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About Us" },
  { to: "/blog", label: "Blog" },
  { to: "/pricing", label: "Pricing" },
  { to: "/careers", label: "Careers" },
  { to: "/whatwedo", label: "What We Do" },
];

const navLinkClass = ({ isActive }) =>
  [
    "font-medium transition-colors",
    isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600",
  ].join(" ");

export default function Header({ videoSrc = null, children }) {
  const hasVideo = Boolean(videoSrc);

  return (
    <header className={`relative ${hasVideo ? "h-screen p-2" : "py-6"}`}>
      {hasVideo ? (
        <div className="relative w-full h-full rounded-3xl overflow-hidden">
          {/* Video */}
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

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* Navbar */}
          <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6">
            <div className="max-w-7xl mx-auto bg-white/40 backdrop-blur-md rounded-full px-6 py-3 shadow-lg">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <Link to="/">
                  <img
                    src="https://azzunique.co.in/assets/images/header-hash-logo-pvt.png"
                    alt="Logo"
                    className="h-12"
                  />
                </Link>

                {/* Navigation */}
                <div className="hidden lg:flex items-center bg-white rounded-full px-8 py-3 shadow-sm">
                  <ul className="flex items-center gap-10">
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

                {/* Button */}
                <Link
                  to="/contact"
                  className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </nav>

          {/* Hero Content */}
          {children && (
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              {children}
            </div>
          )}
        </div>
      ) : (
        /* Navbar Only (No Video) */
        <nav className=" fixed top-0 left-0 w-full z-50 px-6 py-6">
          <div className="max-w-7xl mx-auto bg-white/40 backdrop-blur-md rounded-full px-6 py-3 shadow-lg">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/">
                <img
                  src="https://azzunique.co.in/assets/images/header-hash-logo-pvt.png"
                  alt="Logo"
                  className="h-12"
                />
              </Link>

              {/* Navigation */}
              <div className="hidden lg:flex items-center bg-white rounded-full px-8 py-3 shadow-sm">
                <ul className="flex items-center gap-10">
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

              {/* Button */}
              <Link
                to="/contact"
                className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
