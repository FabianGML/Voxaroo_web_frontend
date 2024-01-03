import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import AppProvider from './AppContext.jsx'
import Profile from './pages/Profile.jsx'
import { useEffect } from 'react'
import NotFound from './pages/NotFound.jsx'

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
    },
    {
      path: '/profile',
      element: <Profile />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])
  useEffect(() => {
    const isDarkMode = window.localStorage.getItem('isDarkMode')
    document.getElementsByTagName('body')[0].classList.add('dark:bg-gray-800')
    if (isDarkMode === null) {
      window.localStorage.setItem('isDarkMode', JSON.stringify(false))
    }
  }, [])

  return (
    <AppProvider>
      <RouterProvider router={routes} />
    </AppProvider>
  )
}
