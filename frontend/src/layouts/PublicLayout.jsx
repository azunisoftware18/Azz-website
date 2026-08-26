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

const PublicLayout = () => {
  const location = useLocation();
  const hideFooter = location.pathname === "/ERP"; // adjust route if needed

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