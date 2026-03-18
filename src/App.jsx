import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import Dashboard from "./Pages/DashBoard";
import NewProject from "./Pages/NewProject";
import NewTask from "./Pages/NewTask";
import ProjectDetails from "./Pages/ProjectDetails";

function App() {

  const router = createBrowserRouter([
    {
      path: '/login',
      element: <LoginPage />,
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
