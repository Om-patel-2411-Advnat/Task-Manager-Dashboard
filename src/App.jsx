import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import Dashboard from "./Pages/DashBoard";
import NewProject from "./Pages/NewProject";
import NewTask from "./Pages/NewTask";
import ProjectDetails from "./Pages/ProjectDetails";
import SignUpPage from "./Pages/SignUpPage.jsx";

function App() {

  const Theme = useSelector(state => state.view.Theme);

  useEffect(() => {
    if (Theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [Theme]);

  const router = createBrowserRouter([
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path : '/signup',
      element : <SignUpPage />
    },
    {
      path: '/',
      element: <HomePage />,
      children: [
        {
          index: true,
          element: <Dashboard />
        },
        {
          path: ':project_id',
          element: <ProjectDetails />,
          children : [
            {
              path: 'new-task',
              element: <NewTask />
            },
          ]
        },
        {
          path: 'new-project',
          element: <NewProject />
        },
      ]
    },

  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
