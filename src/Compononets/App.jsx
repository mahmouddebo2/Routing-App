import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About/About.jsx";
import Contact from "./Contact/Contact.jsx";
import Home from "./Home/Home.jsx";
import MainLayout from "./MainLayout/MainLayout.jsx";
import NotFound from "./NotFound/NotFound.jsx";
import Portfolio from "./Portfolio/Portfolio.jsx";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,children: [
      {index: true, element: <Home/>},
      {path: 'portfolio', element: <Portfolio/> },
      { path: 'about', element: <About /> },
      {path:'contact', element: <Contact/>},
      {path:'*' , element: <NotFound/>}
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}
