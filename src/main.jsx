import ReactDOM from 'react-dom/client'
import './global.scss'
import Layout from './components/layout/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './app/home/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
