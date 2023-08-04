import React from 'react'
import { useState,useEffect } from 'react';
import { Box, Button } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
export default function Filter({ filterData, data }) {

    let filteredArray = [...data];
        
    const applyFilters = () => {
        if (filterTerm.location) {
            filteredArray = filteredArray.filter(item => item.location === filterTerm.location);
        }
        if (filterTerm.priceMin) {
            filteredArray = filteredArray.filter(item => item.price >= parseInt(filterTerm.priceMin));
        }
        if (filterTerm.priceMax) {
            filteredArray = filteredArray.filter(item => item.price <= parseInt(filterTerm.priceMax));
        }
        if (filterTerm.date) {
            const filterDate = filterTerm.date.toDate();
            filteredArray = filteredArray.filter(item=>{
                const itemDate = new Date(item.date)
                return itemDate.toLocaleDateString()===filterDate.toLocaleDateString()
            });
        }
        if (filterTerm.propertyType) {
            filteredArray = filteredArray.filter(item => item.propertyType === filterTerm.propertyType);
        }
        return filteredArray;
    };

    const handleClick = () =>{
        filterData([...applyFilters()])
    }

   
  
    const [filterTerm, setFilterTerm] = useState({
        location: null,
        priceMax: null,
        priceMin: null,
        date: null,
        propertyType: null
    })


    useEffect(()=>{
        filterData([...applyFilters()])
    },[])




    return (
        <Box sx={{
            margin: '20px 0',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
        }}>

            <Box sx={{ minWidth: '240px' }}> {/*location*/}
                <FormControl fullWidth>
                    <InputLabel id="location">Location</InputLabel>
                    <Select

                        labelId="location"
                        id="calculator"
                        value={filterTerm.location || ''}
                        label="Location"
                        onChange={(e) => setFilterTerm({ ...filterTerm, location: e.target.value })}
                    >{/* to use---set state later on  */}
                        {data && data.map((obj) => {
                            return (<MenuItem key={obj.id} value={obj.location}>{obj.location}</MenuItem>
                            )
                        })}

                    </Select>
                </FormControl>
            </Box>


            <Box label='When'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label='Select Move-in Date'
                        value={filterTerm.date}
                        onChange={(date) => setFilterTerm({ ...filterTerm, date: date })} />
                </LocalizationProvider>
            </Box>

            <Box display={'flex'}>

                <TextField
                    label="Min"
                    id="Minimum Price"
                    sx={{ m: 1, width: '15ch', margin: '0px', }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
                    }}
                    value={filterTerm.priceMin || ''}
                    onChange={(e) => setFilterTerm({ ...filterTerm, priceMin: e.target.value })}
                />
                <TextField
                    label="Max"
                    id="Maximum Price"
                    sx={{ m: 1, width: '15ch', margin: '0px', }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
                    }}
                    value={filterTerm.priceMax || ''}
                    onChange={(e) => setFilterTerm({ ...filterTerm, priceMax: e.target.value })}
                />

            </Box>

            <Box sx={{ minWidth: '150px' }}> {/*type*/}
                <FormControl fullWidth>
                    <InputLabel id="type">Property Type</InputLabel>
                    <Select
                        labelId="type"
                        id="type"
                        value={filterTerm.propertyType || ''}
                        label="type"
                        onChange={(e) => setFilterTerm({ ...filterTerm, propertyType: e.target.value })}
                    >
                        <MenuItem value={'House'}>House</MenuItem>
                        <MenuItem value={'Villa'}>Villa</MenuItem>
                        <MenuItem value={'Apartment'}>Apartment</MenuItem>


                    </Select>
                </FormControl>
            </Box>
            <Button variant='contained' size='large' onClick={handleClick}>Search</Button>

        </Box>
    )
}
