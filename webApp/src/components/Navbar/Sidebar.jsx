import React, { useState } from 'react'
import { Drawer,Box,Typography,IconButton,Link,Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { NavLink } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Sidebar() {

    const [isDrawerOpen,setIsDrawerOpen] = useState(false)
  return (

    <>
    <IconButton size='large' edge='start' color='primary' onClick={()=>setIsDrawerOpen(true)}>

        <MenuIcon/>
    </IconButton>
    <Drawer anchor='left' open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)}>
        <Box sx={{
                display: 'flex',
                alignItems: "center",
                fontSize: "20px",
                gap: "2em",
                flexDirection:'column',
                p:3

            }} >
                <Box>LOGO</Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems:'center',
                    flex: '0.5 1 auto',
                    flexDirection:'column',
                    gap:'2em'
                    
                }}>
                    <Box><Link component={NavLink} underline='none' to='/'>Rent</Link></Box>
                    <Box><Link component={NavLink} underline='none' to='/buy'>Buy</Link></Box>
                    <Box><Link component={NavLink} underline='none' to='/sell'>Sell</Link></Box>
                    <Box display={'flex'} alignItems={'center'}>Manage Property<KeyboardArrowDownIcon/></Box>
                    <Box display={'flex'} alignItems={'center'}>Resources<KeyboardArrowDownIcon/></Box>
                </Box>

                <Box sx={{
                    display: 'flex',
                    gap: '16px',
                    flexDirection:'column'
                }}>
                    <Button variant='outlined'  size='large' >Login</Button>
                    <Button variant='contained' size='large' >Sign up</Button>
                </Box>


            </Box>
    </Drawer>
    </>
  )
}
