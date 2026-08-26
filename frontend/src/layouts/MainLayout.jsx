// import { Outlet } from "react-router-dom";
// import { useEffect } from "react";
// import Lenis from "lenis";

// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";

// const MainLayout = () => {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       smoothWheel: true,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy();
//     };
//   }, []);

//   return (
//     <div className="flex">

//       <div className="flex flex-col min-h-screen w-full">
//         {/* <Header /> */}

//         <main className="flex-1 bg-gray-50">
//           <Outlet />
//         </main>

//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default MainLayout;


import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  const location = useLocation();
  const hideFooter = location.pathname === "/ERP";

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