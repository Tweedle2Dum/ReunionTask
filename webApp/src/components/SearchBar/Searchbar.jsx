import React from 'react'
import { TextField, Box } from '@mui/material'

export default function Searchbar() {
    return (
        <>
            <Box marginRight={"auto"}>
                <TextField variant='filled'
                    size='small'
                    label='Search by keyword'
                />
            </Box>
        </>
    )
}
