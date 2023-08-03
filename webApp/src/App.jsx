import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import {
  createBrowserRouter,
  Route,
  Link,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

//layout 
import HomeLayout from './layouts/HomeLayout';
import AuthLayout from './layouts/AuthLayout';
//pages
import Signup from './pages/Authpages/Signup'
import Rent from './pages/Homepages/Rent'
import Buy from './pages/Homepages/Buy'
import Sell from './pages/Homepages/Sell'





function App() { 

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<HomeLayout />}>
          <Route path='/' element={<Rent />}></Route>
          <Route path='/buy' element={<Buy />}></Route>
          <Route path='/sell' element={<Sell />}></Route>
        </Route>

        <Route element={<AuthLayout />}>
          <Route path='/signup' element={<Signup />}></Route>
        </Route>
      </>
    )
  )

  return (

    <CssBaseline>

      <RouterProvider router={router}></RouterProvider>


    </CssBaseline>
  )
}

export default App
