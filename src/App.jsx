import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import AppProvider from './AppContext.jsx'

export default function App () {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Register />
    }
  ])

  return (
    <AppProvider>
      <RouterProvider router={routes} />
    </AppProvider>
  )
}
