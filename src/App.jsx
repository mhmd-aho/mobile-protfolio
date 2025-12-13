import { createBrowserRouter } from "react-router";
import { RouterProvider} from "react-router/dom";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contacts from "./pages/contacts";
import Certifications from "./pages/certifications";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <About/>
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path:'/certifications',
      element:<Certifications/>
    },
    { 
      path: "/contact",
      element: <Contacts />,
    },
  ])
  return (
    <main className="min-h-screen w-screen overflow-x-hidden">
        <RouterProvider router={router} />
      </main>
    )
}

export default App
