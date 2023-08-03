import React from 'react'
import { Box,Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ResultCard from '../Card/ResultCard';

export default function Results() {
    return (
        <Box>
            <Grid container>
                <Grid item xs={6} xl={4}><ResultCard /></Grid>
                <Grid item xs={6} xl={4}><ResultCard /></Grid>
                <Grid item xs={6} xl={4}><ResultCard /></Grid>
                <Grid item xs={6} xl={4}><ResultCard /></Grid>

            </Grid>

        </Box>
    )
}
