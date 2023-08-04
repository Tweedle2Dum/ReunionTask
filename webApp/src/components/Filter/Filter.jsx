import React from 'react'
import { Box } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
export default function Filter() {


    return (
        <Box sx={{
            margin: '20px 0',
            border: '1px solid red',
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
                        value={'x'}
                        label="Location"
                    >{/* to use---set state later on  */}
                        <MenuItem value={'x'}>Ten</MenuItem>
                        <MenuItem value={'y'}>Twenty</MenuItem>
                        <MenuItem value={'z'}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>


            <Box label='When'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label='Select Move-in Date' onChange={(date) => {

                        console.log(date.date())
                    }} />
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
                />
                <TextField
                    label="Max"
                    id="Maximum Price"
                    sx={{ m: 1, width: '15ch', margin: '0px', }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
                    }}
                />

            </Box>

            <Box sx={{ minWidth: '240px' }}> {/*type*/}
                <FormControl fullWidth>
                    <InputLabel id="type">Property Type</InputLabel>
                    <Select
                        labelId="type"
                        id="type"
                        value={''}
                        label="Type"
                    >
                        <MenuItem value={'x'}>Ten</MenuItem>
                        <MenuItem value={'y'}>Twenty</MenuItem>
                        <MenuItem value={'z'}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>

        </Box>
    )
}
