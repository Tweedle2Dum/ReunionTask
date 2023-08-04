import React from 'react'
import { Box, Grid } from '@mui/material'

import ResultCard from '../Card/ResultCard';

export default function Results() {
    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} xl={4}><ResultCard /></Grid>
                <Grid item xs={12} md={6} xl={4}><ResultCard /></Grid>
                <Grid item xs={12} md={6} xl={4}><ResultCard /></Grid>
                <Grid item xs={12} md={6} xl={4}><ResultCard /></Grid>

            </Grid>

        </Box>
    )
}
