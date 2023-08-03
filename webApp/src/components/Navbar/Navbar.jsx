import { Box, Button } from '@mui/material'
import React from 'react'

export default function Navbar() {
    return (
        <>  <Box sx={{padding:'1em 4em',
        border:'1px solid rgba(0,0,0, 0.1)'}} >
            <Box sx={{
                display: 'flex',
                alignItems: "center",
                fontSize: "20px",
                gap: "2em"

            }} >
                <Box>LOGO</Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flex: '0.5 1 auto'
                }}>
                    <Box>Rent</Box>
                    <Box>Buy</Box>
                    <Box>Sell</Box>
                    <Box>Manage Property</Box>
                    <Box>Resources</Box>
                </Box>

                <Box sx={{
                    display: 'flex',
                    gap: '16px', marginLeft: "auto"
                }}>
                    <Button variant='contained' size='large'>Login</Button>
                    <Button variant='contained' size='large'>Sign up</Button>
                </Box>


            </Box>
        </Box>
        </>
    )
}
