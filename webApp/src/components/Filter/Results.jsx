import React from 'react'
import { Box, Grid } from '@mui/material'

import ResultCard from '../Card/ResultCard';

export default function Results({ data }) {
    console.log(data)
    return (
        <Box>
            <Grid container spacing={3}>
                {data && data.map((prop) => {
                    return (<Grid key={prop.id} item xs={12} md={6} xl={4}>
                        <ResultCard location={prop.location} price={prop.price} id={prop.id} />
                        </Grid>
                    )
                })}

            </Grid>

        </Box>
    )
}
