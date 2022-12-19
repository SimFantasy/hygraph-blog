import { useRoutes, Navigate } from 'react-router-dom'

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Portfolios from '@/pages/Portfolios'
import Portfolio from '@/pages/Portfolio'
import Posts from '@/pages/Posts'
import Post from '@/pages/Post'
import SinglePage from '@/pages/SinglePage'

const routes = [
  { path: '/', element: <Navigate to='/home' /> },
  { path: '/home', element: <Home /> },
  { path: '/posts', element: <Posts /> },
  { path: '/post/:slug', element: <Post /> },
  { path: '/portfolios', element: <Portfolios /> },
  { path: '/portfolio/:slug', element: <Portfolio /> },
  { path: '/:slug', element: <SinglePage /> },
  { path: '/login', element: <Login /> }
]

const RootRoutes = () => {
  const router = useRoutes(routes)
  return router
}

export default RootRoutes
