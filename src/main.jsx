import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Layouts/Root.jsx';
import Home from './components/Home.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import AllPlants from './Pages/AllPlants.jsx';
import AddPlant from './Pages/AddPlant.jsx';
import MyPlants from './Pages/MyPlants.jsx';
import PlantDetails from './Pages/PlantDetails.jsx';
import PrivateRoutes from './Route/PrivateRoutes.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import UpdatePlants from './Pages/UpdatePlants.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage> ,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/plants'),
        Component: Home
      },
      {
        path: '/all-plants',
        loader: () => fetch('http://localhost:3000/plants'),
        Component: AllPlants
      },
      {
        path: '/plants-details/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/plants/${params.id}`),
        // Component: PlantDetails,
        element: <PrivateRoutes><PlantDetails></PlantDetails></PrivateRoutes>
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/add-plant',
        // Component: AddPlant,
        element: <PrivateRoutes><AddPlant></AddPlant></PrivateRoutes>
      },
      {
        path: '/my-plants',
        // Component: MyPlants
        element: <PrivateRoutes><MyPlants></MyPlants></PrivateRoutes>
      },
      {
        path: '/update-plants/:id',
        loader:({params}) => fetch(`http://localhost:3000/plants/${params.id}`),
        element: <PrivateRoutes><UpdatePlants></UpdatePlants></PrivateRoutes>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
