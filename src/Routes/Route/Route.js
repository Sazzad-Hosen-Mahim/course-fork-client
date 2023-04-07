import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import Courses from "../../Pages/Courses/Courses";
import Category from "../../Pages/Category/Category";
import CourseDetails from "../../Pages/Courses/CourseDetails/CourseDetails";

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
    ],
  },
]);
