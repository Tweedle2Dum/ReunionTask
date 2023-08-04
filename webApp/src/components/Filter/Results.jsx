import React from 'react'
import { Box, Grid,Typography } from '@mui/material'

import ResultCard from '../Card/ResultCard';

export default function Results({ data }) {
    if (!data) {
        return <Typography variant="h6">No data available.</Typography>;
      }
    
      if (data.length === 0) {
        return <Typography variant="h6">No results found.</Typography>;
      }
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
