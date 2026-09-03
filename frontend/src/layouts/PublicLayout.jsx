import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const HIDE_FOOTER_ON = ["/ERP", "/lms", "/ticket", "/fintech"];

const PublicLayout = () => {
  const location = useLocation();

  const hideFooter = HIDE_FOOTER_ON.includes(location.pathname);

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Outlet />
      </main>

      {!hideFooter && <Footer />}
    </div>
  );
};

export default PublicLayout;
