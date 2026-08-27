// import { Outlet, useLocation } from "react-router-dom";
// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";

// const PublicLayout = () => {
//     return (
//         <div className="flex flex-col">
//             {/* <Header /> */}
//             <main>
//                 <Outlet />
//             </main>
//             <Footer />
//         </div>
//     );
// };

// export default PublicLayout;

import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";

// You can define this array directly or import it from a config file
const HIDE_FOOTER_ON = ["/ERP", "/lms", "/ticket", "/fintech"]; // add more paths here later, e.g. '/demo', '/pricing'

const PublicLayout = () => {
  const location = useLocation();
  const hideFooter = HIDE_FOOTER_ON.includes(location.pathname);

  return (
    <div className="flex flex-col">
      <main>
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default PublicLayout;
