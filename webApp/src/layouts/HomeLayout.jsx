import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar/Navbar'
import { Container } from '@mui/material'

export default function HomeLayout() {
  return (
    <>
      <Navbar />

      <Container maxWidth='lg' sx={{ marginTop: '40px' }}>


        <Outlet></Outlet>

      </Container>

    </>
  )
}
