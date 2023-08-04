import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import {
  createBrowserRouter,
  Route,
  Link,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";


//themes
import { theme } from './themes';
//layout 
import HomeLayout from './layouts/HomeLayout';
import AuthLayout from './layouts/AuthLayout';
//pages
import Signup from './pages/Authpages/Signup'
import Rent from './pages/Homepages/Rent'
import Buy from './pages/Homepages/Buy'
import Sell from './pages/Homepages/Sell'





function App({ children }) {

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

      <ThemeProvider theme={theme}>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </CssBaseline>
  )
}

export default App
