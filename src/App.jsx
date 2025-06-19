
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import React from 'react';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFoundPage/NotFound';
import '../src/index.css'
import { Toaster } from 'react-hot-toast';
const router = createBrowserRouter(
  [
    {
      path : '/',
      element : <Home />    
    },
    {
      path : '*',
      element : <NotFound/>
    }
  ]
)
function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster/>
    </div>
  )
}

export default App
