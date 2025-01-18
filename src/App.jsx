import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Layout from './Pages/Layout/Layout';
import Gallery from './Pages/Gallery/Gallery';
import Gallery1 from './Pages/Gallery/Gallery1';
import Contact from './Pages/contact/Contact';

const App = () => {

const router = createHashRouter([
  {path: '/', element: <Layout/>, children:[
    { path: '', element: <Home/>},
    { path: 'gallery', element: <Gallery/>},
    { path: '/gallery-1', element: <Gallery1/>},
    { path: '/contact-us', element: <Contact/>}

  ]}
])
  return <RouterProvider router={router} />;
  
}

export default App