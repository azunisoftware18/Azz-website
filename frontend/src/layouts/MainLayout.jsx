
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";
import Footer from "../components/Footer/Footer";

const HIDE_FOOTER_ON = ['/ERP', '/lms', '/ticket', '/fintech']; // same array – you can import from a shared file later

const MainLayout = () => {
  const location = useLocation();
  const hideFooter = HIDE_FOOTER_ON.includes(location.pathname);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="flex">
      <div className="flex flex-col min-h-screen w-full">
        <main className="flex-1 bg-gray-50">
          <Outlet />
        </main>
        {!hideFooter && <Footer />}
      </div>
    </div>
  );
};

export default MainLayout;