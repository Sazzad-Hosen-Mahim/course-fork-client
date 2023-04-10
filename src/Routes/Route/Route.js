import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import Courses from "../../Pages/Courses/Courses";
import Category from "../../Pages/Category/Category";
import CourseDetails from "../../Pages/Courses/CourseDetails/CourseDetails";
import Checkout from "../../Pages/Checkout/Checkout";
import Error from "../../Pages/Error404/Error";
import Login from "../../Pages/Login/Login";
import SIgnUp from "../../Pages/SignUp/SIgnUp";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SIgnUp></SIgnUp>,
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch(`http://localhost:5000/course`),
      },
      {
        path: "/courses/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: <Checkout></Checkout>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/${params.id}`),
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);
