import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Layout from "./pages/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [{ index: true, element: <Home /> }],
  },
]);
// import React from "react";
// import { createBrowserRouter, Outlet, Link } from "react-router-dom";
// // Layout component
// const Layout = () => {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Accueil</Link>
//           </li>
//           <li>
//             <Link to="/about">À propos</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>
//       <Outlet />
//       <footer>
//         <p>© 2024 Mon Application</p>
//       </footer>
//     </div>
//   );
// };
// // Page components
// const Home = () => <h1>Page d'accueil</h1>;
// const About = () => <h1>À propos</h1>;
// const Contact = () => <h1>Contact</h1>;
// const ErrorPage = () => <h1>Oops! Page non trouvée.</h1>;
// // Router configuration
// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);
