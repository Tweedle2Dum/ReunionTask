import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import {
  createBrowserRouter,
  Route,
  Link,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//layout 
import HomeLayout from './layouts/HomeLayout';
//pages




function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route element = {<HomeLayout/>}>
        
      </Route>
      </>
    )
  )

  return (

    <CssBaseline>


    </CssBaseline>
  )
}

export default App
