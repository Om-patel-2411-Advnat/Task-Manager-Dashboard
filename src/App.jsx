import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import ProjectDetails from "./component/ProjectDetails";
import SideBar from "./component/SideBar";
import Projects from "./component/Projects";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      children: [
        {
          path: 'projects',
          element: <Projects />,
        },
        {
          path: 'projects/:id',
          element: <ProjectDetails />
        }
      ]
    },
    {
      path: '/login',
      element: <LoginPage />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
