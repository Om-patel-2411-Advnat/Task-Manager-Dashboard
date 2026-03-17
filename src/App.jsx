import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import Dashboard from "./Pages/DashBoard";
import NewProject from "./Pages/NewProject";
import NewTask from "./Pages/NewTask";

function App() {

  const router = createBrowserRouter([
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/home',
      element:<HomePage />,
      children : [
        {
          index : true ,
          element: <Dashboard />
        },
        {
          path: 'new-project',
          element: <NewProject />
        },
        {
          path: 'new-task',
          element: <NewTask />
        }
      ]
    },
    
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
