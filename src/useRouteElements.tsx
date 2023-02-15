import { useRoutes } from 'react-router-dom'
import Login from './pages/Login'
import Product from './pages/Product'
import Register from './pages/Register'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'

export default function UseRouteElements() {
  const element  = useRoutes([
    {
      path: '/', element: <Product />,
    },
    {
      path: '/login', element: <RegisterLayout> <Login /> </RegisterLayout>,
    },
    {
      path: '/register', element: <RegisterLayout> <Register /> </RegisterLayout>,
    }
  ])

  return element
}
