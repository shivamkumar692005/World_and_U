import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import './app.css'
import { Country } from './pages/Country';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ErrorPage } from './pages/ErrorPage';
import { AppLayout } from './Components/Layout/AppLayout';


const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/country',
        element: <Country />
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;