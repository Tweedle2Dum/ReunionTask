import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import Searchbar from '../../components/SearchBar/Searchbar'
import Filter from '../../components/Filter/Filter'
import Results from '../../components/Filter/Results'


const data = [
  {
    "id": 1,
    "location": "Denver",
    "price": 250000,
    "date": "2023-10-04",
    "propertyType": "House"
  },
  {
    "id": 2,
    "location": "Phoenix",
    "price": 350000,
    "date": "2023-10-05",
    "propertyType": "Apartment"
  },
  {
    "id": 3,
    "location": "Las Vegas",
    "price": 450000,
    "date": "2023-10-06",
    "propertyType": "Villa"
  },
  {
    "id": 4,
    "location": "Atlanta",
    "price": 550000,
    "date": "2023-10-07",
    "propertyType": "House"
  },
  {
    "id": 5,
    "location": "Charlotte",
    "price": 650000,
    "date": "2023-10-08",
    "propertyType": "Apartment"
  },
  {
    "id": 6,
    "location": "Washington DC",
    "price": 750000,
    "date": "2023-10-09",
    "propertyType": "Villa"
  },
  {
    "id": 7,
    "location": "Baltimore",
    "price": 250000,
    "date": "2023-10-10",
    "propertyType": "House"
  },
  {
    "id": 8,
    "location": "Philadelphia",
    "price": 350000,
    "date": "2023-10-11",
    "propertyType": "Apartment"
  },
  {
    "id": 9,
    "location": "Pittsburgh",
    "price": 450000,
    "date": "2023-10-12",
    "propertyType": "Villa"
  },
  {
    "id": 10,
    "location": "Nashville",
    "price": 550000,
    "date": "2023-10-13",
    "propertyType": "House"
  },
  {
    "id": 11,
    "location": "Memphis",
    "price": 650000,
    "date": "2023-10-14",
    "propertyType": "Apartment"
  },
  {
    "id": 12,
    "location": "New Orleans",
    "price": 750000,
    "date": "2023-10-15",
    "propertyType": "Villa"
  },
  {
    "id": 13,
    "location": "Austin",
    "price": 250000,
    "date": "2023-10-16",
    "propertyType": "House"
  },
  {
    "id": 14,
    "location": "Dallas",
    "price": 350000,
    "date": "2023-10-17",
    "propertyType": "Apartment"
  },
  {
    "id": 15,
    "location": "Houston",
    "price": 450000,
    "date": "2023-10-18",
    "propertyType": "Villa"
  },
  {
    "id": 16,
    "location": "San Antonio",
    "price": 550000,
    "date": "2023-10-19",
    "propertyType": "House"
  },
  {
    "id": 17,
    "location": "Chicago",
    "price": 600000,
    "date": "2023-10-20",
    "propertyType": "Apartment"
  },
  {
    "id": 18,
    "location": "Los Angeles",
    "price": 700000,
    "date": "2023-10-21",
    "propertyType": "Villa"
  },
  {
    "id": 19,
    "location": "Miami",
    "price": 400000,
    "date": "2023-10-22",
    "propertyType": "House"
  },
  {
    "id": 20,
    "location": "Seattle",
    "price": 300000,
    "date": "2023-10-23",
    "propertyType": "Apartment"
  },
  {
    "id": 21,
    "location": "Boston",
    "price": 800000,
    "date": "2023-10-24",
    "propertyType": "Villa"
  },
  {
    "id": 22,
    "location": "San Francisco",
    "price": 500000,
    "date": "2023-10-25",
    "propertyType": "House"
  },
  {
    "id": 23,
    "location": "New York",
    "price": 450000,
    "date": "2023-10-26",
    "propertyType": "Apartment"
  },
  {
    "id": 24,
    "location": "Portland",
    "price": 350000,
    "date": "2023-10-27",
    "propertyType": "Villa"
  },
  {
    "id": 25,
    "location": "Salt Lake City",
    "price": 550000,
    "date": "2023-10-28",
    "propertyType": "House"
  },
  {
    "id": 26,
    "location": "Minneapolis",
    "price": 600000,
    "date": "2023-10-29",
    "propertyType": "Apartment"
  },
  {
    "id": 27,
    "location": "Detroit",
    "price": 700000,
    "date": "2023-10-30",
    "propertyType": "Villa"
  },
  {
    "id": 28,
    "location": "Orlando",
    "price": 400000,
    "date": "2023-10-31",
    "propertyType": "House"
  },
  {
    "id": 29,
    "location": "Tampa",
    "price": 300000,
    "date": "2023-10-04",
    "propertyType": "Apartment"
  },
  {
    "id": 30,
    "location": "Cleveland",
    "price": 800000,
    "date": "2023-10-05",
    "propertyType": "Villa"
  }
]




export default function Rent() {

  const [filteredData,setFilteredData] = useState([])
  

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
      <Filter filterData = {setFilteredData} data={data} />
      <Results data={filteredData}/>
    </>
  )
}
