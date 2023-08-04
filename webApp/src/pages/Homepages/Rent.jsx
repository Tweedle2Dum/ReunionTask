import { Box, Typography } from '@mui/material'
import React from 'react'
import Searchbar from '../../components/SearchBar/Searchbar'
import Filter from '../../components/Filter/Filter'
import Results from '../../components/Filter/Results'


const data = [
  {
    "location": "Denver",
    "price": 250000,
    "date": "2023-10-04",
    "propertyType": "House",
  },
  {
    "location": "Phoenix",
    "price": 350000,
    "date": "2023-10-05",
    "propertyType": "Apartment",
  },
  {
    "location": "Las Vegas",
    "price": 450000,
    "date": "2023-10-06",
    "propertyType": "Villa",
  },
  {
    "location": "Atlanta",
    "price": 550000,
    "date": "2023-10-07",
    "propertyType": "House",
  },
  {
    "location": "Charlotte",
    "price": 650000,
    "date": "2023-10-08",
    "propertyType": "Apartment",
  },
  {
    "location": "Washington DC",
    "price": 750000,
    "date": "2023-10-09",
    "propertyType": "Villa",
  },
  {
    "location": "Baltimore",
    "price": 250000,
    "date": "2023-10-10",
    "propertyType": "House",
  },
  {
    "location": "Philadelphia",
    "price": 350000,
    "date": "2023-10-11",
    "propertyType": "Apartment",
  },
  {
    "location": "Pittsburgh",
    "price": 450000,
    "date": "2023-10-12",
    "propertyType": "Villa",
  },
  {
    "location": "Nashville",
    "price": 550000,
    "date": "2023-10-13",
    "propertyType": "House",
  },
  {
    "location": "Memphis",
    "price": 650000,
    "date": "2023-10-14",
    "propertyType": "Apartment",
  },
  {
    "location": "New Orleans",
    "price": 750000,
    "date": "2023-10-15",
    "propertyType": "Villa",
  },
  {
    "location": "Austin",
    "price": 250000,
    "date": "2023-10-16",
    "propertyType": "House",
  },
  {
    "location": "Dallas",
    "price": 350000,
    "date": "2023-10-17",
    "propertyType": "Apartment",
  },
  {
    "location": "Houston",
    "price": 450000,
    "date": "2023-10-18",
    "propertyType": "Villa",
  },
  {
    "location": "San Antonio",
    "price": 550000,
    "date": "2023-10-19",
    "propertyType": "House",
  },
  {
    "location": "El Paso",
    "price": 650000,
    "date": "2023-10-20",
    "propertyType": "Apartment",
  },
  {
    "location": "Corpus Christi",
    "price": 750000,
    "date": "2023-10-21",
    "propertyType": "Villa",
  },
]

export default function Rent() {
  return (
    <>
      <Box sx={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <Typography variant='h4'>Search properties to rent</Typography>
        <Box marginLeft={'auto'}>
          <Searchbar />

        </Box>
      </Box>

      <Filter />

      <Results />
    </>
  )
}
