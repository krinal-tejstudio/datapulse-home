import { createBrowserRouter, Navigate } from "react-router";
import App from "../../App";
import HomeTwo from "../../pages/home-two/HomeTwo";
import About from "../../pages/about/About";
import Resources from "../../pages/resources/Resources";
import Error from "../../pages/error/Error";
import Service from "../../pages/service/Service";
import Contact from "../../pages/contact/Contact";

const ROUTER = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
         {
            path: "/",
            element: <HomeTwo />
         },
         {
            path: 'index2',
            element: <HomeTwo />
         },
         {
            path: 'about',
            element: <About />
         },
         {
            path: 'resources',
            element: <Resources />
         },
         {
            path: 'team-carousel',
            element: <Navigate to="/resources" replace />
         },
         {
            path: "services",
            element: <Service />
         },
         {
            path: "contact",
            element: <Contact />
         }
      ]
   }
])

export default ROUTER;