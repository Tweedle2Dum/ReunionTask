import { Box, Typography } from '@mui/material'
import React from 'react'
import Searchbar from '../../components/SearchBar/Searchbar'
import Filter from '../../components/Filter/Filter'
import Results from '../../components/Filter/Results'

export default function Rent() {
  return (
    <>
    <Box sx={{display:'flex',
    alignItems:'center'}}>
      <Typography variant='h4'>Search properties to rent</Typography>
      <Box marginLeft={'auto'}>
      <Searchbar/>

      </Box>
    </Box>

    <Filter/>

    <Results/>
    </>
  )
}
